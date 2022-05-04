<template>
  <div class="h-screen w-screen bg-primaryBlue flex flex-col" loading="lazy">
    <!-- Top Nav -->
    <NavigationBar class="text-white" />
    <div class="mx-5 mt-16"></div>
    <!-- my title -->
    <div class="py-4"  id="prevBtn">
      <img
        src="src/assets/MyWork.svg"
        class="mx-32 w-56 h-14"
        alt="My Work logo"
        srcset=""
        loading="lazy"
      />
    </div>
    <!-- work section -->
    <div class="flex flex-row h-screen">
      <!-- left arrow -->
      <div class="m-auto">
        <img
          src="src/assets/leftArrow.svg"
          class="-translate-y-2/4 ml-10 hover:cursor-pointer hover:shadow-xl transition ease-in-out hover:-translate-x-1 rounded-full"
          alt=" left pointing arrow logo"
          srcset=""
          loading="lazy"
        />
      </div>

      <!-- CENTER content flex flex-row auto-cols-max-->
<!-- carousel body -->
      <div
        class="carousel flex flex-row overflow-x-hidden scroll-smooth flex-nowrap w-content mx-7 w-screen"
      >
        <!-- Project 1 -->
        <div id="project1"><ProjectOne class="mx-5 project first" /></div>
        <!-- Project 2 -->
        <div id="project2" ><ProjecctTwo class="project"/></div>
        <!-- Project 3-->
        <div id="project3" ><ProjectThree class="mx-5 project" /></div>
      </div>

      <!-- right arrow -->
      <div class="m-auto" id="nextBtn">
        <img
          src="src/assets/rightArrow.svg"
          class="-translate-y-2/4 mr-10 hover:shadow-xl hover:cursor-pointer transition ease-in-out hover:translate-x-1 rounded-full"
          alt="right pointing arrow logo"
          srcset=""
          loading="lazy"
        />
      </div>
    </div>
    <div class="flex justify-center my-4">
      <a href="#project1" 
        class="w-4 h-4 bg-white mx-5 rounded-full "
      />
      <a href="#project2" class="w-4 h-4 bg-white rounded-full"/>
      <a href="#project3" class="w-4 h-4 bg-white mx-5 rounded-full"/>
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
};
// const carousel = document.querySelectorAll('.carousel  .project');
// const carouselSlide = document.querySelectorAll(".carousel ");
// // buttons
// const prevButton = document.querySelector("#prevBtn")
//  const nextButton = document.querySelector("#nextBtn")
//  let counter = 1  
//  const size = carousel.clientWidth;
//  carouselSlide.transform = 'translateX('+(-size * counter)+'px)'
//  nextButton.addEventListener('click',()=>{
//    counter++
//    console.log(counter)
//    })
</script>

<style> 
</style>
