<template>
  <div id="about-me" class="about-section">
    <div class="section q-mt-md">
      <div class="image-div lt-sm q-mb-lg">
        <q-list>
          <q-item class="q-pl-none">
            <q-item-section avatar>
              <q-avatar size="100px">
                <img
                  :src="
                    getImgUrl(
                      'assets/profile_pics/',
                      pics[randomNumber(0, pics.length - 1)]
                    )
                  "
                  alt="user image"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section class="q-ml-none">
              <q-item-label class="text-h6 text-weight-bold">
                Gideon Kimaiyo
              </q-item-label>
              <q-item-label caption> gdkimaiyo@gmail.com </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="content-div">
        <div class="about-header text-h4 text-weight-bold">About Gideon</div>
        <div class="q-mt-md">
          <p>
            I am a <b>Software and DevOps Engineer</b> from Kenya with over
            {{ years }} years of experience. I specialize in building, deploying
            and maintaining resilient, secure and scalable web
            applications—handling everything from full-stack development (with
            Django or NodeJs and React, Vue3 or Angular) to automated cloud
            infrastructure, CI/CD pipelines and database optimization.
          </p>
          <p>
            When I'm not writing code or configuring infrastructure, I'm usually
            reading, hanging out with friends or diving into new technologies to
            keep my engineering toolkit sharp and up to date.
          </p>
          <p>
            Let's connect! You can find me on
            <a
              href="https://www.linkedin.com/in/gideon-kimaiyo/"
              target="_blank"
              rel="noopener noreferrer"
              class="href-link text-primary"
            >
              LinkedIn
            </a>
            or check out my active repositories on
            <a
              href="https://github.com/gdkimaiyo"
              target="_blank"
              rel="noopener noreferrer"
              class="href-link text-primary"
            >
              GitHub
            </a>
            where I share my latest open-source experiments and projects.
          </p>
          <p>
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
              <span class="gt-xs">Languages</span>
              <q-icon
                name="fas fa-language"
                size="18px"
                style="padding-right: 2px"
                class="lt-sm"
              />
            </span>
            <span style="font-style: italic">English</span>
            <span class="q-px-sm">
              <q-icon name="fas fa-circle" size="3px" />
            </span>
            <span style="font-style: italic">Swahili</span>
          </p>
        </div>
      </div>
      <div class="image-div gt-xs">
        <q-avatar size="300px">
          <img
            :src="
              getImgUrl(
                'assets/profile_pics/',
                pics[randomNumber(0, pics.length - 1)]
              )
            "
            alt="user image"
          />
        </q-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { getImgUrl, randomNumber } from "../utils/helpers";

export default defineComponent({
  name: "AboutSection",

  setup() {
    return {
      years: ref(new Date().getFullYear() - 2021),
      pics: ref(["dp_primary.jpg", "dp_secondary.jpg"]),
    };
  },

  methods: {
    isHandset() {
      return screen.width <= 575 ? true : false;
    },

    getImgUrl,
    randomNumber,
  },
});
</script>

<style lang="scss" scoped>
#about-me {
  font-family: "Avenir";
  font-size: 16px;
}
.about-section {
  margin-top: 64px;
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
.content-div {
  width: 60%;
  max-width: 60%;
  margin-right: 24px;
  align-content: center;
  flex-grow: 1;
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
  .about-section {
    margin-top: 24px;
    margin-bottom: 32px;
  }
  .section {
    flex-direction: column;
    text-align: center;
    padding: 16px;
  }
  .image-div {
    width: 100%;
    max-width: 100%;
  }
  .content-div {
    width: 100%;
    max-width: 100%;
    text-align: left;
  }
  .about-header {
    margin-top: 24px;
  }
}
</style>
