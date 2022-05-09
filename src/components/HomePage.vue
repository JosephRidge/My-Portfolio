<template>
  <div class=" w-screen h-screen static" loading="lazy">
    <!-- background -->
    <div class="transition duration-300 ease-in-out grid grid-cols-2">
      <!-- # HomePAGE Part 1-->
      <!--LEFT SIDE    -->
      <div class="  h-screen flex flex-col py-auto">
        <div class="my-auto"></div>
        <div class=" px-32" loading="lazy">
          <div class=" greetings my-7 text-6xl font-normal font-roboto text-darkGray">
            Hi there, I'm
          </div>
          <div class=" name ">
            <img
              src="src/assets/JayR.svg"
              class="w-80 pb-10 mt-2 transition delay-150 ease-in-out"
              alt="Joseph Ridge logo"
              srcset=""
              loading="lazy"
            />
          </div>
          <div
            class="about    text-3xl text-secondaryLightGray font-nunito mb-7"
          >
            A Student, Educator, Creator and Lover of Life. I Welcome you to
            experience a snapshot of my dev journey ! A Junior Android
            developer.
          </div>
          <button
            class="text-xl text-primaryBlue font-medium rounded transition duration-700 ease-in-out hover:underline hover:underline-offset-8 p-2"
          >
            About Me.
          </button>
        </div>
        <div class="my-auto"></div>
      </div>
      <!-- RIGHT SIDE  -->
      <div class="home bg-blue-art bg-cover h-screen flex">
        <div class="self-center ml-auto mr-auto">
          <img
            src="src/assets/Logo.svg"
            class="w-64"
            alt="Joseph Ridge logo"
            srcset=""
          />
        </div>
        <a
          href="#workSection"
          class="work  scroll-smooth absolute flex flex-row w-auto h-auto border border-2 border-white rounded bottom-0 right-0 m-10"
        >
          <div class="my-2 ml-4 mr-2 text-white font-bold font-roboto">
            SCROLL
          </div>
          <div>
            <img
              src="src/assets/Arrow.svg"
              class="block ml-2 mr-5 my-3 w-3"
              alt="Arrow Down"
              srcset=""
            />
          </div>
        </a>
      </div>
    </div>
    <WorkPage id="workSection" loading="lazy" class="workSection" /> 
    <About class="h-screen" />
    <Blog />
  </div>
</template>

<script>
import defaultMixins from "../mixins/defaultMixins";
import WorkPage from "./WorkPage.vue";
import About from "./About.vue";
import Blog from "./Blog.vue";
export default {
  mixins: [defaultMixins],
  components: { WorkPage, About, Blog },
  methods: {
    _animate() {
      /*    Animation    */
      // const myName = document.querySelector(".myName");
      const greetings = document.querySelector(".greetings");
      const name = document.querySelector(".name");
      const about = document.querySelector(".about");
      const homePage  = document.querySelector(".home");
       

      const t1 = new TimelineMax(); 
      t1.fromTo(homePage,3, {opacity:"0"}, {opacity:"1", ease:Power2.easeInOut} )
      t1.fromTo(greetings,1, {opacity:"0"}, {opacity:"1", ease:Power2.easeInOut} )
      t1.fromTo(name,1.5, {opacity:"0"}, {opacity:"1", ease:Power2.easeInOut} )
      t1.fromTo(about,1.3, {opacity:"0"}, {opacity:"1", ease:Power2.easeInOut} )
 
    },
  },
  mounted(){
    this._animate()
  }
};
</script>

<style></style>
