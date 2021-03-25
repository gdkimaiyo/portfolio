<template>
    <span>
        <a :href="href_link" :class="className" v-if="show_anchor">
            <i :class="fa_class"></i>
            {{ href_link_text }}
        </a>

        <span class="font-weight-bold" v-if="show_heading">
            {{ skill }}
        </span>
    </span>
</template>

<script>
export default {
    name: "BaseBadge",

    components: {},

    props: {
        show_anchor: {
            type: Boolean,
            default: false
        },

        show_heading: {
            type: Boolean,
            default: false
        },

        className: String,
        fa_class: String,
        href_link: String,
        href_link_text: String,
        skill: String
    }
};
</script>
