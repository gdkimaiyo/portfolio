<template>
  <q-layout view="lHh Lpr lFf">
    <NavBar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <MyFooter />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "../shared/NavBar.vue";
import MyFooter from "../shared/MyFooter.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    NavBar,
    MyFooter,
  },
});
</script>
