<template>
  <div id="projects" class="projects-section q-pt-xl q-pb-sm q-px-md">
    <div class="projects-container">
      <!-- Section Header -->
      <div class="text-left q-mb-xl">
        <h2 class="section-title text-h4 text-weight-bold">Projects</h2>
        <div class="title-underline"></div>
      </div>

      <!-- Projects List Holder -->
      <ProjectHolder :projects="projects" />

      <!-- View All CTA -->
      <!-- <div class="q-mt-none q-mb-lg">
        <q-btn
          unelevated
          rounded
          class="github-cta-btn text-weight-medium"
          href="https://github.com/gdkimaiyo?tab=repositories"
          target="_blank"
          icon-right="fab fa-github"
          label="View All Projects"
        />
      </div> -->
    </div>
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
.projects-section {
  font-family: "Avenir", sans-serif;
  background-color: #f1f5f9;
  border-radius: 72px 72px 0 0;
}

.projects-container {
  max-width: 1024px;
  margin: 0 auto;
}

.section-title {
  color: #0f222d;
  margin: 0;
}

.title-underline {
  width: 55px;
  height: 4px;
  background-color: #0f222d;
  margin: 8px 0 0 0;
  border-radius: 2px;
}

.github-cta-btn {
  background-color: #0f222d;
  color: #ffffff;
  font-size: 15px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #1e3a4b;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(15, 34, 45, 0.15);
  }
}

@media only screen and (max-width: 600px) {
  .projects-section {
    border-radius: 36px 36px 0 0;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
