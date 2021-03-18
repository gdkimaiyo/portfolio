// import json file with portfolio details
import portfolio from "../assets/portfolio.json";

export default {
  data() {
    return {
      // parse data into Vue
      basic_data: portfolio.basic_details,
      aboutme_data: portfolio.about_me,
      services_data: portfolio.my_services,
      projects_data: portfolio.projects,
      ed_data: portfolio.education,
      expertise_data: portfolio.expertise,
      testimonies_data: portfolio.testimonies,
      social_data: portfolio.social_media,
      author_data: portfolio.author
    };
  },

  methods: {
    // Check for an empty object => standalone object, without objects within
    emptyObjectNode(obj) {
      let isEmpty = !Object.values(obj).every(
        obj_key => obj_key === "" || obj_key === null || obj_key === undefined
      );
      return isEmpty;
    },

    // Check for empty objects within a parent object
    emptyObjectParent(var_obj) {
      let children_objects_empty = false;
      for (let key in var_obj) {
        if (this.emptyObjectNode(var_obj[key])) {
          children_objects_empty = true;
          break;
        }
      }
      return children_objects_empty;
    },

    convertToLowerCase(str) {
      return str.toLowerCase();
    },

    getYear() {
      let date = new Date();
      let year = date.getFullYear();
      return year;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
