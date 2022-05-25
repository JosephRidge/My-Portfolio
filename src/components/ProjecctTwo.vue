<template> 
        <div
          class="flex flex-cols   bg-secondaryLighterBlue rounded-xl px-7">
          <div class="p-10 text-white font-nunito  w-1/2 ">
            <!-- Project Title -->
            <div class="text-5xl my-4 capitalize">greensoko Client</div>
            <!-- Project Description -->
            <div class="py-1 text-base font-bold">About :</div>
            <p class="pb-5 text-sm h-auto ">{{ greensokoClient }}</p>
            <div class="py-1 text-base font-bold  ">Project Design Process :</div>
            <p class="pb-5 text-sm text-justify   ">{{ devProcessGreenSoko }}</p>
            <div class="py-1 text-base font-bold">Hurdles Encountered :</div>
            <p class="py-1 text-sm text-justify ">{{ hurdlesGreenSoko }}</p>
          </div> 
          <!-- Project Image -->
          <div
            class="bg-secondaryLightGray shadow-xl rounded-xl w-1/2 h-72  py-12  px-8 my-auto "
            loading="lazy"
          >
            <div class=" ">
              <img
                src="../assets/projects/greensoko-feature-graphic.png"
                class="rounded "
                alt=" Project Logo"
                srcset=""
                loading="lazy"
              />
            </div>
          </div>
        </div> 
</template>

<script>
import projectsMixins from "../mixins/projectsMixins"
export default {
    mixins:[projectsMixins]

}
</script>

<style> 
</style>