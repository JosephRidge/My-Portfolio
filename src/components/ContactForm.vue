<template>
  <div class="h-screen w-screen my-10">
    <img
      src="../assets/ContactMe.svg"
      class="mx-auto my-3"
      alt="Contact me Page"
    />
    <div class="capitalize font-roboto my-10 text-3xl font-light text-center">
      reach out and let’s make great things happen.
    </div>
    <div class="w-1/2 mx-auto p-2">
      <div
        class="flex flex-col h-auto my-auto mx-auto p-4 rounded-lg border-2 border-primaryBlue"
      >
       <div class="my-3">
          <span class="font-light font-roboto text-lg mx-1"
            >Full Names :
          </span>
          <input
            v-model="userName"
            type="text"
            id="username"
            class="username w-full bg-gray-200 m-1 p-2 rounded appearance-none border-2 focus:outline-none focus:bg-white"
            placeholder="email / phone number"
          />
        </div>
        <div class="my-3">
          <span class="font-light font-roboto text-lg mx-1"
            >Email / Phone Number :
          </span>
          <input
            v-model="contact"
            type="text"
            id="contact"
            class="contact w-full bg-gray-200 m-1 p-2 rounded appearance-none border-2 focus:outline-none focus:bg-white"
            placeholder="email / phone number"
          />
        </div>
        <div class="my-3">
          <span class="my-auto font-light font-roboto text-lg mx-1">
            Message :
          </span>

          <textarea
            v-model="message"
            id="message"
            type="text"
            class="message font-nunito focus:outline-none focus:bg-white w-full m-1 p-2 rounded bg-gray-200 appearance-none border-2"
            placeholder="message"
          />
        </div>
        <button
          @click="pushMessage()"
          class="my-auto mx-auto w-1/2 bg-black text-white rounded w-min py-1 px-10 right-0 bottom-0 hover:shadow-xl transition hover:scale-110 capitalize"
        >
          send
        </button>
      </div>
      <div class="flex my-10 mx-auto w-1/2">
        <div>
          <a :href="github" target="_blank"
            ><img
              src="../assets/Github.svg"
              class="ml-16 w-10"
              alt="My Work logo"
              srcset=""
              loading="lazy"
          /></a>
        </div>
        <div>
          <a :href="linkedin" target="_blank"
            ><img
              src="../assets/linkedin.svg"
              class="w-10 mx-10"
              alt="My Work logo"
              srcset=""
              loading="lazy"
          /></a>
        </div>
        <div>
          <a :href="twitter" target="_blank">
            <img
              src="../assets/twitter.svg"
              class="w-12 my-auto"
              alt="My Work logo"
              srcset=""
              loading="lazy"
          /></a>
        </div>
      </div>
    </div>
    <marquee
      class="bottom-0 py-4 font-nunito w-full bg-primaryBlue hover:text-white transition ease-in-out text-lg"
      behavior=" "
      direction="right"
    >
      <div class="flex">
        <img
          src="../assets/Logo.svg"
          class="w-10"
          alt="My Work logo"
          srcset=""
          loading="lazy"
        /> 
         <div class="mx-3 my-auto capitalize">It is Through silence, that I am able to listen and 
           learn more from others... Thank you for taking your time to view my profile, I appreciate you.</div>
        </div> 
       </marquee> 
  </div>
</template>

<script>
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import defaultMixins from "../mixins/defaultMixins";

export default {
  mixins: [defaultMixins],
  methods: {
    pushMessage() {
      let contact = this.contact;
      let contactDOM = document.getElementById("contact");
      let message = this.message;
      let messageDOM = document.getElementById("message");
      let userName = this.userName;
      let userNameDOM = document.getElementById("username")
      const firebaseConfig = {
        apiKey: this.apiKey,
        authDomain: this.authDomain,
        databaseURL: this.databaseURL,
        projectId: this.projectId,
        storageBucket: this.storageBucket,
        messagingSenderId: this.messagingSenderId,
        appId: this.appId,
        measurementId: this.measurementId,
      };
      // initializeApp(firebaseConfig);
      const db = getDatabase();
      const dbRef = ref(db, "messages");
      push(dbRef, {
        name:userName,
        contact: contact,
        message: message,
      });
      contactDOM.value = "";
      messageDOM.value = "";
      userNameDOM.value = "";
    },
  },
};
</script>

<style></style>
