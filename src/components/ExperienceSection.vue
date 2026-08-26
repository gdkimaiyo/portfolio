<template>
  <div id="experience" class="experience-section q-py-xl">
    <div class="container">
      <!-- Section Title -->
      <div class="text-left q-mb-md">
        <h2 class="text-h4 text-weight-bold section-title">Experience</h2>
        <div class="title-underline"></div>
      </div>

      <!-- Section Subtitle / Intro -->
      <div class="text-h6 text-left experience-intro q-mb-xl">
        {{ years }}+ years of experience building secure, scalable production
        grade AI, SaaS and cloud solutions.
      </div>

      <!-- Experience Cards List -->
      <div class="experience-list">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="q-mb-md"
        >
          <q-card flat class="experience-card">
            <!-- CARD HEADER (Clickable to toggle) -->
            <q-card-section
              class="card-header cursor-pointer q-pa-lg"
              @click="toggleExpand(index)"
            >
              <div class="row items-center justify-between no-wrap">
                <!-- Left Details -->
                <div class="header-info">
                  <div class="row items-baseline q-gutter-x-sm">
                    <h3 class="role-title text-h6 text-weight-bold q-ma-none">
                      {{ experience.role }}
                    </h3>
                    <span class="company-name text-weight-medium">
                      @ {{ experience.company }}
                    </span>
                  </div>

                  <!-- Date Range -->
                  <div
                    class="date-range text-caption text-weight-medium q-mt-xs q-mb-sm"
                  >
                    <span>{{ experience.start }}</span>
                    <span v-if="experience.active"> — Present</span>
                    <span v-else> — {{ experience.end }}</span>
                  </div>

                  <!-- Tech Stack Chips -->
                  <div class="tech-stack row items-center q-gutter-xs q-mt-sm">
                    <q-chip
                      v-for="(tech, ind) in experience.technologies"
                      :key="ind"
                      dense
                      class="tech-chip"
                    >
                      {{ tech }}
                    </q-chip>
                  </div>
                </div>

                <!-- Right Action Button (Far Right Toggle Icon) -->
                <div class="header-action q-ml-md">
                  <q-btn
                    round
                    flat
                    dense
                    class="toggle-btn"
                    :icon="
                      isExpanded(index)
                        ? 'keyboard_arrow_up'
                        : 'keyboard_arrow_down'
                    "
                    @click.stop="toggleExpand(index)"
                  />
                </div>
              </div>
            </q-card-section>

            <!-- CARD BODY (Per-card slide transition) -->
            <q-slide-transition>
              <div v-show="isExpanded(index)">
                <q-separator class="card-separator" />

                <q-card-section class="q-pa-lg exp-details">
                  <ul class="q-pl-md q-ma-none exp-bullet-list">
                    <li
                      v-for="(exp, indx) in experience.experience"
                      :key="indx"
                      class="exp-item text-body2 q-mb-sm"
                    >
                      {{ exp }}
                    </li>
                  </ul>
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { EXPERIENCE } from "../utils/constants.js";

export default defineComponent({
  name: "ExperienceSection",

  setup() {
    const startYear = 2019;
    const years = ref(new Date().getFullYear() - startYear);
    const experiences = ref(EXPERIENCE);

    // Track expansion state per card using an object dictionary
    const expandedState = ref({});

    const isExpanded = (index) => {
      return Boolean(expandedState.value[index]);
    };

    const toggleExpand = (index) => {
      expandedState.value[index] = !expandedState.value[index];
    };

    return {
      years,
      experiences,
      isExpanded,
      toggleExpand,
    };
  },
});
</script>

<style lang="scss" scoped>
.experience-section {
  background-color: #ffffff;
  font-family: "Avenir", sans-serif;
}

.container {
  max-width: 1072px;
  margin: 0 auto;
  // padding: 0 16px;
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

.experience-intro {
  color: #4a5568;
  font-style: italic;
}

/* Card Styling */
.experience-card {
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: #0f222d;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 34, 45, 0.06);
  }
}

.role-title {
  color: #0f222d;
}

.company-name {
  color: #1e3a4b;
}

.date-range {
  color: #718096;
}

.toggle-btn {
  color: #0f222d;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(15, 34, 45, 0.08);
  }
}

.card-separator {
  background-color: #f0f4f8;
}

/* Tech Stack Chips */
.tech-chip {
  background-color: #f0f4f8;
  color: #0f222d;
  font-size: 12px;
  font-weight: 500;
  border-radius: 24px;
  padding: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0f222d;
    color: #ffffff;
  }
}

/* Experience Bullets */
.exp-bullet-list {
  list-style-type: disc;
}

.exp-item {
  color: #4a5568;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }
}

/* Mobile Alignment */
@media only screen and (max-width: 599px) {
  .header-info {
    width: 85%;
  }
}
</style>
