<template>
  <div id="testimonials" class="q-py-xl">
    <div class="testimonials-section">
      <!-- <div class="aim text-h4 text-weight-bold q-my-xl q-pt-lg q-pb-md">
        Testimonials
      </div> -->

      <div>
        <div>
          <q-carousel
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="black"
            navigation
            infinite
            autoplay
            padding
            class="testimonials-carousel carousel-section"
          >
            <q-carousel-slide
              v-for="(testimony, index) of testimonials"
              :key="index"
              :name="getCarouselName(testimony.name, testimony.initials)"
              class="carousel-content"
            >
              <!-- column no-wrap flex-start -->
              <div class="carousel-avatar">
                <q-avatar color="dark" text-color="white" size="72px">
                  {{ testimony.initials }}
                </q-avatar>
                <div class="avatar-icons q-mt-sm text-h6 text-weight-bold">
                  {{ testimony.name }}
                </div>
                <div>
                  <em>{{ testimony.profession }}</em>
                </div>

                <!-- <q-list>
                  <q-item class="q-mt-md q-mb-sm q-pl-none row no-wrap">
                    <q-item-section avatar>
                      <q-avatar color="dark" text-color="white" size="42px">
                        {{ testimony.initials }}
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-h6 text-weight-bold">
                        {{ testimony.name }}
                      </q-item-label>
                      <q-item-label caption>
                        {{ testimony.profession }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list> -->
              </div>
              <div class="carousel-body q-mb-lg">
                <div class="gt-xs q-mt-md text-left">
                  <q-icon
                    name="fas fa-quote-left"
                    class="avatar-icons"
                    size="28px"
                  />
                </div>
                <div class="q-mt-md text-left">
                  {{ testimony.testimony }}
                </div>
                <div class="q-mt-md text-left">
                  {{ testimony?.testimony2 }}
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <!-- <div
        class="q-my-lg"
        v-for="(testimony, index) in testimonials"
        :class="{ 'q-my-xl': index > 0 }"
        :key="index"
      >
        <div class="testimony">
          <div class="">
            <q-icon name="fas fa-quote-left" color="primary" size="24px" />
            <span style="padding-left: 6px">{{ testimony.testimony }}</span>
          </div>
          <div class="q-mt-md" v-if="testimony?.testimony2">
            {{ testimony.testimony2 }}
          </div>
        </div>
        <div class="witness q-mt-md">
          <q-list>
            <q-item class="q-mt-md q-mb-sm q-pl-none">
              <q-item-section avatar>
                <q-avatar color="dark" text-color="white" size="42px">
                  {{ testimony.initials }}
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-weight-bold">
                  {{ testimony.name }}
                </q-item-label>
                <q-item-label caption>
                  {{ testimony.profession }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { TESTIMONIALS } from "../utils/constants";

export default defineComponent({
  name: "TestimonialsSection",

  setup() {
    return {
      testimonials: ref(TESTIMONIALS),
      slide: ref("style"),
    };
  },

  methods: {
    getCarouselName(name, initials) {
      const nameParts = name.split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts[nameParts.length - 1];

      return `${firstName}${lastName}${initials}`;
    },
  },
});
</script>

<style lang="scss" scoped>
#testimonials {
  font-family: "Avenir";
  // background-color: rgba(243, 244, 246);
}
.testimonials-section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
.testimonials-carousel {
  height: auto;
  // background-color: rgba(243, 244, 246);
}

.carousel-section {
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
}
.carousel-content {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
}
.carousel-avatar {
  width: 30%;
  max-width: 30%;
  // display: flex;
  // flex-wrap: wrap;
  // flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.carousel-body {
  width: 70%;
  max-width: 70%;
}

.avatar-icons {
  color: #0f222d;
}

.testimony {
  border-left: 5px solid #007bff;
  padding-left: 12px;
  font-style: italic;
}

.aim {
  color: #000000;
  margin-bottom: 24px;
}

.aim:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0 auto 0 3px; /* This will center the border. */
  width: 70px; /* Change this to whatever width you want. */
  padding-top: 10px; /* This creates some space between the element and the border. */
  border-bottom: 4px solid #000000; /* This creates the border. Replace black with whatever color you want. */
  font-weight: 700;
  max-width: 60px;
}

@media only screen and (max-width: 575px) {
  .carousel-avatar,
  .carousel-body {
    width: 100%;
    max-width: 100%;
  }
}
</style>
