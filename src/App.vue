<template>
    <v-app>
        <Main>
            <Button class="button__fix">Начать</Button>
            <Header
                ref="header"
                :class="[isHeaderScrolled() && 'fixed']"
                :style="headerHeight"
            >
                <Container class="header__container">
                    <LogoHeader />
                    <Menu />
                    <Button v-if="isCheckupDone">Скачать анкету</Button>
                    <Button v-else>Начать</Button>
                </Container>
            </Header>
            <Body>
                <v-fade-transition mode="out-in">
                    <router-view />
                </v-fade-transition>
            </Body>
            <Footer>
                <Container class="footer__container">
                    <v-flex
                        order-xs1
                        order-sm1
                        order-md3
                        order-lg3
                        md5
                        class="footer__menu"
                        ><Menu
                    /></v-flex>
                    <v-flex order-xs2 order-sm1 xs12 md3 class="footer__logo"
                        ><LogoFooter
                    /></v-flex>
                    <v-flex order-xs3 order-sm2 xs12 xs7 md4
                        ><Copyrights
                    /></v-flex>
                </Container>
            </Footer>
        </Main>
    </v-app>
</template>

<script>
import { Main, Header, Body, Container, Footer } from './components/layout';
import {
    LogoHeader,
    LogoFooter,
    Menu,
    Copyrights,
    Button,
} from './components/blocks';

export default {
    name: 'App',
    components: {
        Main,
        Container,
        Header,
        Footer,
        Body,
        Button,
        Menu,
        LogoHeader,
        LogoFooter,
        Copyrights,
    },

    data() {
        return {
            isCheckupDone: false,
            offsetTop: 0,
            headerOffset: 0,
            headerSize: `64px`,
            headerBigSize: `128px`,
        };
    },
    computed: {
        headerHeight() {
            return {
                height: this.isHeaderScrolled()
                    ? this.headerSize
                    : this.headerBigSize,
            };
        },
    },
    mounted() {
        this.headerOffset = this.$refs.header.$el.clientHeight;
        this.registerHandlers();
        console.log('this', this);
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name;
        },
    },
    beforeDestroy() {
        this.unregisterHandlers();
    },
    methods: {
        isHeaderScrolled() {
            return this.offsetTop >= this.headerOffset;
        },
        registerHandlers() {
            window.addEventListener('scroll', this.handlerScrollWindow);
        },
        unregisterHandlers() {
            window.removeEventListener('scroll', this.handlerScrollWindow);
        },
        handlerScrollWindow() {
            this.offsetTop = window.pageYOffset;
        },
    },

    // actions: {
    //     SET_NAME: async (context, name) => {
    //         let { data } = await Axios.post('http://myapiendpoint.com/api/name', {
    //             name: name
    //         });

    //         if (data.status == 200) {
    //             context.commit('SET_NAME', name);
    //         }
    //     }
    // },

    // beforeRouteEnter(to, from, next) {
    // },
    // beforeRouteUpdate(to, from, next) {
    // }
};
</script>

<style lang="stylus">
@import '~@/assets/styles/index.styl';
</style>
