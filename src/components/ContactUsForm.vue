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
      v-model="message"
      label="Your Message *"
      placeholder="Enter your message"
      hint="Minimum of 65 characters"
      counter
      autogrow
      lazy-rules
      :rules="[(val) => validateMessage(val)]"
    />
    <div class="q-mt-lg">
      <q-btn no-caps type="submit" color="primary"> Submit </q-btn>
      <span style="padding-left: 8px" class="text-primary" v-if="isLoading">
        Submitting
        <q-spinner-dots color="primary" size="1.5rem" />
      </span>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Notify } from "quasar";
import { validateEmail, validateFullName } from "../utils/helpers";
import { saveMessage } from "../shared/services/contact.service";

export default defineComponent({
  name: "ContactUsForm",

  setup() {
    return {
      fullname: ref(null),
      email: ref(null),
      message: ref(null),
      isLoading: ref(false),
    };
  },

  methods: {
    async onSubmit() {
      this.isLoading = true;

      const payload = {
        fullname: this.fullname,
        email: this.email,
        message: this.message,
      };

      await saveMessage(payload)
        .then(async (res) => {
          console.log(res);
          Notify.create({
            type: "positive",
            message: "Success. Message send successfully.",
            group: false,
          });
          // this.clearForm();
          this.isLoading = false;
        })
        .catch((error) => {
          Notify.create({
            type: "negative",
            message: "Error! Something went wrong while sending message.",
            group: false,
          });
          this.isLoading = false;
        });
    },

    validateEmail,
    validateFullName,

    validateMessage(message) {
      if (message && message.length > 64) {
        return true;
      } else {
        return "Your message should have a minimum of 65 characters";
      }
    },

    clearForm() {
      this.fullname = null;
      this.email = null;
      this.message = null;
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
