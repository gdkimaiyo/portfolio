<template>
  <div id="banner-section" class="banner-section text-dark">
    <div class="banner-container row items-center justify-between">
      <div class="banner-content q-py-xl q-px-md">
        <!-- Mobile Avatar (Visible only on handset) -->
        <div class="lt-sm q-mb-md">
          <q-avatar size="160px" class="shadow-3">
            <img
              src="../assets/profile_pics/dp_primary.jpg"
              alt="Profile Avatar"
            />
          </q-avatar>
        </div>

        <h1 class="text-h3 text-weight-bold banner-title">Gideon Kimaiyo</h1>
        <p class="text-subtitle1 banner-subtitle q-mt-md">
          Senior Full-Stack Software Engineer. I build secure, scalable software
          and cloud solutions that solve real world problems.
        </p>
        <div class="banner-btns q-mt-lg">
          <q-btn
            unelevated
            rounded
            color="primary"
            label="View Projects"
            @click="scrollTo('projects')"
          />
          <q-btn
            outline
            rounded
            class="btn-secondary q-ml-md"
            label="Contact Me"
            @click="goTo('contact')"
          />
        </div>

        <div class="social-links q-mt-lg items-center justify-center">
          <a
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon-btn q-mr-md"
            v-for="(social, index) in socials"
            :aria-label="social.name || 'Social link'"
            :key="index"
          >
            <q-icon :name="social.logo" size="24px" />
          </a>
        </div>
      </div>

      <!-- IMAGE (Hidden on handset, full height on desktop) -->
      <div class="banner-image gt-xs">
        <img
          src="../assets/profile_pics/dp_primary.jpg"
          alt="Banner Visual"
          class="seamless-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SOCIALS } from "src/utils/constants";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LandingPage",

  setup() {
    return {
      socials: ref(SOCIALS),
    };
  },

  methods: {
    scrollTo(ref) {
      this.$router.push({ name: "home", hash: `#${ref}` });
    },

    goTo(route) {
      this.$router.push(route);
    },
  },
});
</script>

<style lang="scss" scoped>
#banner-section {
  font-family: "Avenir";
}

.banner-section {
  background: linear-gradient(to right, #73a3bd 0%, #8bb4cb 100%);
  width: 100%;
  position: relative;
  overflow: hidden;

  // background-image: url("../assets/landing-image.jpeg");
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center center;
  // color: #ffffff;
  // padding-top: 9vh;
  // padding-bottom: 5vh;
}

.banner-container {
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  min-height: 480px; /* Gives a solid baseline height on desktop */
}

.banner-content {
  width: 55%;
  max-width: 55%;
  z-index: 2;
  text-align: left;
}

/* Desktop Full-Height Positioning */
.banner-image {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.seamless-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Fills 100% of banner height without distorting image aspect ratio */
  object-position: center top;
  display: block;
  border: none;
  outline: none;
}

.banner-title {
  color: #0f222d;
  line-height: 1.2;
}

.banner-subtitle {
  color: #1e3a4b;
}

// .btn-primary {
//   color: #ffffff !important;
//   background-color: #0f222d !important;
//   border-color: #0f222d !important;
//   font-weight: 600;
//   transition: all 0.25s ease-in-out;
// }

.btn-secondary {
  color: #0f222d !important;
  border-color: #0f222d !important;
  font-weight: 600;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: rgba(15, 34, 45, 0.08) !important;
  }
}

/* Social Links */
.social-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: #0f222d;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  text-decoration: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #0f222d;
    transform: translateY(-3px);
  }
}

// em {
//   padding-right: 6px;
//   border-right: 0.05em solid white;
//   animation: caret 1s steps(1) infinite;
// }

// @keyframes caret {
//   50% {
//     border-color: transparent;
//   }
// }

@media only screen and (max-width: 599px) {
  .banner-container {
    min-height: auto;
  }

  .banner-content {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
