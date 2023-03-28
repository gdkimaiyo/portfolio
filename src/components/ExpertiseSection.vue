<template>
  <div id="expertise" class="expertise-section q-my-lg">
    <div class="text-h4 text-weight-bold">Expertise</div>
    <div class="section">
      <div class="content">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
          <img
            :src="getImgUrl('../assets/se_icons/', skill.icon)"
            :alt="skill.language + ' image'"
            class="card-icon"
          />
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
  font-family: "Avenir";
}
.section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  color: #ffffff;
}
.content {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
}
.skill-card {
  width: 16.66%;
  max-width: 16.66%;
  padding-top: 12px;
  padding-bottom: 12px;
}

.card-icon {
  padding: 12px;
  height: auto;
  width: 100%;
}

@media only screen and (max-width: 575px) {
  .skill-card {
    width: 33.33%;
    max-width: 33.33%;
    padding: 0;
  }
}
</style>
