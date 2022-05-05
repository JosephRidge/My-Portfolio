<template>
  <div class="h-screen w-screen  flex flex-col" loading="lazy">
        <NavigationBar class="text-primaryBlue" />
       <div class="mx-5 mt-12"></div>
       <!-- my title -->
    <div class="py-4 mx-auto my-7">
      <img
        src="src/assets/AboutME.svg"
        class="mx-32 w-56 h-14"
        alt="My Work logo"
        srcset=""
        loading="lazy"
      />
    </div>
    <!-- About me content 
    outer divt tag covers for border n container
    inner div has the content
    -->    
    <div class="border-4 rounded mx-32  py-11 px-10 text-xl font-light text-secondaryLightGray font-nunito">
        <div class="my-5 text-lg ">
            <h2 class="text-xl my-1 font-normal text-darkGray">My Strength</h2>
            {{strength}}
        </div>
     <div class="my-5 text-lg ">
            <h2 class="text-xl my-1 font-normal text-darkGray"> Tools I Use</h2>
            {{ tools }}
        </div>
       <div class="my-5 text-lg ">
            <h2 class="capitalize text-xl my-1 font-normal text-darkGray"> Projects I Love & my personal request</h2>
            {{ mypassion }}
        </div>

    </div>
    <!-- Bottom Dark Bar -->
     <div class="relative mt-auto">
    <div class="bg-secondaryLightGray h-32  absolute inset-x-0 bottom-0 "></div>

    </div> 

    <!-- Span bottom edge -->
<!-- <div class="relative h-32 w-32  bg-red-400 ">
  <div class="absolute inset-x-0 bottom-0 h-16 ">08</div>
</div> -->
  </div>
</template>

<script>
import NavigationBar  from "./NavigationBar.vue" 
import aboutmeMixins from "../mixins/aboutmeMixins"
export default {
  mixins: [aboutmeMixins],
  components: {
    NavigationBar, 
}
}
</script>

<style>

</style>