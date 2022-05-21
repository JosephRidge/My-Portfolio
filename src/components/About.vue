<template>
  <div class="h-screen w-screen  flex flex-col" loading="lazy">
        <!-- <NavigationBar class="text-primaryBlue" /> -->
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
    <div
      class="border-4 rounded mx-32 py-11 px-10 text-xl font-light text-secondaryLightGray font-nunito"
    >
      <div class="text-lg">
        <h2 class="text-xl my-1 font-normal text-darkGray">My Strength</h2>
        {{ strength }}
      </div>
      <div class="my-5 text-lg">
        <div class="text-xl font-normal text-darkGray">Tools I Use</div>

        {{ tools }}
      </div>
      <div class="my-5 text-lg">
        <h2 class="capitalize text-xl my-1 font-normal">
          Projects I Love & my personal request
        </h2>
        {{ mypassion }}
      </div>
      <button
        @click="launchModalView()"
        class="py-1 hover:bg-primaryBlue  
         text-sm font-nunito text-primaryBlue px-3 
         my-auto rounded-full shadow transition 
         ease-in-out duration-300 hover:scale-105
         border-2 border-primaryBlue
         hover:text-white text-primaryBlue"
      >
        How I approach projects
      </button>
    </div>
    <!-- Modal View  
      -->
      
    <BuildProcess
     @closeDialog="closeDialogForm" v-if="showForm === true"
      class="bg-primaryBlue bg-opacity-50
         inset-0 flex"
    />

    <!-- Bottom Dark Bar -->
    <div class="relative mt-auto">
      <div class="bg-secondaryLightGray h-16 absolute inset-x-0 bottom-0"></div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import aboutmeMixins from "../mixins/aboutmeMixins";
import BuildProcess from "./BuildProcess.vue";
export default {
  mixins: [aboutmeMixins],
  components: {
    NavigationBar,
    BuildProcess,
  },
  data() {
    return {
      showForm: false, 
    };
  },
  methods: {
    closeDialogForm(event) { 
      this.showForm = !event; 
    }, 
    launchModalView() { 
        // this.showForm = !this.showForm; 
        console.log("Button clicked ...")   
        this.showForm = !this.showForm 
    }, 
    },
  mounted() {
    // this.showForm = false;
  },
};
</script>

<style></style>
