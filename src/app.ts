import Vue from "vue";
import Component from "vue-class-component";
import Header from "@/components/common/header/Header.vue";
import SideBar from "@/components/common/side-bar/SideBar.vue";

@Component({
  components: { Header, SideBar }
})
export default class App extends Vue {

}
