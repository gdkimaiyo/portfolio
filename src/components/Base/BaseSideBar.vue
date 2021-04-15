<template>
    <aside>
        <div
            class="card shadow mb-3"
            v-if="emptyObjectNode(basic_data.contact_info)"
        >
            <div class="card-body">
                <ul class="list-unstyled mb-0">
                    <li
                        v-if="
                            basic_data.contact_info.location !== '' ||
                                basic_data.contact_info.country !== ''
                        "
                    >
                        <i class="text-muted pr-2 fas fa-map-marker-alt"></i>
                        <span class="font-weight-bold">
                            {{ basic_data.contact_info.location }}</span
                        >
                        {{ basic_data.contact_info.country }}
                    </li>

                    <li v-if="basic_data.contact_info.email !== ''">
                        <i class="text-muted pr-2 fas fa-envelope"></i>
                        <span class="text-info">
                            {{ basic_data.contact_info.email }}</span
                        >
                    </li>

                    <li v-if="basic_data.contact_info.tel_no !== ''">
                        <i class="text-muted pr-2 fas fa-phone-square-alt"></i>
                        <span class="">
                            {{ basic_data.contact_info.tel_no }}</span
                        >
                    </li>

                    <li v-if="basic_data.contact_info.website !== ''">
                        <i class="text-muted pr-2 fab fa-wordpress"></i>
                        <!-- <a class="" :href="basic_data.contact_info.website">
              {{
                basic_data.contact_info.website.replace(/^\/\/|^.*?:\/\//, "")
              }}
            </a> -->
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="card shadow mb-3"
            v-if="basic_data.languages.dialects.length > 0"
        >
            <div class="card-body" v>
                <h5 class="card-title">Languages</h5>
                <ul class="list-inline mb-0">
                    <li
                        class="list-inline-item"
                        v-for="(dialect, index) in basic_data.languages
                            .dialects"
                        :key="index"
                    >
                        {{ dialect }}
                        <i
                            class="fas fa-circle fa-xs text-info pl-1"
                            v-if="
                                index !=
                                    basic_data.languages.dialects.length - 1
                            "
                        >
                        </i>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card shadow mb-3" v-if="emptyObjectParent(ed_data)">
            <div class="card-body">
                <h5 class="card-title">
                    Education <i class="fas fa-graduation-cap"></i>
                </h5>
                <ul class="list-unstyled mb-0">
                    <li
                        class="mb-1"
                        v-for="(value, index) in ed_data"
                        :key="index"
                    >
                        <span class="font-weight-bold">{{
                            value.course_name
                        }}</span>
                        <small v-if="value.course_name && value.major">
                            ({{ value.major }})</small
                        >
                        <span v-if="value.course_name && value.institution">
                            {{ value.institution }}</span
                        >
                        <small v-if="value.course_name && value.start_year">
                            ({{ value.start_year }} - {{ value.end_year }})
                        </small>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
import jsonData from "../../mixins/jsonData.js";

export default {
    name: "BaseSideBar",
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
