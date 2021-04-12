<template>
    <div class="card-body mb-0">
        <blockquote class="blockquote">
            <p class="mb-1">
                <i class="fas fa-quote-left pr-2 "></i>
                <span v-html="quote_text"></span>
            </p>
            <footer class="blockquote-footer pb-0">
                <span class=" font-weight-bold">{{ owner }}, </span>
                <cite title="Source Title">{{ title }}, {{ company }}</cite>
            </footer>
        </blockquote>
    </div>
</template>

<script>
export default {
    name: "BaseQuote",

    components: {},

    props: {
        owner: String,
        title: String,
        company: String,
        quote_text: String
    }
};
</script>

<style>
.blockquote {
    padding-bottom: 0;
    margin-bottom: 0;
}
.blockquote p {
    font-size: 1rem;
}
</style>
