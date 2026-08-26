<template>
  <div id="index-page">
    <LandingPage />

    <div class="after-landing abtme q-pt-lg q-px-md">
      <AboutSection id="abtme" ref="#abtme" />
      <ExpertiseSection id="skills" ref="#skills" />
      <TestimonialsSection id="testimonials" ref="#testimonials" />
    </div>

    <ProjectsSection id="projects" ref="#projects" />

    <div class="after-landing q-px-md">
      <ExperienceSection id="experience" ref="#experience" />
    </div>

    <ServicesSection id="services" ref="#services" />

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

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useMeta } from "quasar";
import LandingPage from "../components/LandingPage.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ExpertiseSection from "../components/ExpertiseSection.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";

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
    ExperienceSection,
  },

  setup() {
    const scrollBack = () => {
      // Smoot scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    useMeta({
      title: "Gideon Kimaiyo | Senior Full-Stack AI Engineer",
      meta: {
        description: {
          name: "description",
          content:
            "Senior Full-Stack AI Engineer building production-grade AI, SaaS and cloud applications with Python, React, TypeScript, AWS and GCP.",
        },
        ogTitle: {
          property: "og:title",
          content: "Gideon Kimaiyo | Senior Full-Stack AI Engineer",
        },
        ogDescription: {
          property: "og:description",
          content:
            "Senior Full-Stack AI Engineer building production-grade AI, SaaS and cloud applications with Python, React, TypeScript, AWS and GCP.",
        },
        ogType: { property: "og:type", content: "website" },
        ogUrl: {
          property: "og:url",
          content: "https://gideonkimaiyo.netlify.app/",
        },
        ogImage: {
          property: "og:image",
          content: "https://gideonkimaiyo.netlify.app/images/og-cover.jpg",
        },
        twitterCard: { name: "twitter:card", content: "summary_large_image" },
        twitterTitle: {
          name: "twitter:title",
          content: "Gideon Kimaiyo | Senior Full-Stack AI Engineer",
        },
        twitterDescription: {
          name: "twitter:description",
          content:
            "Senior Full-Stack AI Engineer building production-grade AI, SaaS and cloud applications with Python, React, TypeScript, AWS and GCP.",
        },
        twitterImage: {
          name: "twitter:image",
          content: "https://gideonkimaiyo.netlify.app/images/og-cover.jpg",
        },
      },
    });

    onMounted(() => {
      scrollToTop();
      scrollBack;
    });

    return {
      scrollBack,
    };
  },
});
</script>

<style lang="scss" scoped>
#index-page {
  font-family: "Avenir";
}

.after-landing {
  width: 100%;
  max-width: 1124px;
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
