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
        <div class="capitalize text-5xl text-white font-light   mx-auto my-auto pt-7">
          Some of My simplified Technical pieces
        </div>
      </div>
    </div>
    <NavigationBar class="text-white" />
    <div class="mt-10 bg-primaryBlue"></div>
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
