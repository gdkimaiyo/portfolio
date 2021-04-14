<template>
    <footer
        class="footer text-center text-white pt-2 pb-2"
        :style="{
            'background-image':
                'url(' +
                require('../../assets/' + basic_data.others.footer_banner) +
                ')'
        }"
    >
        Designed by
        <a :href="author_data.author_link" target="_blank">
            <b>{{ author_data.name }}</b>
        </a>
    </footer>
</template>

<script>
import jsonData from "../../mixins/jsonData.js";

export default {
    name: "Footer",
    mixins: [jsonData],

    components: {}
};
</script>

<style>
.footer {
    background-color: #32383e;
}
.footer a {
    text-decoration: none;
    color: white;
}
.footer a:hover {
    text-decoration: underline;
    color: white;
}
</style>
