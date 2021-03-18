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

    <!-- My Services Section -->
    <section class="shadow mb-5">
      <h4 class="card-header font-weight-bold">What I do</h4>
      <div class="card" v-for="(service, index) in services_data" :key="index">
        <BaseCardBody
          :card_title="service.service_title"
          :card_desc="service.service_desc"
          :show_card_footer="true"
        />
      </div>
    </section>
  </main>
</template>

<script>
import BaseAboutMe from "../Base/BaseAboutMe.vue";
import BaseCardBody from "../Base/BaseCardBody.vue";
import BaseBadge from "../Base/BaseBadge.vue";

import jsonData from "../../mixins/jsonData.js";

export default {
  name: "MainBar",
  mixins: [jsonData],

  components: {
    BaseAboutMe,
    BaseBadge,
    BaseCardBody
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
