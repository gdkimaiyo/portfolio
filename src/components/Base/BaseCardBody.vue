<template>
    <div class="" v-if="card_title !== ''">
        <!-- Card body -->
        <div class="card-body border-bottom">
            <h6 class="card-title font-weight-bold">{{ card_title }}</h6>
            <p class="card-text"><span v-html="card_desc"></span></p>
            <a :href="preview_link" :class="className" v-if="preview_link">
                {{ preview_link_text }}
            </a>
            <a
                :href="source_code_link"
                class="card-link text-success"
                v-if="source_code_link"
            >
                <i class="fas fa-external-link-alt"></i>
                {{ source_code_link_text }}
            </a>
        </div>
        <!-- Card footer -->
        <div
            class="card-footer text-center border-bottom"
            v-if="show_card_footer"
        >
            <!-- <small class="text-muted"></small> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseCardBody",

    components: {},

    props: {
        card_title: String,
        card_desc: Array,
        preview_link: String,
        preview_link_text: String,
        source_code_link: String,
        source_code_link_text: String,
        all_projects_link: String,
        className: {
            type: String,
            default: "card-link"
        },
        show_card_footer: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>
.disabled {
    cursor: not-allowed;
    opacity: 0.7;
}
</style>
