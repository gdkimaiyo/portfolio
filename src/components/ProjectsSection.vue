<template>
  <div id="projects" class="projects-section q-my-lg">
    <div class="text-h5 text-weight-bold q-mb-lg">Featured Projects</div>
    <ProjectHolder :projects="projects" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ProjectHolder from "./ProjectHolder.vue";
import { PROJECTS } from "../utils/constants";

export default defineComponent({
  name: "ProjectsSection",

  components: { ProjectHolder },

  setup() {
    return {
      projects: ref(PROJECTS),
    };
  },
});
</script>

<style lang="scss" scoped>
#projects {
  font-family: "Avenir";
  font-size: 16px;
}

@media only screen and (max-width: 575px) {
  #projects {
    font-size: 16px;
  }
}
</style>
