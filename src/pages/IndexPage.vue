<template>
  <div id="index-page" class="q-py-lg q-px-md">
    <div class="text-h5 text-primary">Landing Page</div>
    <q-separator spaced />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      aspernatur asperiores dolorem eveniet fugit. Ipsum, magnam vitae
      temporibus maiores unde fugiat explicabo autem. Officiis voluptatibus
      sapiente totam odio, expedita culpa?
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style lang="scss" scoped>
#index-page {
  font-family: "Avenir";
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
