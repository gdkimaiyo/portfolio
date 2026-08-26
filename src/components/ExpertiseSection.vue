<template>
  <div id="expertise" class="skills-section q-pb-lg">
    <div class="container">
      <div class="row q-col-gutter-lg items-stretch">
        <div
          v-for="(category, index) in skills"
          :key="index"
          class="col-12 col-md-4 flex"
        >
          <q-card flat bordered class="skill-card full-width">
            <q-card-section class="q-pb-sm">
              <div class="text-h6 text-weight-bold category-title">
                {{ category.category }}
              </div>
            </q-card-section>

            <q-separator class="card-separator" />

            <!-- Horizontal Chip Container -->
            <q-card-section class="q-pt-md">
              <div class="row items-center q-gutter-sm">
                <q-chip
                  v-for="(skill, indx) in category.skills"
                  :key="indx"
                  clickable
                  class="skill-chip"
                >
                  {{ skill.language || skill }}
                </q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { SKILLS } from "../utils/constants";
import { getImgUrl } from "../utils/helpers";

export default defineComponent({
  name: "ExpertiseSection",

  setup() {
    return {
      skills: ref(SKILLS),
    };
  },

  methods: {
    getImgUrl,
  },
});
</script>

<style lang="scss" scoped>
#expertise {
  font-family: "Avenir", sans-serif;
}

// .container {
//   max-width: 1024px;
//   margin: 0 auto;
//   // padding: 0 16px;
// }

.section-title {
  color: #0f222d;
  margin: 0;
}

.title-underline {
  width: 50px;
  height: 3px;
  background-color: #007bff;
  margin: 8px auto 0 auto;
  border-radius: 2px;
}

/* Card Styling & Hover Animations */
.skill-card {
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: #0f222d;
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(15, 34, 45, 0.08) !important;
  }
}

.category-title {
  color: #0f222d;
}

.card-separator {
  background-color: #f0effb;
}

/* Horizontal Skill Chips Styling */
.skill-chip {
  background-color: #f0f4f8;
  color: #0f222d;
  font-size: 13px;
  font-weight: 500;
  border-radius: 24px;
  margin: 4px;
  padding: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0f222d;
    color: #ffffff;
  }
}

@media only screen and (max-width: 600px) {
  .container {
    padding: 0 4px;
  }
}
</style>
