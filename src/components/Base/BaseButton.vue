<template>
  <a
    :href="href_link"
    :target="target_option"
    :class="className"
    @click="btnMethod"
  >
    {{ btn_text }}
    <i :class="fa_class"></i>
  </a>
</template>

<script>
export default {
  name: "BaseButton",

  components: {},

  props: {
    href_link: String,
    target_option: {
      type: String,
      default: "_self"
    },
    className: String,
    fa_class: String,
    btn_text: String
  },

  methods: {
    btnMethod() {
      this.$emit("btnMethod");
    }
  }
};
</script>
