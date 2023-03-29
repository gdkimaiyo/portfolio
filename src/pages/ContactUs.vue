<template>
  <div id="contact-us">
    <div class="contact-us q-py-xl">
      <div
        class="page-header text-h3 text-weight-bold text-center q-mt-lg q-px-md"
      >
        Let's Work Together
      </div>
      <div class="text-center q-my-lg q-px-md">
        Do you have have a web application or a simple website that you need to
        be build for you? Or, you simple want a chat about my services? Drop me
        a message below and I will reach out promptly.
      </div>

      <ContactUsForm />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContactUsForm from "../components/ContactUsForm.vue";

export default defineComponent({
  name: "ContactUs",

  components: { ContactUsForm },
});
</script>

<style lang="scss" scoped>
#contact-us {
  font-family: "Avenir";
  padding-bottom: 64px;
}
.contact-us {
  width: 100%;
  max-width: 635px;
  margin: 0 auto;
}
.page-header {
  font-size: 3rem;
}

@media only screen and (max-width: 575px) {
  #contact-us {
    padding-bottom: 0;
  }
  .page-header {
    font-size: 1.5rem;
  }
  .contact-us {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
</style>
