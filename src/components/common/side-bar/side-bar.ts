import Vue from "vue";
import Component from "vue-class-component";
import AboutMe from "./about-me/AboutMe.vue";
import Contact from "./contact/Contact.vue";
import Custom from "./custom/Custom.vue";
import Education from "./education/Education.vue";
import Experience from "./experience/Experience.vue";
import Languages from "./languages/Languages.vue";
import Specialization from "./specializations/Specialization.vue";
import Skills from "./skills/Skills.vue";

@Component({
  components: {
    AboutMe,
    Custom,
    Contact,
    Languages,
    Education,
    Experience,
    Specialization,
    Skills,
  },
})
export default class SideBar extends Vue {}
