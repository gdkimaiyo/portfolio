<template>
  <div id="testimonials" class="q-py-xl">
    <div class="testimonials-section">
      <!-- Section Title -->
      <!-- <div class="text-center q-mb-xl">
        <h2 class="text-h4 text-weight-bold section-title">Testimonials</h2>
        <div class="title-underline"></div>
      </div> -->

      <!-- Carousel -->
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="primary"
        :navigation="testimonials.length > 1"
        :infinite="testimonials.length > 1"
        :autoplay="testimonials.length > 1"
        padding
        class="testimonials-carousel"
      >
        <q-carousel-slide
          v-for="(testimony, index) in testimonials"
          :key="index"
          :name="getSlideName(testimony)"
          class="carousel-content"
        >
          <!-- Avatar & Meta -->
          <div class="carousel-avatar q-pa-md">
            <q-avatar
              color="primary"
              text-color="white"
              size="72px"
              class="shadow-2"
            >
              {{ testimony.initials }}
            </q-avatar>
            <div class="avatar-icons q-mt-sm text-h6 text-weight-bold">
              {{ testimony.name }}
            </div>
            <div class="text-caption text-grey-8">
              <em>{{ testimony.profession }}</em>
            </div>
          </div>

          <!-- Testimony Body -->
          <div class="carousel-body q-pa-md">
            <q-icon
              name="fas fa-quote-left"
              class="quote-icon q-mb-sm"
              size="24px"
            />
            <p class="testimony-text text-body1 q-mb-md">
              {{ testimony.testimony }}
            </p>
            <p
              v-if="testimony.testimony2"
              class="testimony-text text-body1 q-mb-none"
            >
              {{ testimony.testimony2 }}
            </p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { TESTIMONIALS } from "../utils/constants";

export default defineComponent({
  name: "TestimonialsSection",

  setup() {
    const testimonials = ref(TESTIMONIALS);

    // Helper to generate consistent slide names
    const getSlideName = (testimony) => {
      if (!testimony) return "";
      const nameParts = testimony.name.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts[nameParts.length - 1] || "";
      return `${firstName}${lastName}${testimony.initials}`;
    };

    // Initialize slide to the FIRST item's generated name
    const initialSlide =
      testimonials.value.length > 0 ? getSlideName(testimonials.value[0]) : "";

    const slide = ref(initialSlide);

    return {
      testimonials,
      slide,
      getSlideName,
    };
  },
});
</script>

<style lang="scss" scoped>
#testimonials {
  background-color: #ffffff;
  font-family: "Avenir", sans-serif;
}

// .testimonials-section {
//   width: 100%;
//   max-width: 1024px;
//   margin: 0 auto;
//   // padding: 0 16px;
// }

/* Header */
.section-title {
  color: #0f222d;
  margin: 0;
}

.title-underline {
  width: 50px;
  height: 3px;
  background-color: #0f222d;
  margin: 8px auto 0 auto;
  border-radius: 2px;
}

/* Carousel Outer Shell */
.testimonials-carousel {
  background-color: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  height: auto;
  min-height: 280px;
  box-shadow: 0 8px 24px rgba(15, 34, 45, 0.04);
}

/* Slide Internal Layout */
.carousel-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.carousel-avatar {
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-body {
  width: 70%;
  // font-size: 14px;
}

.avatar-icons {
  color: #0f222d;
}

.quote-icon {
  color: #0f222d;
  opacity: 0.8;
}

.testimony-text {
  color: #4a5568;
  line-height: 1.6;
}

/* Mobile Stacking */
@media only screen and (max-width: 600px) {
  .testimonials-section {
    padding: 0 4px;
  }
  .carousel-content {
    flex-direction: column;
    padding: 24px 6px;
  }

  .quote-icon {
    display: none;
  }

  .carousel-avatar,
  .carousel-body {
    width: 100%;
  }

  .carousel-body {
    padding-top: 0;
  }
}
</style>
