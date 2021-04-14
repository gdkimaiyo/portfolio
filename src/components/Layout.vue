<template>
    <div id="app" class="">
        <NavBar />
        <div class="container row pt-2 m-auto justify-content-center">
            <div class="col-md-3"><SideBar /></div>
            <div class="col-md-9"><MainBar /></div>
        </div>
        <Footer />
    </div>
</template>

<script>
import NavBar from "./Body/NavBar.vue";
import SideBar from "./Body/SideBar.vue";
import MainBar from "./Body/MainBar.vue";
import Footer from "./Body/Footer.vue";

export default {
    name: "Layout",

    components: {
        NavBar,
        SideBar,
        MainBar,
        Footer
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
