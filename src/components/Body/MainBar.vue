<template>
    <main>
        <!-- About Section -->
        <BaseAboutMe />

        <!-- Skill set / Expertise Section -->
        <section class="shadow mb-5">
            <h4 class="card-header font-weight-bold">Expertise</h4>
            <div class="card">
                <div class="card-body border-bottom">
                    <p>
                        <span
                            class="p-1"
                            v-for="(skill, index) in expertise_data.skills"
                            :key="index"
                        >
                            <BaseBadge :show_heading="true" :skill="skill" />,
                        </span>
                    </p>
                </div>
            </div>
        </section>

        <!-- My Services Section -->
        <section id="services" class="shadow mb-5">
            <h4 class="card-header font-weight-bold">What I do</h4>
            <div
                class="card"
                v-for="(service, index) in services_data"
                :key="index"
            >
                <BaseCardBody
                    :card_title="service.service_title"
                    :card_desc="service.service_desc"
                    :show_card_footer="true"
                />
            </div>
        </section>

        <!-- Projects Section -->
        <section
            id="projects"
            class="shadow mb-5"
            v-if="emptyObjectNode(projects_data.project_details)"
        >
            <h4 class="card-header font-weight-bold">My Projects</h4>
            <div
                class="card"
                v-for="(value, index) in projects_data.project_details"
                :key="index"
            >
                <BaseImage
                    v-if="value.project_preview_image"
                    className="rounded img-fluid p-2"
                    :img_alt="value.project_title + ' preview image'"
                    :img="value.project_preview_image"
                />
                <BaseCardBody
                    :card_title="value.project_title"
                    :card_desc="value.project_desc"
                    :preview_link="value.project_preview_link"
                    :preview_link_text="'Preview Project'"
                    :source_code_link="value.project_source_code_link"
                    :source_code_link_text="'Source Code'"
                />

                <div
                    class="card-footer border-bottom"
                    v-if="index === projects_data.project_details.length - 1"
                >
                    <BaseButton
                        :href_link="projects_data.all_projects_link"
                        target_option="_blank"
                        className="btn btn-primary"
                        btn_text="See All Projects"
                    />
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="shadow mb-4" v-if="emptyObjectParent(testimonies_data)">
            <h4 class="card-header font-weight-bold">Testimonials</h4>
            <div
                class="card mb-0"
                v-for="(value, index) in testimonies_data"
                :key="index"
            >
                <BaseQuote
                    :quote_text="value.testimony"
                    :owner="value.name"
                    :title="value.title"
                    :company="value.company"
                />
            </div>
        </section>

        <!-- Social Media Section -->
        <section
            id="find-me"
            class="shadow mb-4"
            v-if="emptyObjectParent(social_data)"
        >
            <h4 class="card-header font-weight-bold">Find Me</h4>
            <div class="card">
                <div class="card-body border-bottom">
                    <p class="card-text">
                        Feel free to connect. You can find me on the following
                        platforms.
                    </p>
                    <span
                        class="p-1"
                        v-for="(value, index) in social_data"
                        :key="index"
                    >
                        <BaseBadge
                            :show_anchor="true"
                            className="p-2 mb-2 badge badge-light"
                            :fa_class="
                                'fab fa-' +
                                    convertToLowerCase(value.social_media_name)
                            "
                            :href_link="value.social_media_link"
                            :href_link_text="value.social_media_name"
                        />
                    </span>
                </div>
                <!-- Card footer -->
                <div class="card-footer border-bottom">
                    <BaseButton
                        @btnMethod="scrollToTop()"
                        className="btn btn-primary"
                        btn_text="Back to top"
                        fa_class="fas fa-arrow-up"
                    />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import BaseAboutMe from "../Base/BaseAboutMe.vue";
import BaseCardBody from "../Base/BaseCardBody.vue";
import BaseImage from "../Base/BaseImage.vue";
import BaseBadge from "../Base/BaseBadge.vue";
import BaseButton from "../Base/BaseButton.vue";
import BaseQuote from "../Base/BaseQuote.vue";

import jsonData from "../../mixins/jsonData.js";

export default {
    name: "MainBar",
    mixins: [jsonData],

    components: {
        BaseAboutMe,
        BaseCardBody,
        BaseImage,
        BaseBadge,
        BaseQuote,
        BaseButton
    }
};
</script>

<style>
.card,
.card-header {
    border: none;
}

.badge {
    font-size: 14px;
}
</style>
