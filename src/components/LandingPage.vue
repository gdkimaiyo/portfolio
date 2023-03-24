<template>
  <div id="landing-page" class="landing-page">
    <div class="page-header q-mt-md">Hi, <em>I am Gideon</em></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { animateFunc } from "../utils/helpers";

export default defineComponent({
  name: "LandingPage",

  mounted() {
    animateFunc();
  },

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
  padding-top: 9vh;
  padding-bottom: 5vh;
}
.page-header {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 18px;
  font-size: 38px;
  font-weight: bold;
}

em {
  padding-right: 6px;
  border-right: 0.05em solid white;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

@media only screen and (max-width: 575px) {
  .landing-page {
    height: 35vh;
    padding-top: 11vh;
  }
  .page-header {
    font-size: 28px;
  }
}
</style>
