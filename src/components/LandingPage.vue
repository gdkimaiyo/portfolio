<template>
  <div id="landing-page" class="landing-page">
    <div class="page-header q-mt-md">
      Hi, <em>I am Gideon</em>
      <!-- Hi, <em>I am a Software Engineer</em> -->
    </div>
    <!-- <div class="text-center">
      <q-avatar size="150px">
        <img src="../assets/display_picture.jpeg" alt="user-image" />
      </q-avatar>
      <span class="page-header q-pl-lg gt-xs">Hi, <em>I am Gideon</em></span>
      <div class="page-header q-mt-md lt-sm">Hi, <em>I am Gideon</em></div>
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingPage",

  methods: {
    isHandset() {
      return screen.width <= 575 ? true : false;
    },
  },
});
</script>

<style lang="scss" scoped>
#landing-page {
  font-family: "Avenir";
}
.landing-page {
  background-image: url("../assets/landing-image.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #ffffff;
  height: 30vh;
  padding-top: 11vh;
  padding-bottom: 5vh;
}
.page-header {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 18px;
  font-size: 24px;
  font-weight: bold;
}

@media only screen and (max-width: 575px) {
  .landing-page {
    height: 35vh;
  }
}
</style>
