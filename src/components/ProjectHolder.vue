<template>
  <div class="projects-container">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-card q-mb-xl"
      :class="{
        'is-reverse': !project.leftSided,
        'has-no-image': !project.showImage,
      }"
    >
      <!-- IMAGE SECTION -->
      <div
        v-if="project.showImage && project.imgs?.length"
        class="project-image-wrapper"
      >
        <img
          :src="getImgUrl('assets/', project.imgs[0])"
          alt="Project preview image"
          class="project-img"
        />
      </div>

      <!-- CONTENT SECTION -->
      <div class="project-content q-pa-lg">
        <h3 class="project-title text-h5 text-weight-bold q-ma-none q-mb-sm">
          {{ project.header }}
        </h3>

        <p class="project-desc-text text-body2 q-mb-md">
          {{ project.desc }}
        </p>

        <p v-if="project.desc2" class="project-desc-text text-body2 q-mb-md">
          {{ project.desc2 }}
        </p>

        <!-- TECH STACK CHIPS -->
        <div class="tech-stack row items-center q-gutter-xs q-mb-lg">
          <q-chip
            v-for="(tech, indx) in project.technologies"
            :key="indx"
            dense
            clickable
            class="tech-chip"
          >
            {{ tech }}
          </q-chip>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="project-actions row items-center q-gutter-sm">
          <!-- Live Preview -->
          <q-btn
            v-if="project.projectLink"
            flat
            round
            no-caps
            color="black"
            size="sm"
            icon="fas fa-arrow-up-right-from-square"
            :href="project.projectLink"
            target="_blank"
            class="action-btn-primary"
          />

          <!-- Public Source Code -->
          <q-btn
            v-if="project.codeLink && !project.private"
            flat
            round
            no-caps
            size="sm"
            icon="fab fa-square-github"
            :href="project.codeLink"
            target="_blank"
            class="action-btn-primary"
          />

          <!-- Private Code Badge -->
          <q-btn
            v-if="project.private"
            flat
            round
            no-caps
            size="sm"
            icon="fab fa-square-github"
            class="action-btn-private"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getImgUrl } from "../utils/helpers";

export default defineComponent({
  name: "ProjectHolder",

  props: {
    projects: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getImgUrl,
  },
});
</script>

<style lang="scss" scoped>
.projects-container {
  max-width: 1024px;
  margin: 0 auto;
}

.project-card {
  display: flex;
  flex-direction: row;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  background-color: #ffffff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  min-height: 360px;

  &:hover {
    border-color: #0f222d;
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(15, 34, 45, 0.08);
  }

  &.is-reverse {
    flex-direction: row-reverse;
  }

  &.has-no-image {
    .project-content {
      width: 100%;
      max-width: 100%;
    }
  }
}

/* Image Wrapper */
.project-image-wrapper {
  width: 50%;
  max-width: 50%;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  background-color: #f8fafc;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;

  .project-card:hover & {
    transform: scale(1.03);
  }
}

/* Content Panel */
.project-content {
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-title {
  color: #0f222d;
}

.project-desc-text {
  color: #4a5568;
  line-height: 1.6;
}

.tech-chip {
  background-color: #f0f4f8;
  color: #0f222d;
  font-weight: 500;
  font-size: 12px;
  border-radius: 6px;
  padding: 4px 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0f222d;
    color: #ffffff;
  }
}

// .action-btn-primary {
//   color: #ffffff !important;
//   // font-weight: 600;
//   // padding: 6px 20px;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: #1e3a4b !important;
//   }
// }

// .action-btn-secondary {
//   color: #0f222d !important;
//   border-color: #0f222d !important;
//   font-weight: 600;
//   padding: 6px 16px;
//   transition: all 0.2s ease;

//   &:hover {
//     background-color: rgba(15, 34, 45, 0.06) !important;
//   }
// }

.action-btn-private {
  color: #6c757d !important;
  font-weight: 500;
}

/* Responsive Stacking */
@media only screen and (max-width: 768px) {
  .project-card,
  .project-card.is-reverse {
    flex-direction: column;
    min-height: auto;
  }

  .project-image-wrapper,
  .project-content {
    width: 100%;
    max-width: 100%;
  }

  .project-image-wrapper {
    height: 220px;
  }
}
</style>
