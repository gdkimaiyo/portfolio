<template>
  <div id="app" class="">
    <NavBar></NavBar>
    <div class="container row pt-2 m-auto justify-content-center">
      <div class="col-md-3">I am a SidebBar</div>
      <div class="col-md-9">I am the Main Section</div>
    </div>
  </div>
</template>

<script>
import NavBar from "./Body/NavBar.vue";

export default {
  name: "Layout",
  
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
