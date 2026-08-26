<template>
  <div id="about-me" class="about-section">
    <!-- Section Title -->
    <div class="about-me-heading text-center lt-sm">
      <h2 class="text-h4 text-weight-bold section-title">About Gideon</h2>
      <div class="title-underline-mobile"></div>
    </div>
    <div class="about-me-heading gt-xs">
      <h2 class="text-h4 text-weight-bold section-title">About Gideon</h2>
      <div class="title-underline"></div>
    </div>
    <div class="section q-mt-md">
      <!-- <div class="image-div q-mr-md">
        <img
          src="../assets/software_developer_2.png"
          class="about-me-illustration"
          alt="user image"
        />
      </div> -->
      <div class="content-div">
        <div class="q-my-lg">
          <p class="text-body1">
            <!-- I am a <b>Senior Full-Stack Developer and DevOps Engineer</b> with
            over {{ years }} years of experience. I specialize in building,
            deploying and maintaining secure and scalable web applications.
            Handling everything from full-stack development with Django or
            NodeJs and React or Vue3 to automated cloud infrastructure, CI/CD
            pipelines and database optimization.

            I am a Senior Full-Stack Software Engineer with over
            {{ years }} years of experience building, deploying and maintaining
            secure, scalable web applications. I bridge the gap between product
            development and platform architecture, handling from backend
            development with Django or Node.js to modern frontend interfaces
            with React or Vue 3 and automated cloud infrastructure. -->

            I am a Senior Full-Stack AI Engineer with {{ years }}+ years of
            experience building, scaling and operating production-grade software
            across AI, life sciences, healthcare and EdTech. I specialize in
            building end-to-end applications using Python, Django/FastAPI,
            React, TypeScript and Node.js, with hands-on experience developing
            RAG-powered applications, Intelligent Research Assistants, AI-driven
            workflows and real-time collaborative systems.
          </p>
          <p class="text-body1">
            I enjoy working across the entire product lifecycle, from designing
            backend services and data workflows to building intuitive frontend
            experiences and deploying reliable cloud infrastructure. I have
            built and operated production systems across AWS and GCP,
            containerized applications with Docker, automated CI/CD pipelines
            with GitHub Actions, and optimized database and API performance for
            data-intensive workloads. My focus is on building secure,
            maintainable systems that are reliable in production and designed to
            scale.
          </p>
          <p class="text-body1">
            Beyond application development, I am interested in the intersection
            of AI and software engineering, particularly LLM applications,
            retrieval systems, intelligent automation and how AI can improve
            complex business and research workflows. When I am not building
            software, I enjoy reading, spending time with friends and exploring
            emerging technologies that expand what modern software systems can
            do.
          </p>
          <p class="q-mt-lg">
            <span class="sub-label">
              <q-icon name="fas fa-location-dot" size="18px" />
              Nairobi,
            </span>
            <span style="font-style: italic">Kenya</span>

            <span class="q-px-md gt-xs">
              <q-icon name="fas fa-circle" size="6px" />
            </span>

            <span class="sub-label gt-xs">
              <q-icon name="fas fa-square-envelope" size="18px" />
            </span>
            <span style="font-style: italic" class="gt-xs">
              gdkimaiyo@gmail.com
            </span>

            <span class="q-px-md">
              <q-icon name="fas fa-circle" size="7px" />
            </span>

            <span class="sub-label">
              <q-icon name="fas fa-language" size="14px" />
              <!-- <q-icon
                name="fas fa-language"
                size="18px"
                style="padding-right: 2px"
                class="lt-sm"
              /> -->
            </span>
            <span style="font-style: italic">English</span>
            <span class="q-px-sm gt-xs">
              <q-icon name="fas fa-circle" size="3px" />
            </span>
            <span class="gt-xs" style="font-style: italic">Swahili</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// import { getImgUrl, randomNumber } from "../utils/helpers";

export default defineComponent({
  name: "AboutSection",

  setup() {
    return {
      years: ref(new Date().getFullYear() - 2019),
      pics: ref(["dp_primary.jpg", "dp_secondary.jpg"]),
    };
  },

  methods: {
    isHandset() {
      return screen.width <= 575 ? true : false;
    },

    // getImgUrl,
    // randomNumber,
  },
});
</script>

<style lang="scss" scoped>
#about-me {
  font-family: "Avenir";
  font-size: 16px;
}

.about-me-heading {
  margin-bottom: 48px;
}
.section-title {
  color: #0f222d;
  margin: 0;
}

.title-underline {
  width: 70px;
  height: 4px;
  background-color: #0f222d;
  margin: 8px 0;
  border-radius: 2px;
}

.title-underline-mobile {
  width: 70px;
  height: 4px;
  background-color: #0f222d;
  margin: 8px auto 0 auto;
  border-radius: 2px;
}

.about-section {
  padding-top: 72px;
  margin-bottom: 64px;
}
.section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.image-div {
  width: 40%;
  max-width: 40%;
  align-content: center;
  text-align: center;
  flex-grow: 1;
}
.about-me-illustration {
  max-width: 100%;
  height: auto;
  display: block;
}
.content-div {
  width: 100%;
  max-width: 100%;
  align-content: center;
  flex-grow: 1;
  padding: 0 24px;

  background-color: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(15, 34, 45, 0.04);
}
.href-link {
  text-decoration: none;
}
.href-link:hover {
  text-decoration: underline;
}
.sub-label {
  padding-right: 6px;
  color: #6c757d;
  font-weight: bold;
}

@media only screen and (max-width: 575px) {
  #about-me {
    font-size: 14px;
  }
  .about-me-heading {
    margin-bottom: 32px;
  }

  .about-section {
    padding-top: 32px;
    margin-bottom: 32px;
  }
  .section {
    flex-direction: column;
    text-align: center;
    padding: 8px;
  }
  .image-div {
    width: 100%;
    max-width: 100%;
  }
  .content-div {
    width: 100%;
    max-width: 100%;
    text-align: left;
    padding: 0 16px;
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
