<template>
  <q-form class="form column" @submit.prevent="onSubmit">
    <q-input
      class="q-py-md"
      filled
      bg-color="white"
      v-model="fullname"
      label="Full Name *"
      placeholder="Jane Doe"
      dense
      type="text"
      lazy-rules
      :rules="[
        (val) =>
          validateFullName(val) || 'Please provide firstname and lastname',
      ]"
    />
    <q-input
      class="q-py-md"
      filled
      bg-color="white"
      v-model="email"
      label="Email Address *"
      placeholder="abc@example.com"
      dense
      type="email"
      lazy-rules
      :rules="[
        (val) => validateEmail(val) || 'Please provide a valid email address',
      ]"
    />
    <q-input
      class="q-py-md"
      filled
      bg-color="white"
      v-model="desc"
      label="Your Message *"
      placeholder="Enter your message"
      hint="Minimum of 65 characters"
      counter
      autogrow
      lazy-rules
      :rules="[(val) => validateDesc(val)]"
    />
    <div class="q-mt-lg">
      <q-btn no-caps type="submit" color="primary"> Submit </q-btn>
      <span style="padding-left: 8px" v-if="isLoading">
        <q-spinner color="primary" />
        Submitting...
      </span>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Notify } from "quasar";
import { validateEmail, validateFullName } from "../utils/helpers";

export default defineComponent({
  name: "ContactUsForm",

  setup() {
    return {
      fullname: ref(null),
      email: ref(null),
      desc: ref(null),
      isLoading: ref(false),
    };
  },

  methods: {
    async onSubmit() {
      this.isLoading = true;

      const payload = {
        fullname: this.fullname,
        email: this.email,
        desc: this.desc,
      };

      console.log(payload);
      this.isLoading = false;
      Notify.create({
        type: "info",
        message: "Feature for posting your message will be completed soon...",
        group: false,
      });
    },

    validateEmail,
    validateFullName,

    validateDesc(desc) {
      if (desc && desc.length > 64) {
        return true;
      } else {
        return "Your message should have a minimum of 65 characters";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.form {
  border-radius: 12px;
  padding: 48px;
  background-color: rgba(244, 244, 246);
}
@media only screen and (max-width: 575px) {
  .form {
    padding: 32px 16px;
    padding-bottom: 64px;
    border-radius: 0;
  }
}
</style>
