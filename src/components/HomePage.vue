<template>
  <div class="bg-primary w-screen h-screen static">

    <!-- background -->
    <div class="transition duration-300 ease-in-out">
      <img
        src="src/assets/bgImage.png"
        class="h-screen w-1/2 hover:bg-red-900"
        alt="image of Pencil and rubber on a green background"
        srcset=""
      />

      <!-- Center image + Name-->
      <div
        class="absolute w-fit flex flex-col justify-center top-0 right-0 bottom-0 left-0"
      >
        <div class="flex justify-center p-2 hover:hidden">
          <img
            src="src/assets/Logo.svg"
            class="w-1/5"
            alt="Joseph Ridge logo"
            srcset=""
          />
        </div>
        <div class="flex justify-center">
          <img
            src="src/assets/JayR.svg"
            class="w-1/5 pb-10"
            alt="Joseph Ridge logo"
            srcset=""
          />
        </div>
      </div>
    </div>
    <!-- Part 2 introduction  -->
    <div class="flex 
    bg-bike-engine bg-cover bg-no-repeat
     bg-origin-content  
    
     h-screen">
      <!-- left side : About Me Title  -->
      <div
        class="  w-1/2 my-auto flex justify-center text-6xl text-gray-100 font-bold"
      >
        About
      </div>
      <!--  Right side : About Me Content -->
      <div class="w-1/2  bg-white py-2 px-5 text-gray-600">
        <h1 class="mx-10 capitalize mt-4 font-bold text-black">
          {{ whatamI }}
        </h1>
        <p class="mx-10 my-3 text-justify">{{ whoamI }}</p>

        <div class="flex">
          <!-- Mobile Applications -->
          <div class="w-1/2 h-52 bg-green-100 py-2 hover:shadow-lg	">
            <h1 class="mx-4 text-black capitalize text-base text-center py-1">
              Mobile Applications Development
            </h1>
            <p class="mx-10 my-3 text-justify text-sm">{{ mypassion }}</p>
          </div>
          <!-- UI/UX design -->
          <div class="w-1/2 h-52 bg-pink-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-center text-base py-1">
              UI / UX Design
            </h1>
            <p class="mx-10 my-3 text-justify text-sm">{{ myuiux }} gsdgsgf</p>
          </div>
          <!-- <p class="mx-10 my-3 text-justify ">{{ myideal }}</p> -->
        </div>
        <div class="flex">
          <!-- My Skills -->
          <div class="w-1/2 h-28 bg-pink-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-center text-base py-1">
              My Skills
            </h1>
            <p class="mx-10 my-3 text-justify text-sm">{{ myskills }}</p>
          </div>
          <!-- Collaboration thoughts -->
          <div class="w-1/2 h-52 bg-green-100 py-2 hover:shadow-lg">
            <h1 class="mx-4 text-black capitalize text-center text-base py-1">
              My thoughts on Collaboration
            </h1>
            <h1 class="mx-10 my-3 text-justify text-sm">{{ collaborate }}</h1>
          </div>
        </div>
        <!-- <div class="rounded bg-green-400 text-justify text-white p-2"> How i approach and implement projects</div> -->

        <!-- Gratitude -->
        <div>
          <h1 class="mx-10 text-black capitalize">Gratitude</h1>
          <p class="mx-10 my-3 text-justify">
            I have been privilaged to be part of great teams that have greatly
            contributed to my growth as a software engineer and UI/UX designer
            especially team from @iLabAfrica, AO Technology and most importantly
            my family.

     
          </p>
          <!-- TODO: Remove Image once done testing -->
           <!-- <div class="bg-bike-engine w-28 h-28">fnsklngklsngklns
        <img src="/src/assets/motocycle.jpg" class="w-28 h-28 " alt="sg hgd h " srcset=""/>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultMixins from "../mixins/defaultMixins";
export default {
  mixins: [defaultMixins],
};
</script>

<style></style>
