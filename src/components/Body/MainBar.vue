<template>
  <main>
    <!-- About Section -->
    <BaseAboutMe />

    <!-- Skill set / Expertise Section -->
    <section id="services" class="shadow mb-5">
      <h4 class="card-header font-weight-bold">Expertise</h4>
      <div class="card">
        <div class="card-body border-bottom">
          <p>
            <span
              class="p-1"
              v-for="(skill, index) in expertise_data.skills"
              :key="index"
            >
              <BaseBadge :show_heading="true" :skill="skill" />,
            </span>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BaseAboutMe from "../Base/BaseAboutMe.vue";
import BaseBadge from "../Base/BaseBadge.vue";

import jsonData from "../../mixins/jsonData.js";

export default {
  name: "MainBar",
  mixins: [jsonData],

  components: {
    BaseAboutMe,
    BaseBadge
  }
};
</script>

<style>
.card,
.card-header {
  border: none;
}

.badge {
  font-size: 14px;
}
</style>
