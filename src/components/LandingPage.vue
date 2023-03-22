<template>
  <div id="landing-page" class="landing-page">
    <div class="text-center">
      <q-avatar size="150px">
        <img src="../assets/display_picture.jpeg" alt="user-image" />
      </q-avatar>
      <span class="page-header q-pl-lg gt-xs">Hi, <em>I am Gideon</em></span>
      <div class="page-header q-mt-md lt-sm">Hi, <em>I am Gideon</em></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingPage",
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
  height: 40vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.page-header {
  font-size: 24px;
  font-weight: bold;
}

@media only screen and (max-width: 575px) {
  .landing-page {
    height: 45vh;
    padding-top: 8vh;
    padding-bottom: 7vh;
  }
}
</style>
