<template>
  <div
    class="z-400 overflow-y-auto py-10 overflow-x-hidden fixed right-0 left-0 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
    id="small-modal"
  >
    <div class="relative px-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-2xl dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex bg-yellow justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-darkBlue dark:text-white">
            Kindly Enter Details
          </h3>
          <button
            id="closeButton"
            @click="$emit('closeDialog', true)"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="small-modal"
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

        <div class="px-6 py-4 space-y-3">
          <div class="border rounded-xl border-yellow text-darkBlue">
            <input
              v-model="userExactLocation"
              placeholder="Enter Location Name. eg .. Nairobi CBD, Agha Khan walk"
              class="p-2 text-ellipsis rounded-2xl h-12 w-full text-center"
            />
          </div>
        </div>
        <!-- emergency description -->
        <div class="px-6 pb-4 space-y-3">
          <div class="border rounded-xl border-yellow text-darkBlue">
            <input
              v-model="userEmergencyDetails"
              placeholder="Enter emergency Details eg..Building X on fire and there are people inside"
              class="p-2 text-ellipsis rounded-2xl h-12 w-full text-center"
            />
          </div>
        </div>
        <!-- request for location -->
        <div class="px-6 pb-3">
          <div class="text-gray">
            Hi there, to make this successful we will need your exactlocation to
            be able to follow through, hence you maybe asked for your location
            permissions.
          </div>
        </div>

        <!-- request user to select the emergency type to make official request -->
        <!-- request for location -->
        <div
          class="flex -center px-6 py-1 rounded-full mb-2 mx-14 shadow-xl hover:bg-red border border-2 border-yellow bg-maroon w-fit"
        >
          <div class="text-white font-bold">
            Kindly Select Emergency type Needed after
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray dark:border-gray"
        >
          <button
            @click="$emit('dangerDetails', emitValues())"
            type="button"
            class="shadow hover:text-white w-44 hover:bg-primaryYellow focus:ring-4 focus:ring-yellow transition ease-in-out border border-1 border-primaryYellow font-medium rounded-full text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Request
          </button>
          <button
            @click="$emit('closeDialog', true)"
            type="button"
            class="bg-white transition ease-in-out shadow w-44 hover:bg-red hover:text-white focus:ring-4 focus:ring-red rounded-full border border-1 border-red text-sm font-medium px-5 py-1.5 mx-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
          >
            Cancel
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
