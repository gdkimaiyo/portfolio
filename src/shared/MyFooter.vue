<template>
  <footer id="footer" class="footer bg-white">
    <p class="text-center q-pa-sm">Gideon Kimaiyo</p>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyFooter",
});
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #42b983;
  /* box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f; */
}

@media only screen and (max-width: 575px) {
  .footer {
    box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 8px #42b983;
  }
}
</style>
