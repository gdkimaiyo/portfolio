<template>
  <div id="services" class="services-section q-mt-xl q-py-lg">
    <div class="section q-pt-xl q-px-md">
      <div class="text-h4 text-weight-bold">Services</div>
    </div>
    <div class="section q-pt-lg q-pb-md q-px-md">
      <div class="text-h5 text-weight-bold">
        <em>I provide everything you need to create your perfect website</em>
      </div>
    </div>
    <div class="section q-px-md">
      <div class="content">
        <div
          class="service-card"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="q-mb-md">
            <q-icon :name="service.icon" class="card-icon" size="64px" />
          </div>
          <div class="text-h6 q-mb-md text-weight-bold">
            {{ service.title }}
          </div>
          <div class="service-desc">{{ service.desc }}</div>
        </div>
      </div>
    </div>

    <div class="section services-footer q-px-md">
      <div class="text-h5 text-weight-bold">
        <q-btn
          unelevated
          rounded
          color="positive"
          label="Let's work together"
          to="/contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { SERVICES } from "../utils/constants";

export default defineComponent({
  name: "ServicesSection",

  setup() {
    return {
      services: ref(SERVICES),
    };
  },
});
</script>

<style lang="scss" scoped>
#services {
  font-family: "Avenir";
}
.services-section {
  width: 100%;
  max-width: 100%;
  background-color: rgba(35, 37, 46);
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
.service-card {
  width: 50%;
  max-width: 50%;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 16px;
}

.card-icon {
  background-color: rgba(26, 28, 34);
  border-radius: 12px;
  padding: 12px;
}
.services-footer {
  padding-top: 32px;
  padding-bottom: 48px;
}

@media only screen and (max-width: 575px) {
  .service-card {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  .service-desc {
    margin-bottom: 48px;
  }
  .services-footer {
    padding-top: 0;
  }
}
</style>
