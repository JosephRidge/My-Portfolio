<template>
  <div class="w-screen h-screen static " loading="lazy">
    <!-- background -->
    <div class="transition duration-300 ease-in-out grid grid-cols-2">
      <!-- # HomePAGE Part 1-->
      <!--LEFT SIDE    -->
      <div class="h-screen flex flex-col  py-auto    ">
        <div class="my-auto">  </div>
        <div class=" transition ease-in-out px-32"  loading="lazy">
          <div class="my-7 text-6xl font-normal font-roboto text-darkGray" >
            Hi there, I'm 
          </div>
          <div class="  ">
            <img
              src="src/assets/JayR.svg"
              class="w-80 pb-10 mt-2 transition delay-150 ease-in-out"
              alt="Joseph Ridge logo"
              srcset=""
              loading="lazy"
            />
          </div>
          <div class="transition delay-150 ease-in-out text-3xl text-secondaryLightGray font-nunito mb-7">
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
         <div class="my-auto">  </div>
      </div>
      <!-- RIGHT SIDE  -->
      <div class="bg-blue-art bg-cover h-screen flex">
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
          class="scroll-smooth absolute flex flex-row w-auto h-auto border border-2 border-white rounded bottom-0 right-0 m-10"
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
    <WorkPage id="workSection" 
              loading="lazy"/>
    <!-- Part 2 introduction  -->
    <!-- bg-bike-engine  -- >
    <div id="workSection"
      class="scroll-smooth flex bg-cover bg-no-repeat bg-origin-content bg-primary h-screen"
    >
      !-- left side : About Me Title  -- 
      <div
        class="w-1/2 my-auto flex justify-center text-7xl text-white font-bold"
      >
        About
      </div>
      < !--  Right side : About Me Content -- 
      <div class="w-1/2 bg-white py-2 px-5 text-gray-600">
        <h1 class="mx-10 capitalize mt-4 font-bold text-black">
          {{ whatamI }}
        </h1>
        <p class="mx-10 my-3 text-justify">{{ whoamI }}</p>

        <div class="flex">
           !-- Mobile Applications -- 
          <div class="w-1/2 h-52 bg-green-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-base text-center py-1">
              Mobile Applications Development
            </h1>
            <p class="mx-10 my-3 text-justify text-sm">{{ mypassion }}</p>
          </div>
          !-- UI/UX design -- 
          <div class="w-1/2 h-52 bg-pink-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-center text-base py-1">
              UI / UX Design
            </h1>
            !-- {{ myuiux }} -- 
            <p class="mx-10 my-3 text-justify text-sm">{{ collaborate }}</p>
          </div>
            !-- <p class="mx-10 my-3 text-justify ">{{ myideal }}</p> -- >
        </div>
        <div class="flex">
          < !-- My Skills -- >
          <div class="w-1/2 h-28 bg-pink-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-center text-base py-1">
              My Skills
            </h1>
            <p class="mx-10 my-3 text-justify text-sm">{{ myskills }}</p>
          </div>
          < !-- Collaboration thoughts -- >
          <div class="w-1/2 h-52 bg-green-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-center text-base py-1">
              My thoughts on Collaboration
            </h1>
            <h1 class="mx-10 my-3 text-justify text-sm">{{ collaborate }}</h1>
          </div>
        </div>
        < !-- <div class="rounded bg-green-400 text-justify text-white p-2"> How i approach and implement projects</div> -- >

        < !-- Gratitude - ->
        <div>
          <h1 class="mx-10 text-black capitalize">Gratitude</h1>
          <p class="mx-10 my-3 text-justify">
            I have been privilaged to be part of great teams that have greatly
            contributed to my growth as a software engineer and UI/UX designer
            especially team from @iLabAfrica, AO Technology and most importantly
            my family.
          </p>
          <! -- TODO: Remove Image once done testing -- >
          <!- - <div class="bg-bike-engine w-28 h-28">fnsklngklsngklns
        <img src="/src/assets/motocycle.jpg" class="w-28 h-28 " alt="sg hgd h " srcset=""/>
          </div> - ->
        </div>
      </div>
    
    </div> -->
    <About class="h-screen"/>
    <Blog/>
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
};
</script>

<style></style>
