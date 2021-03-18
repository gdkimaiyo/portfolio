<template>
  <img
    :class="className"
    :alt="img_alt"
    :width="img_width"
    :height="img_height"
    :src="require('../../assets/' + img)"
  />
</template>

<script>
export default {
  name: "BaseImage",

  components: {},

  props: {
    className: String,
    img_alt: String,
    img: String,
    img_width: String,
    img_height: String
  }
};
</script>

<style>
.avatar {
  vertical-align: middle;
}
</style>
