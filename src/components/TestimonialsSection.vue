<template>
  <div id="testimonials" class="testimonials-section q-mt-lg q-mb-xl">
    <div class="text-h4 text-weight-bold">Testimonials</div>
    <div
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
    };
  },
});
</script>

<style lang="scss" scoped>
#testimonials {
  font-family: "Avenir";
}
.testimony {
  border-left: 5px solid #007bff;
  padding-left: 12px;
  font-style: italic;
}

@media only screen and (max-width: 575px) {
  //
}
</style>
