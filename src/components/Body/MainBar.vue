<template>
  <main>
    <!-- About Section -->
    <BaseAboutMe />
  </main>
</template>

<script>
import BaseAboutMe from "../Base/BaseAboutMe.vue";

import jsonData from "../../mixins/jsonData.js";

export default {
  name: "MainBar",
  mixins: [jsonData],

  components: {
    BaseAboutMe
  }
};
</script>

<style>
.card,
.card-header {
  border: none;
}

.badge {
  font-size: 14px;
}
</style>
