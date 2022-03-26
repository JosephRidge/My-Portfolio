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
    <div class="flex bg-primary h-screen">
      <!-- left side : About Me Title  -->
      <div
        class="w-1/2 my-auto flex justify-center text-6xl text-gray-100 font-bold"
      >
        About
      </div>
      <!--  Right side : About Me Content -->
      <div class="w-1/2 bg-white p-2 text-gray-500">
        <h1 class="mx-4 capitalize mt-4 font-bold text-black">{{ whatamI }}</h1>
        <p class="mx-5 my-3 text-justify">{{ whoamI }}</p>
        <p class="mx-5 my-3 text-justify">{{ mypassion }}</p>
        <p class="mx-5 my-3 text-justify">{{ myadavantage }}</p>
        <p class="mx-5 my-3 text-justify">{{ myideal }}</p>
        <p class="mx-5 my-3 text-justify">{{ collaborate }}</p>
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
