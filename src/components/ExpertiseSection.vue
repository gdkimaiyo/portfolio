<template>
  <div id="expertise" class="expertise-section q-my-lg">
    <div class="text-h5 text-weight-bold">Expertise</div>
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
  name: "ExpertiseSection",
});
</script>

<style lang="scss" scoped>
#expertise {
  font-family: "Avenir";
}

@media only screen and (max-width: 575px) {
  //
}
</style>
