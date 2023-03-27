<template>
  <div id="testimonials" class="testimonials-section q-my-lg">
    <div class="text-h4 text-weight-bold">Testimonials</div>
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
  name: "TestimonialsSection",
});
</script>

<style lang="scss" scoped>
#testimonials {
  font-family: "Avenir";
}

@media only screen and (max-width: 575px) {
  //
}
</style>
