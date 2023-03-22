<template>
  <div id="index-page">
    <LandingPage />

    <div class="after-landing q-py-lg q-px-md">
      <div class="text-h5 text-weight-bold">About Me</div>
      <q-separator spaced />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aspernatur asperiores dolorem eveniet fugit. Ipsum, magnam vitae
        temporibus maiores unde fugiat explicabo autem. Officiis voluptatibus
        sapiente totam odio, expedita culpa?
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LandingPage from "../components/LandingPage.vue";

export default defineComponent({
  name: "IndexPage",

  components: { LandingPage },
});
</script>

<style lang="scss" scoped>
#index-page {
  font-family: "Avenir";
}

.after-landing {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
