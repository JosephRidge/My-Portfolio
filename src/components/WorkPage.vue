<template>
  <div class="h-screen bg-primaryBlue flex flex-col">
    <!-- Top Nav -->
    <NavigationBar class="text-white" />
    <div class="mx-5 mt-16"></div>
    <!-- my title -->
    <div class="py-4">
      <img
        src="src/assets/MyWork.svg"
        class="   "
        alt="My Work logo"
        srcset=""
        loading="lazy"
      />
    </div>
    <!-- work section -->
    <div class="flex ">
      <!-- left arrow -->
      <div class="flex justify-center my-auto ">
        <img
          src="src/assets/leftArrow.svg"
          class="   "
          alt=" left pointing arrow logo"
          srcset=""
          loading="lazy"
        />
      </div>

      <!-- center content -->
      <div class="grid grid-cols-2">
      <div class="mx-10 bg-secondaryLighterBlue p-3">
      <!-- Project Title -->
      <div>Proect Title </div>
      <!-- Project Description -->
      <p>porjcet fjjakbfa fjabfja kfj je fkja fdjbfkabfk</p>
      </div>
     <!-- Project Image -->
      <div  loading="lazy"></div>

      </div>

      <!-- right arrow -->
      <div>
        <img
          src="src/assets/rightArrow.svg"
          class="absolute right-0  "
          alt=" right pointing arrow logo"
          srcset=""
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
export default {
  components: { NavigationBar },
};
</script>

<style></style>
