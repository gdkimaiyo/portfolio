<template>
  <div id="services" class="services-section q-my-lg">
    <div class="text-h5 text-weight-bold">Services</div>
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
  name: "ServicesSection",
});
</script>

<style lang="scss" scoped>
#services {
  font-family: "Avenir";
}

@media only screen and (max-width: 575px) {
  //
}
</style>
