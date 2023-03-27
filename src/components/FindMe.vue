<template>
  <div id="find-me" class="findme-section q-mb-xl">
    <div class="text-h4 text-weight-bold">Find Me</div>
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
  name: "FindMe",
});
</script>

<style lang="scss" scoped>
#find-me {
  font-family: "Avenir";
}

@media only screen and (max-width: 575px) {
  //
}
</style>
