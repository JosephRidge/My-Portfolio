<template>
  <div class="h-screen w-screen flex flex-col" loading="lazy">
    <div class="h-64 bg-darkGray">
      <!-- my title -->
      <div class="flex flex-row">
        <img
          src="src/assets/Logo.svg"
          class="mt-14 ml-14 h-44"
          alt="My Work logo"
          srcset=""
          loading="lazy"
        />
        <div
          class="capitalize text-5xl text-white font-light mx-auto my-auto pt-7"
        >
          Some of My simplified Technical pieces
        </div>
      </div>
    </div>
    <NavigationBar class="text-white" />
    <div class="grid grid-cols-3 m-16 justify-center">
        <!-- item 1 -->
      <div class="border-2 rounded-xl shadow m-10 p-4 flex flex-col">
        <div class="font-nunito text-center my-3">MVVM simplified</div>
        <div
          class="p-2 bg-primaryBlue rounded-2xl px-6 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer"
        >
          <a href=" ">Read ME</a>
        </div>
      </div>
         <!-- item 2 -->
      <div class="border-2 rounded-xl shadow rounded m-10 p-4 flex flex-col">
        <div class="font-nunito text-center my-3">Views simplified</div>
        <div
          class="p-2 bg-primaryBlue rounded-2xl px-6 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer"
        >
          <a href=" ">Read ME</a>
        </div>
      </div>
         <!-- item 3 -->
      <div class="border-2  rounded-xl shadow m-10 p-4 flex flex-col">
        <div class="font-nunito text-center my-3">DataBinding simplified</div>
        <div
          class="p-2 bg-primaryBlue rounded-2xl px-6 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer"
        >
          <a href=" ">Read ME</a>
        </div>
      </div>
         <!-- item 4 -->
      <div class="border-2  rounded-xl shadow m-10 p-4 flex flex-col">
        <div class="font-nunito text-center my-3">NodeMCU simplified</div>
        <div
          class="p-2 bg-primaryBlue rounded-2xl px-6 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer"
        >
          <a href=" ">Read ME</a>
        </div>
      </div>
         <!-- item 5-->
      <div class="border-2  rounded-xl shadow m-10 p-4 flex flex-col">
        <div class="font-nunito text-center my-3">IOT simplified</div>
        <div
          class="p-2 bg-primaryBlue rounded-2xl px-6 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer"
        >
          <a href=" ">Read ME</a>
        </div>
      </div>
         <!-- item 6-->
      <div class="border-2  rounded-xl shadow m-10 p-4 flex flex-col">
        <div class="font-nunito text-center my-3">MVVM simplified</div>
        <div
          class="p-2 bg-primaryBlue rounded-2xl px-6 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer"
        >
          <a href=" ">Read ME</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import aboutmeMixins from "../mixins/aboutmeMixins";
export default {
  mixins: [aboutmeMixins],
  components: {
    NavigationBar,
  },
};
</script>

<style></style>
<!-- Dark section - Logo, Navigation bar & title -->

<!-- Top Nav -->
<!-- <div class=" flex flex-row "  >
      <img
        src="src/assets/Logo.svg"
        class=" mt-14 ml-14 h-44	"
        alt="My Work logo"
        srcset=""
        loading="lazy"
      />
      <div class="capitalize text-5xl font-roboto m-auto"> Some of My simplified Technical pieces</div>
    
    </div> -->
