<template>
  <div class="h-screen bg-primaryBlue flex flex-col">
    <!-- Top Nav -->
    <NavigationBar class="text-white" />
    <div class="mx-5 mt-16"></div>
    <!-- my title -->
    <div class="py-4">
      <img
        src="src/assets/MyWork.svg"
        class=" mx-32  w-56 h-14"
        alt="My Work logo"
        srcset=""
        loading="lazy"
      />
    </div>
    <!-- work section -->
    <div class="flex h-screen ">
      <!-- left arrow -->
      <div class=" m-auto ">
        <img
          src="src/assets/leftArrow.svg"
          class="ml-10 "
          alt=" left pointing arrow logo"
          srcset=""
          loading="lazy"
        />
      </div>

      <!-- center content -->
      <div class="grid grid-cols-2 w-10/12 bg-secondaryLighterBlue rounded-xl mb-28 mx-7 ">
      <div class="p-3">
      <!-- Project Title -->
      <div>Proect Title </div>
      <!-- Project Description -->
      <p>porjcet fjjakbfa fjabfja kfj je fkja fdjbfkabfk</p>
      </div>
     <!-- Project Image -->
      <div  loading="lazy"></div>

      </div>

      <!-- right arrow -->
      <div class=" m-auto  ">
        <img
          src="src/assets/rightArrow.svg"
          class=" mr-10  "
          alt="right pointing arrow logo"
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
