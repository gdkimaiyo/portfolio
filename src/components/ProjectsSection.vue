<template>
  <div id="projects" class="projects-section q-my-lg">
    <div class="page-header text-h4 text-weight-bold">Featured Projects</div>
    <ProjectHolder :projects="projects" />

    <q-btn
      unelevated
      rounded
      color="primary"
      class="q-mb-xl"
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
.page-header {
  padding-top: 48px;
  margin-bottom: 56px;
  // color: #000000;
}

.page-header:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0 auto 0 3px; /* This will center the border. */
  width: 30%; /* Change this to whatever width you want. */
  padding-top: 10px; /* This creates some space between the element and the border. */
  border-bottom: 6px solid #000000; /* This creates the border. Replace black with whatever color you want. */
  font-weight: 700;
  max-width: 60px;
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
