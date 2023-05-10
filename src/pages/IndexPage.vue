<template>
  <div id="index-page">
    <LandingPage />

    <div class="after-landing abtme q-pt-lg q-px-md">
      <AboutSection id="abtme" />
      <ProjectsSection id="projects" />
    </div>

    <ServicesSection id="services" />

    <div class="after-landing q-mt-lg q-pt-xl q-px-md" id="skills">
      <ExpertiseSection />
    </div>

    <TestimonialsSection id="testimonials" />

    <div class="after-landing q-py-xl q-px-md">
      <FindMe />
    </div>

    <q-btn
      unelevated
      round
      color="white"
      text-color="primary"
      size="sm"
      icon="fas fa-angles-up"
      class="scroll-back-btn"
      id="scroll-back-btn"
      @click="scrollBack()"
    />
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

import { scrollToTop } from "../utils/helpers";

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

  mounted() {
    scrollToTop();
  },

  methods: {
    scrollBack() {
      // smooth scroll
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    },
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

.scroll-back-btn {
  position: fixed;
  visibility: hidden;
  bottom: 20px;
  z-index: 99;
  right: 17%;
}

@media only screen and (max-width: 575px) {
  .scroll-back-btn {
    right: 10%;
  }
}
</style>
