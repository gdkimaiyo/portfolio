<template>
  <section id="abtme" class="card mb-5 shadow" style="">
    <h4 class="card-header font-weight-bold">About Me</h4>
    <div class="card-body">
      <p class="card-text" v-for="(value, index) in aboutme_data" :key="index">
        <span v-html="value.paragraph"></span>
      </p>

      <blockquote class="blockquote text-center">
        <footer class="blockquote-footer">
          <b>{{ basic_data.personal_details.name }}</b
          >,
          <cite title="Source Title">
            {{ basic_data.personal_details.title }}
          </cite>
        </footer>
      </blockquote>
    </div>
  </section>
</template>

<script>
import jsonData from "../../mixins/jsonData.js";

export default {
  name: "BaseAboutMe",
  mixins: [jsonData],

  components: {},

  props: {}
};
</script>

<style>
.card,
.card-header {
  border: none;
}
</style>
