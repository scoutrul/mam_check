const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
	window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
	window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
const SpeechSynthesisUtterance =
	window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();

/** Speech Flags */
let FLAG_SPEECH_MANUALLY_STOPPED = false;

/** Recognition Flags */
let FLAG_RECOGNITION_STARTED = false;
let FLAG_RECOGNITION_MANUALLY_STOPPED = false;

const SpeechService = {
	// FLAG_SPEECH_MANUALLY_STOPPED: false,
	// FLAG_RECOGNITION_STARTED: false,
	// FLAG_RECOGNITION_MANUALLY_STOPPED: false,

	textConversion(text, options) {
		if (!synth) {
			throw new Error('Синтезатор речи не поддерживается');
		}

		FLAG_SPEECH_MANUALLY_STOPPED = false;

		const voices = synth.getVoices();

		setTimeout(() => {
			function speak() {
				if (synth.speaking) {
					synth.cancel();
					setTimeout(speak.bind(this), 100);
				} else {
					const utterThis = new SpeechSynthesisUtterance(text);

					voices.forEach(voice => {
						if (
							voice.name === 'Google русский' ||
							voice.name === 'Microsoft Irina Desktop - Russian'
						) {
							utterThis.voice = voice;
						}
					});

					utterThis.onstart = event => {
						if (options.onStart) {
							options.onStart(event);
						}
					};

					utterThis.onend = event => {
						const customEvent = Object.assign(event, {
							manuallyStopped: FLAG_SPEECH_MANUALLY_STOPPED,
						});

						FLAG_SPEECH_MANUALLY_STOPPED = false;

						if (options.onEnd) {
							options.onEnd(customEvent);
						}
					};

					synth.speak(utterThis);
				}
			}

			speak();
		}, 30);
	},

	stopTextConversion() {
		FLAG_SPEECH_MANUALLY_STOPPED = true;
		synth.cancel();
	},

	speechRecognition(options) {
		FLAG_RECOGNITION_MANUALLY_STOPPED = false;

		recognition.lang = 'ru-RU';
		recognition.interimResults = false;
		recognition.maxAlternatives = 1;

		if (!FLAG_RECOGNITION_STARTED) {
			recognition.start();
		}

		FLAG_RECOGNITION_STARTED = true;

		recognition.onstart = event => {
			if (options.onStart) {
				options.onStart(event);
			}
		};

		recognition.onend = event => {
			FLAG_RECOGNITION_STARTED = false;

			const customEvent = Object.assign(event, {
				manuallyStopped: FLAG_RECOGNITION_MANUALLY_STOPPED,
			});

			FLAG_RECOGNITION_MANUALLY_STOPPED = false;

			if (options.onEnd) {
				options.onEnd(customEvent);
			}
		};

		recognition.onresult = event => {
			if (options.onResult) {
				options.onResult(event, event.results[0][0].transcript);
			}
		};

		recognition.onsoundstart = event => {
			if (options.onSoundStart) {
				options.onSoundStart(event);
			}
		};

		recognition.onsoundend = event => {
			if (options.onSoundEnd) {
				options.onSoundEnd(event);
			}
		};
	},

	stopSpeechRecognition() {
		FLAG_RECOGNITION_STARTED = false;
		FLAG_RECOGNITION_MANUALLY_STOPPED = true;
		recognition.stop();
	},

	identityPhrase(voicePhrase, phrases) {
		let goalPhrase = null;

		let canLevenshtein = true;

		phrases.forEach(phrase => {
			if (phrase.split(' ').length <= 1) {
				canLevenshtein = false;
			}

			if (voicePhrase.toLowerCase() === phrase.toLowerCase()) {
				goalPhrase = phrase;
			}
		});

		if (!goalPhrase && canLevenshtein) {
			phrases.forEach(phrase => {
				if (this.levenshteinDistance(voicePhrase, phrase) < 10) {
					goalPhrase = phrase;
				}
			});
		}

		return goalPhrase;
	},

	levenshteinDistance(a, b) {
		if (a.length === 0) return b.length;
		if (b.length === 0) return a.length;

		const matrix = [];

		// increment along the first column of each row
		let i;
		for (i = 0; i <= b.length; i += 1) {
			matrix[i] = [i];
		}

		// increment each column in the first row
		let j;
		for (j = 0; j <= a.length; j += 1) {
			matrix[0][j] = j;
		}

		// Fill in the rest of the matrix
		for (i = 1; i <= b.length; i += 1) {
			for (j = 1; j <= a.length; j += 1) {
				if (b.charAt(i - 1) === a.charAt(j - 1)) {
					matrix[i][j] = matrix[i - 1][j - 1];
				} else {
					matrix[i][j] = Math.min(
						matrix[i - 1][j - 1] + 1, // substitution
						Math.min(
							matrix[i][j - 1] + 1, // insertion
							matrix[i - 1][j] + 1,
						),
					); // deletion
				}
			}
		}

		return matrix[b.length][a.length];
	},
};

export default SpeechService;
