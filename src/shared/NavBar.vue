<template>
  <q-header id="navbar">
    <q-toolbar
      class="toolbar bg-white text-primary q-py-sm row items-center justify-between"
    >
      <div class="row items-center">
        <!-- Mobile Logo Image -->
        <a class="logo-btn lt-sm" clickable @click="goHome()">
          <img
            src="../assets/gdk-logo-512x512.png"
            height="42"
            width="42"
            alt="Logo"
          />
        </a>

        <!-- Desktop Logo Image -->
        <a class="logo-btn gt-xs row items-center" clickable @click="goHome()">
          <img
            src="../assets/gdk-logo-512x512.png"
            height="48"
            width="48"
            alt="Logo"
          />
        </a>
      </div>

      <!-- RIGHT: Nav Links & Mobile Toggle -->
      <div class="row items-center">
        <a
          class="nav-btn gt-xs q-px-sm"
          :class="{
            'active-link':
              activeSection === '#home' && currentRoute !== '/contact',
          }"
          clickable
          @click="goHome()"
        >
          <!-- <q-icon name="fas fa-house" size="18px" /> -->
          Home
        </a>
        <a
          class="nav-btn gt-xs q-px-sm"
          :class="{ 'active-link': activeSection === '#abtme' }"
          clickable
          @click="scrollTo('abtme')"
        >
          <!-- <q-icon name="fas fa-circle-info" size="18px" /> -->
          About Me
        </a>
        <!-- <a
          class="nav-btn gt-xs q-px-sm"
          :class="{ 'active-link': activeSection === '#skills' }"
          clickable
          @click="scrollTo('skills')"
        >
          <q-icon name="fas fa-laptop-code" size="18px" />
          Skills
        </a> -->
        <a
          class="nav-btn gt-xs q-px-sm"
          :class="{ 'active-link': activeSection === '#projects' }"
          clickable
          @click="scrollTo('projects')"
        >
          <!-- <q-icon name="fas fa-code-branch" size="18px" /> -->
          Projects
        </a>
        <a
          class="nav-btn gt-xs q-px-sm"
          :class="{ 'active-link': activeSection === '#experience' }"
          clickable
          @click="scrollTo('experience')"
        >
          <!-- <q-icon name="fas fa-code-branch" size="18px" /> -->
          Experience
        </a>
        <a
          class="nav-btn gt-xs q-px-sm"
          clickable
          :class="{ 'active-link': activeSection === '#services' }"
          @click="scrollTo('services')"
        >
          <!-- <q-icon name="fas fa-gear" size="18px" /> -->
          Services
        </a>
        <!-- <a
          class="nav-btn gt-xs q-px-sm"
          :class="{ 'active-link': activeSection === '#testimonials' }"
          clickable
          @click="scrollTo('testimonials')"
        >
          <q-icon name="fas fa-comment-dots" size="18px" />
          Testimonials
        </a>
        <a
          class="nav-btn gt-xs"
          :class="{ 'active-link': currentRoute === '/support-me' }"
          clickable
          @click="goTo('/support-me')"
        >
          <q-icon name="fas fa-circle-dollar-to-slot" size="18px" />
          <q-icon name="fas fa-hand-holding-dollar" size="18px" />
          Support Me
        </a> -->
        <a
          class="nav-btn gt-xs q-px-sm"
          :class="{ 'active-link': currentRoute === '/contact' }"
          clickable
          @click="goTo('/contact')"
        >
          <!-- <q-icon name="fas fa-square-envelope" size="18px" /> -->
          Contact Me
        </a>

        <!-- Mobile Drawer Toggle -->
        <q-btn
          flat
          dense
          round
          class="menu-btn lt-sm"
          icon="menu"
          aria-label="Toggle navigation menu"
          @click="dropDownMenu = !dropDownMenu"
        >
          <q-menu
            auto-close
            max-width="450px"
            max-height="93vh"
            :offset="[15, 15]"
            transition-show="jump-down"
            transition-hide="jump-up"
            class="lt-sm mobile-q-menu"
          >
            <q-list class="mobile-dropdown-menu q-py-lg">
              <!-- ABOUT ME -->
              <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/abtme' }"
                clickable
                v-ripple
                @click="scrollTo('abtme')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-circle-info" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  About Me
                </q-item-section>
              </q-item>

              <!-- SKILLS -->
              <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/skills' }"
                clickable
                v-ripple
                @click="scrollTo('skills')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-laptop-code" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  Skills
                </q-item-section>
              </q-item>

              <!-- PROJECTS -->
              <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/projects' }"
                clickable
                v-ripple
                @click="scrollTo('projects')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-code-branch" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  Projects
                </q-item-section>
              </q-item>

              <!-- EXPERIENCE -->
              <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/experience' }"
                clickable
                v-ripple
                @click="scrollTo('experience')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-briefcase" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  Experience
                </q-item-section>
              </q-item>

              <!-- SERVICES -->
              <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/services' }"
                clickable
                v-ripple
                @click="scrollTo('services')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-gear" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  Services
                </q-item-section>
              </q-item>

              <!-- TESTIMONIALS -->
              <!-- <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/testimonials' }"
                clickable
                v-ripple
                @click="scrollTo('testimonials')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-comment-dots" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  Testimonials
                </q-item-section>
              </q-item> -->

              <q-separator color="white-10" class="menu-separator q-my-md" />

              <!-- CONTACT ME -->
              <q-item
                class="menu-item"
                :class="{ 'active-q-item': currentRoute === '/contact' }"
                clickable
                v-ripple
                @click="goTo('/contact')"
              >
                <q-item-section avatar class="min-icon-width">
                  <q-icon name="fas fa-square-envelope" size="18px" />
                </q-item-section>
                <q-item-section class="text-weight-medium">
                  Contact Me
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <!-- <q-btn
          flat
          dense
          round
          class="menu-btn lt-sm"
          icon="menu"
          aria-label="Menu"
          @click="dropDownMenu = !dropDownMenu"
        >
          <q-menu
            auto-close
            :offset="[15, 15]"
            transition-show="jump-down"
            transition-hide="jump-up"
            max-width="450px"
            max-height="93vh"
            class="lt-sm"
          >
            <q-list
              class="dropdown-menu bg-primary text-white q-pt-xl"
              style="min-width: 300px; min-height: 85vh; margin-top: 0"
            >
              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/abtme' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('abtme')"
                >
                  <q-icon name="fas fa-circle-info" class="q-pr-sm" />
                  About Me
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/skills' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('skills')"
                >
                  <q-icon name="fas fa-laptop-code" class="q-pr-sm" />
                  Skills
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/projects' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('projects')"
                >
                  <q-icon name="fas fa-code-branch" class="q-pr-sm" />
                  Projects
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/experience' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('experience')"
                >
                  <q-icon name="fas fa-briefcase" class="q-pr-sm" />
                  Experience
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/services' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('services')"
                >
                  <q-icon name="fas fa-gear" class="q-pr-sm" />
                  Services
                </q-item-section>
              </q-item>

              <q-item
                class="q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/testimonials' }"
                exact
                clickable
                v-ripple
              >
                <q-item-section
                  style="display: inline-block"
                  @click="scrollTo('testimonials')"
                >
                  <q-icon name="fas fa-comment-dots" class="q-pr-sm" />
                  Testimonials
                </q-item-section>
              </q-item>

              <q-separator inset color="white" class="lt-sm q-my-lg" />

              <q-item
                class="lt-sm q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/support-me' }"
                exact
                clickable
                v-ripple
                @click="goTo('/support-me')"
              >
                <q-item-section style="display: inline-block">
                  <q-icon name="fas fa-circle-dollar-to-slot" class="q-pr-sm" />
                  Support Me
                </q-item-section>
              </q-item>

              <q-item
                class="lt-sm q-pl-xl"
                :class="{ 'active-q-item': currentRoute === '/contact' }"
                exact
                clickable
                v-ripple
                @click="goTo('/contact')"
              >
                <q-item-section style="display: inline-block">
                  <q-icon name="fas fa-square-envelope" class="q-pr-sm" />
                  Contact Me
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn> -->
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "NavBar",

  setup() {
    return {
      dropDownMenu: ref(false),
    };
  },

  computed: {
    currentRoute() {
      return useRoute().path;
    },

    activeSection() {
      const route = useRoute();
      if (route.path === "/") {
        return route.hash || "#home";
      }
      return "#home";
    },
  },

  methods: {
    goHome() {
      this.$router.push("/");
      // this.$router.push("/").then(() => {
      //   this.$router.go();
      // });
    },

    goTo(route) {
      this.$router.push(route);
    },

    scrollTo(ref) {
      this.$router.push({ name: "home", hash: `#${ref}` });
    },
  },
});
</script>

<style lang="scss" scoped>
#navbar {
  font-family: "Avenir";
  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(40px);
  border-bottom: 1.5px solid #f0effb;
}
.toolbar {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}
.logo-btn {
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  // color: #007bff;
  margin-right: 12px;
  text-decoration: none;
}
.logo-btn:hover {
  // color: #2356ad;
}
.logo-btn {
  font-weight: 700;
}

.nav-btn {
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  color: #0f222d;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s ease-in-out;

  // Underline effect setup
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #0f222d;
    transition: all 0.25s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover {
    color: #0f222d;

    &::after {
      width: 100%;
    }
  }
}

// Active state (Solid underline + deeper color)
.active-link {
  color: #0f222d !important;

  &::after {
    width: 100% !important;
  }
}

/* Mobile Menu Toggle Trigger Button */
.menu-btn {
  color: #ffffff;
  background-color: #0f222d;
  box-shadow: 0 4px 12px rgba(15, 34, 45, 0.15);
  transition: all 0.2s ease;

  &:hover,
  &:active {
    background-color: #1e3a4b;
  }
}

/* Dropdown Menu Container */
.mobile-dropdown-menu {
  background-color: #0f222d;
  color: #ffffff;
  min-width: 280px;
  max-width: 320px;
  box-shadow: 0 12px 32px rgba(15, 34, 45, 0.25);
}

.menu-item {
  padding: 0 24px;
  color: #e2e8f0;
  border-left: 4px solid transparent;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }
}

.mobile-dropdown-menu .q-item.q-router-link--active,
.mobile-dropdown-menu .q-item--active,
.mobile-dropdown-menu .active-q-item {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.12) !important;
  border-left-color: #ffffff !important;
}

.min-icon-width {
  min-width: 32px;
  padding-right: 12px;
}

.menu-separator {
  background-color: rgba(255, 255, 255, 0.15);
}

// .menu-btn {
//   // color: #534b84;
//   color: #f9f9f9;
//   background-color: #007bff;
//   box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.08);
//   border-radius: 42.5px;
// }

// .dropdown-menu .q-item.q-router-link--active,
// .dropdown-menu .q-item--active,
// .dropdown-menu .active-q-item {
//   color: #ffffff !important;
//   background-color: #2356ad !important;
// }

@media only screen and (max-width: 575px) {
  .logo-btn {
    font-size: 16px;
    font-weight: 600;
    margin-right: 0;
  }
  .toolbar {
    padding-left: 16px;
  }
}
</style>
