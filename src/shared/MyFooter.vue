<template>
  <footer id="footer" class="footer">
    <div
      class="call-to-action q-pt-lg q-pb-xl"
      v-if="currentRoute !== '/contact'"
    >
      <div class="text-h4 text-weight-bold q-mt-lg">Get in Touch</div>
      <div class="q-mt-md">
        Get in touch and find out more on my services or drop me a message we
        work together.
      </div>
      <div class="q-mt-md">
        <q-btn
          unelevated
          rounded
          no-caps
          color="white"
          text-color="primary"
          label="Let's Talk"
          to="/contact"
        />
      </div>
    </div>
    <div class="section" :class="{ 'q-pt-lg': currentRoute === '/contact' }">
      <div class="content">
        <div class="aboutme">
          <q-list>
            <q-item class="q-pl-none">
              <q-item-section avatar>
                <q-avatar size="64px">
                  <img src="../assets/vital_dp_2.jpg" alt="user image" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-weight-bold">
                  Gideon Kimaiyo
                </q-item-label>
                <q-item-label caption class="text-white">
                  gdkimaiyo@gmail.com
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <div class="about q-my-md">
            I build beautiful responsive web applications with focus on making
            them simple and user-friendly.
            <span class="custom-link" @click="scrollTo('abtme')">
              Learn more
            </span>
          </div>
        </div>
        <div class="social-links">
          <a
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="href-link q-pr-md"
            v-for="(social, index) in socials"
            :key="index"
          >
            <q-icon :name="social.logo" color="white" size="24px" />
          </a>
        </div>
      </div>
      <div class="content">
        <!-- <div class="text-h5">Quick Links</div> -->
        <div class="nav-btn">
          <a class="q-pr-sm" clickable @click="goHome()">Home</a>
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable @click="scrollTo('abtme')"> About </a>
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable @click="scrollTo('projects')"
            >Projects</a
          >
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable @click="scrollTo('services')">
            Services
          </a>
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable @click="scrollTo('testimonials')">
            Testimonials
          </a>
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable>Blogs</a>
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable @click="goTo('/contact')">
            Contact Me
          </a>
        </div>
        <div class="nav-btn">
          <a class="q-pr-sm" clickable>Support Me</a>
        </div>
      </div>
    </div>

    <div class="copyright q-pt-lg q-pb-xl">
      <q-separator spaced color="white" />
      <div class="q-mt-md">
        &copy;
        {{ year }}
        <q-icon
          name="fas fa-circle"
          color="white"
          size="5px"
          style="padding: 0 6px"
        />
        <a
          href="https://www.linkedin.com/in/gideon-kimaiyo"
          target="_blank"
          rel="noopener noreferrer"
          class="href-link"
          style="color: #ffffff"
        >
          Gideon Kimaiyo
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { SOCIALS } from "../utils/constants";

export default defineComponent({
  name: "MyFooter",

  setup() {
    return {
      socials: ref(SOCIALS),
      year: ref(new Date().getFullYear()),
    };
  },

  computed: {
    currentRoute() {
      return useRoute().path;
    },
  },

  methods: {
    goHome() {
      this.$router.push("/").then(() => {
        this.$router.go();
      });
    },

    goTo(route) {
      this.$router.push(route);
    },

    scrollTo(ref) {
      if (document.getElementById(ref) === null) {
        this.goHome();
        return;
      }
      window.scrollTo(0, 0);
      const position = document.getElementById(ref).offsetTop;
      const offsetPosition = position + window.pageYOffset - 70;

      // smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.footer {
  bottom: 0;
  width: 100%;
  color: #ffffff;
  background-color: #448dd1;
}
.call-to-action {
  text-align: center;
}
.section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.content {
  width: 50%;
  max-width: 50%;
  padding: 24px 16px;
  margin-right: 24px;
  align-content: center;
  flex-grow: 1;
}
.href-link {
  text-decoration: none;
}
.custom-link {
  color: yellow;
  font-weight: bold;
  cursor: pointer;
}
.nav-btn {
  padding: 6px;
}
.nav-btn a {
  cursor: pointer;
}
.nav-btn a:hover {
  text-decoration: underline;
}
.copyright {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}

@media only screen and (max-width: 575px) {
  .call-to-action {
    text-align: left;
    padding: 16px;
  }
  .section {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding-bottom: 0;
  }
  .content {
    width: 100%;
    max-width: 100%;
  }
  .nav-btn {
    padding-left: 0;
    display: inline-block;
  }

  .copyright {
    padding: 16px;
    padding-bottom: 10%;
  }
}
</style>
