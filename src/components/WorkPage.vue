<template>
  <div class="h-screen w-screen bg-primaryBlue flex flex-col">
    <!-- Top Nav -->
    <!-- <NavigationBar class="text-white" /> -->
    <div class="mx-5 mt-16"></div>
    <!-- my title -->
    <div class="py-4" id="prevBtn">
      <img
        src="src/assets/MyWork.svg"
        class="mx-32 w-56 h-14"
        alt="My Work logo"
        srcset=""
        loading="lazy"
      />
    </div>
    <!-- work section -->
    <div class=" ">
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper mx-20 center">
          <!-- Project 1 -->
          <div class="swiper-slide"><ProjectOne class="mx-5" /></div>
          <!-- Project 2 -->
          <div class="swiper-slide"><ProjecctTwo class="" /></div>
          <!-- Project 3-->
          <div class="swiper-slide"><ProjectThree class="mx-5" /></div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <div class="my-auto ">
          <img
            src="src/assets/leftArrow.svg"
            class="  -translate-y-2/4
             mr-auto h-14 w-16 swiper-button-prev 
             hover:shadow-xl hover:cursor-pointer 
             transition ease-in-out hover:translate-x-1 rounded-full"
            alt="right pointing arrow logo"
            srcset=""
            loading="lazy"
          />
        </div>
        <!-- right arrow -->
        <div class="my-auto   ">
          <img
            src="src/assets/rightArrow.svg"
            class="my-auto -translate-y-2/4 
            mr-auto h-14 w-16 swiper-button-next 
            hover:shadow-xl hover:cursor-pointer
             transition ease-in-out hover:translate-x-1 rounded-full"
            alt="right pointing arrow logo"
            srcset=""
            loading="lazy"
          />
        </div>
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import projectsMixins from "../mixins/projectsMixins";
import ProjectOneVue from "./ProjectOne.vue";
import ProjecctTwoVue from "./ProjecctTwo.vue";
import ProjectThreeVue from "./ProjectThree.vue";
import ProjectOne from "./ProjectOne.vue";
import ProjecctTwo from "./ProjecctTwo.vue";
import ProjectThree from "./ProjectThree.vue";
import { getDatabase, ref, push } from "firebase/database";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

export default {
  mixins: [projectsMixins],
  components: {
    NavigationBar,
    ProjectOneVue,
    ProjecctTwoVue,
    ProjectThreeVue,
    ProjectOne,
    ProjecctTwo,
    ProjectThree,
  },
  mounted() {
    console.log(`the component is now mounted.`);
    this.swiperJS();
    // this.writeBlogDetails("Project W ", "https://learnvue.co/2021/06/a-vue-firebase-authentication-tutorial-vue-3-and-firebase/#user-registration")
  },
  methods: {
    writeBlogDetails(blogName, blogUrl, blogDescp) {
      const db = getDatabase();
      push(ref(db, "blogs/"), {
        name: blogName,
        link: blogUrl,
        description: blogDescp,
      });
    },
    swiperJS() {
      const swiper = new Swiper(".swiper", {
        // Optional parameters
        modules: [Navigation, Pagination],
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          // el: ".swiper-scrollbar",
        },
      });
      return swiper;
    },
  },
};
</script>

<style>
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    content: 'next';
    visibility: hidden !important;
}
</style>
