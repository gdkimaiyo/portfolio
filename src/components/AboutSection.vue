<template>
  <div id="about-me" class="about-section q-mb-lg">
    <div class="text-h5 text-weight-bold">About Me</div>
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
  name: "AboutSection",
});
</script>

<style lang="scss" scoped>
#about-me {
  font-family: "Avenir";
}

@media only screen and (max-width: 575px) {
  //
}
</style>
