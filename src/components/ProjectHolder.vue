<template>
  <div class="projects-list">
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
          :alt="`${project.header} preview`"
          class="project-img"
        />
      </div>

      <!-- CONTENT SECTION -->
      <div
        class="project-content q-py-md"
        :class="{
          'content-pad-left': project.leftSided && project.showImage,
          'content-pad-right': !project.leftSided && project.showImage,
        }"
      >
        <h3 class="project-title text-h5 text-weight-bold q-ma-none q-mb-md">
          {{ project.header }}
        </h3>

        <p
          v-if="project.company.startsWith('Personal')"
          class="company-name text-weight-bold q-mb-md"
        >
          {{ project.company }}
        </p>
        <p v-else class="company-name text-weight-bold q-mb-md">
          @ {{ project.company }}
        </p>

        <p class="project-desc-text text-body2 q-mb-md">
          {{ project.desc }}
        </p>

        <p v-if="project.desc2" class="project-desc-text text-body2 q-mb-md">
          {{ project.desc2 }}
        </p>

        <!-- TECH STACK CHIPS -->
        <div class="tech-stack row items-center q-gutter-xs q-mt-md q-mb-lg">
          <q-chip
            v-for="(tech, indx) in project.technologies"
            :key="indx"
            dense
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
.project-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 380px;
  padding-bottom: 40px;
  border-bottom: 1px solid #cbd5e1;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &.is-reverse {
    flex-direction: row-reverse;
  }

  &.has-no-image {
    min-height: auto;
    padding-bottom: 24px;

    .project-content {
      width: 100%;
      max-width: 100%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}

/* Image Wrapper */
.project-image-wrapper {
  width: 50%;
  max-width: 50%;
  flex-shrink: 0;
  height: 320px;
  overflow: hidden;
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(15, 34, 45, 0.04);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: #cbd5e1;
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(15, 34, 45, 0.08);

    .project-img {
      transform: scale(1.03);
    }
  }
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.4s ease;
}

/* Content Panel */
.project-content {
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-pad-left {
  padding-left: 40px;
}

.content-pad-right {
  padding-right: 40px;
}

.project-title {
  color: #0f222d;
  line-height: 1.3;
}

.company-name {
  color: #4a5568;
  font-size: 16px;
}

.project-desc-text {
  color: #4a5568;
  line-height: 1.625;
}

/* Tech Stack Chips */
.tech-chip {
  background-color: #1e3a4b;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  border-radius: 24px;
  margin: 4px;
  padding: 12px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #0f222d;
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

/* Responsive Layout */
@media only screen and (max-width: 768px) {
  .project-card {
    padding-bottom: 18px;
  }
  .project-card,
  .project-card.is-reverse {
    flex-direction: column;
    align-items: stretch;
    min-height: auto;
  }

  .project-image-wrapper,
  .project-content {
    width: 100%;
    max-width: 100%;
  }

  .project-image-wrapper {
    height: 220px;
    margin-bottom: 16px;
  }

  .content-pad-left,
  .content-pad-right {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
