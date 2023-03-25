<template>
  <div
    class="project-holder q-mb-xl"
    v-for="(project, index) in projects"
    :key="index"
    :style="{
      backgroundColor: project.customStyle.background,
      border: project.customStyle.border,
    }"
    :class="{ 'project-holder-mutated': !project.showImage }"
  >
    <div class="project-image" v-if="project.leftSided && project.showImage">
      <img
        :src="getImgUrl(project.img)"
        alt="project preview image"
        class="left-sided-img"
      />
    </div>
    <div
      class="project-desc q-pa-md"
      :class="{ 'no-image': !project.showImage }"
      v-if="project.leftSided"
    >
      <div
        class="text-h6 text-weight-bold q-mb-md"
        :style="{
          color: project.customStyle.btnColor,
        }"
      >
        {{ project.header }}
      </div>
      <div>{{ project.desc }}</div>
      <div class="q-mt-lg" v-if="project?.desc2">{{ project.desc2 }}</div>
      <div class="q-mt-lg">
        <q-btn
          unelevated
          rounded
          no-caps
          label="Preview"
          :href="project.projectLink"
          target="_blank"
          class="q-mr-lg"
          v-if="project?.projectLink"
          :style="{
            backgroundColor: project.customStyle.btnColor,
            color: '#ffffff',
          }"
        />
        <q-btn
          flat
          rounded
          no-caps
          :href="project.codeLink"
          target="_blank"
          v-if="project?.codeLink"
          :style="{
            color: project.customStyle.btnColor,
          }"
        >
          <q-icon
            name="fas fa-arrow-up-right-from-square"
            size="18px"
            class="q-pr-sm"
          />
          Source Code
        </q-btn>
      </div>
    </div>

    <div
      class="project-image lt-sm"
      v-if="!project.leftSided && project.showImage"
    >
      <img
        :src="getImgUrl(project.img)"
        alt="project preview image"
        class="right-sided-img"
      />
    </div>
    <div
      class="project-desc q-pa-md"
      :class="{ 'no-image': !project.showImage }"
      v-if="!project.leftSided"
    >
      <div
        class="text-h6 text-weight-bold q-mb-md"
        :style="{
          color: project.customStyle.btnColor,
        }"
      >
        {{ project.header }}
      </div>
      <div>{{ project.desc }}</div>
      <div class="q-mt-lg" v-if="project?.desc2">{{ project.desc2 }}</div>
      <div class="q-mt-lg">
        <q-btn
          unelevated
          rounded
          no-caps
          label="Preview"
          :href="project.projectLink"
          target="_blank"
          class="q-mr-lg"
          v-if="project?.projectLink"
          :style="{
            backgroundColor: project.customStyle.btnColor,
            color: '#ffffff',
          }"
        />
        <q-btn
          flat
          rounded
          no-caps
          :href="project.codeLink"
          target="_blank"
          v-if="project?.codeLink"
          :style="{
            color: project.customStyle.btnColor,
          }"
        >
          <q-icon
            name="fas fa-arrow-up-right-from-square"
            size="18px"
            class="q-pr-sm"
          />
          Source Code
        </q-btn>
      </div>
    </div>
    <div
      class="project-image gt-xs"
      v-if="!project.leftSided && project.showImage"
    >
      <img
        :src="getImgUrl(project.img)"
        alt="project preview image"
        class="right-sided-img"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getImgUrl } from "../utils/helpers";

export default defineComponent({
  name: "ProjectHolder",

  props: {
    projects: Array,
  },

  methods: {
    getImgUrl,
  },
});
</script>

<style lang="scss" scoped>
.project-holder {
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 370px;
}
.project-holder-mutated {
  height: fit-content;
}

.project-image {
  width: 50%;
  max-width: 50%;
  align-content: center;
  text-align: center;
  flex-grow: 1;

  img {
    width: 100%;
    height: 370px;
    margin-top: 6px;
  }
}
.left-sided-img {
  border-radius: 12px 0 0 12px;
}
.right-sided-img {
  border-radius: 0 12px 12px 0;
}
.project-desc {
  width: 50%;
  max-width: 50%;
  align-content: center;
  flex-grow: 1;
}
.no-image {
  width: 100%;
  max-width: 100%;
}

@media only screen and (max-width: 575px) {
  .project-holder {
    flex-direction: column;
    text-align: center;
    height: fit-content;
  }
  .project-image {
    width: 100%;
    max-width: 100%;

    img {
      margin-top: 0;
    }
  }
  .left-sided-img,
  .right-sided-img {
    border-radius: 12px 12px 0 0;
  }
  .project-desc {
    width: 100%;
    max-width: 100%;
    text-align: left;
  }
}
</style>
