<template>
  <div id="index-page">
    <LandingPage />

    <div class="after-landing q-pt-lg q-pb-xl q-px-md">
      <AboutSection id="abtme" />
      <ProjectsSection id="projects" />
      <ServicesSection id="services" />
      <ExpertiseSection />
      <TestimonialsSection />
      <FindMe id="findme" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LandingPage from "../components/LandingPage.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ExpertiseSection from "../components/ExpertiseSection.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";
import FindMe from "../components/FindMe.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    LandingPage,
    AboutSection,
    ProjectsSection,
    ServicesSection,
    ExpertiseSection,
    TestimonialsSection,
    FindMe,
  },
});
</script>

<style lang="scss" scoped>
#index-page {
  font-family: "Avenir";
}

.after-landing {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
