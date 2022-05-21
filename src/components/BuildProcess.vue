<template>
  <div
    class="z-400 overflow-y-auto py-10 h-3/4 overflow-x-hidden w-full fixed right-0 left-0 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
    id="large-modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="relative px-4 w-3/4 md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-2xl dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class=" flex bg-yellow justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-2xl font-nunito text-darkGray text-darkBlue dark:text-white">
            My Approach
          </h3>
          <button
            id="closeButton"
            @click="$emit('closeDialog', true)"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="large-modal"
          >
            <svg
              class="w-7 h-7 bg-white rounded-full p-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="grid grid-cols-3 p-2">
          <!-- Card 1 -->

          <div
            class="transition ease-in-out duration-300 hover:scale-110
             m-4 bg-purpleShade hover:border-purpleShade block p-6
              max-w-sm bg-white rounded-lg border border-gray-200 shadow-md   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-7 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="src/assets/Logo.svg"
              alt=""
            />

            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Design think the solution
            </h5>
            <p class="font-nunito text-sm text-gray-700 dark:text-gray-400">
              Here, I conduct intense and diverse reasearch on earlier done or
              similar solutions, understand their functionalities, striking
              features ( both negative and positive ). Later come up with my
              final Design in both functionality and UI/UX
            </p>
          </div>
          <!-- Card 2 -->
          <div
            class="transition ease-in-out duration-300 hover:scale-110 
            block bg-brownShade hover:border-brownShade m-4 p-6 max-w-sm
             bg-white rounded-lg border border-gray-200 shadow-md 
              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-7 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="src/assets/Logo.svg"
              alt=""
            />
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Low Level Design
            </h5>
            <p class="text-sm font-nunito text-gray-700 dark:text-gray-400">
              Here, I commence the design of the solution, through curating a
              well though out low level User Interface with a focus on
              functionality and positioning of view elements.I use one major
              tool
              <span class="underline font-bold"
                ><a href="https://balsamiq.com/">Balsamiq,</a></span
              >
              one of the most intuitive tool i have used, in wireframing.
            </p>
          </div>
          <!-- Card 3 -->
          <div
            class="transition ease-in-out duration-300 hover:scale-110 block bg-pinkShade hover:border-pinkShade
             m-4 p-6 max-w-sm bg-white rounded-lg border
              border-gray-200 shadow-md  
              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-7 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="src/assets/Logo.svg"
              alt=""
            />
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              High Level Design
            </h5>
            <p class="font-nunito text-sm text-gray-700 dark:text-gray-400">
              At this point the low-level design has been approved. I now switch to
               <a href="https://www.figma.com/" class="underline font-bold">Figma</a> 
             and give 'life' to the existing project,
              through addition of colors(
              <span class="italic">targeting human emotions</span> ), beautiful
              illustrations and 2 major font combinations all guided by the
              UI/UX fundamentals and
              <a href="https://material.io/design" class="underline font-bold">
                Material Design patterns.
              </a> 
            </p>
          </div>
          <!-- Card 4-->
          <div
            class="transition ease-in-out duration-300 hover:scale-110 
            block bg-greenShade hover:border-greenShade m-4 p-6 
            max-w-sm bg-white rounded-lg border 
            border-gray-200 shadow-md  
            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-7 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="src/assets/Logo.svg"
              alt=""
            />
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Version Control
            </h5>
            <p class="font-nunito text-sm text-gray-700 dark:text-gray-400">
              Here, using git tool, I create my version control envrionment,
              using
              <a href="https://github.com/" class="underline font-bold">
                GitHub</a
              >, I am able to push my code-base to an online repository. Here I
              create two branches; develop branch and the main branch all new
              features have their own branch and merged to develop branch.
              Basically this is where I have the power to grab my Dr.Strange cap
              and time travel.
            </p>
          </div>
          <!-- Card 5-->
          <div
            class="transition ease-in-out duration-300 hover:scale-110 bg-purpleShade hover:border-purpleShade
             block m-4 p-6 max-w-sm bg-white rounded-lg border border-gray-200
              shadow-md   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-7 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="src/assets/Logo.svg"
              alt=""
            />
            <h5
              class="mb-2 m-auto text-left text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Prepare my Development Environment
            </h5>
            <p
              class="font-nunito text-sm text-gray-700 text-sm text-left dark:text-gray-400"
            >
              Finally I have already set up my Repository and the deisgns are
              ready, now i create the project, luckily I made a
              <a
                href="https://josephridge.medium.com/automating-the-app-creation-process-using-python-60d29cb88c03"
                class="underline font-bold"
                >python script</a
              >
              (its Public) that automates the process. The script is holds the
              functionalities of creating project and intializing version
              control.
            </p>
          </div>
          <!-- Card 6 -->
          <div
            class="transition ease-in-out duration-300 hover:scale-110
             bg-brownShade m-4 block p-6 max-w-sm bg-white rounded-lg 
             border border-gray-200 shadow-md hover:bg-gray  dark:bg-gray-800 hover:border-brownShade dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-7 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="src/assets/Logo.svg"
              alt=""
            />
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Build....Build....Maintain
            </h5>
            <p class="font-nunito text-sm text-gray-700 dark:text-gray-400">
              The fun starts, this is where i commence the develpoment. I take a
              'safe' approach here by assigning each feature its own branch and
              once a feature is done and tested I merge it to the develop branch
              later to the main branch. This helps me prevent the " Ohh no, and
              I just built it.. I should not have added all this code before
              pushing it.." .
            </p>
          </div>
        </div>
        <!-- End of cards -->
        <!-- Modal footer -->
        <div
          class="flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray dark:border-gray"
        > 
          <button
            @click="$emit('closeDialog', true)"
            type="button"
            class="hover:bg-red-800 hover:text-white transition ease-in-out duration-300 shadow
             rounded-full border-2 border-red-200 hover:border-red-800 hover:scale-110
            w-44 hover:bg-red  text-sm  px-5 py-1.5 mx-2  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location_lat: 0.0,
      location_lng: 0.0,
      userExactLocation: "",
      userEmergencyDetails: "",
      details: {},
    };
  },
  mounted() {
    // this.closeModalDialog();
    // this.getExactLocation();
  },
  methods: {
    closeModalDialog() {
      console.log("clicked");
    },

    emitValues() {
      let loc = this.userExactLocation;
      let emergencyreq = this.userEmergencyDetails;
      this.details = {
        lat: this.location_lat,
        lng: this.location_lng,
        location: loc,
        emergency: emergencyreq,
        success: true, // this is to be able to close modal after requesting for help
      };
      console.log("details  ", this.details);
      return this.details;
    },
  },
};
</script>
