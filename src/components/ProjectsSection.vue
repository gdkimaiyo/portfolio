<template>
  <div id="projects" class="projects-section q-pt-xl">
    <div class="text-left q-mb-xl">
      <h2 class="section-title text-h4 text-weight-bold">Projects</h2>
      <div class="title-underline"></div>
    </div>
    <ProjectHolder :projects="projects" />

    <q-btn
      unelevated
      rounded
      color="primary"
      class="q-mb-lg"
      href="https://github.com/gdkimaiyo?tab=repositories"
      target="_blank"
      label="View All Projects"
    />
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
  font-family: "Avenir", sans-serif;
  // font-size: 16px;
}

.section-title {
  color: #0f222d;
  margin: 0;
}

.title-underline {
  width: 55px;
  height: 4px;
  background-color: #0f222d;
  margin: 8px 0;
  border-radius: 2px;
}

@media only screen and (max-width: 575px) {
  #projects {
    font-size: 16px;
  }
  .page-header {
    margin-bottom: 42px;
  }
}
</style>
