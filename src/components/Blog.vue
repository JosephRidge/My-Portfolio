<template>
  <div class="h-screen w-screen flex flex-col" loading="lazy">
    <div class="h-64 bg-darkGray image">
      <!-- my title -->
      <div class="flex flex-row">
        <img
          src="src/assets/Logo.svg"
          class="my-14 ml-14 h-44"
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
    <!-- <AsyncBlogItems/> -->
    <!-- Blogs Start -->
    <div class="grid grid-cols-3 mb-16 mx-16 justify-center">
      <div
        v-for="item in blogs"
        :key="item.id"
        loading="lazy"
        class="blog border-2 rounded-xl shadow m-10 p-4 flex flex-col shadow-xl transition eas-in-out duration-500"
      >
        <div class="flex flex-row" 
              loading="lazy"> 
          <img
            :src="images[Math.floor(Math.random() * (6 - 0 + 1) + 0)]"
            alt="type writer image"
            class="magniflier h-24 w-28 rounded-full bg-cover bg-cent my-auto"
            srcset="Photo by Markus Winkler: https://www.pexels.com/photo/close-up-shot-of-a-typewriter-4160066/"
            loading="lazy"
          />
          <div class="flex flex-col">
            <div
              class="font-nunito text-left text-lg text-darkGray font-roboto font-regular mx-6"
            >
              {{ item.name }}
            </div>
            <div
              class="font-nunito text-left text-sm text-secondaryLightGray font-light font-nunito mx-6 mb-2"
            >
              {{ item.description }}
            </div>
          </div>
        </div>
        <a :href="item.link" target="_blank" draggable=" ">
          <div
            class="flex py-1 bg-darkGray rounded-full px-3 text-white font-nunito text-center w-max mx-auto hover:cursor-pointer font-bold hover:translate-x-1 hover:shadow-xl transition ease-in-out"
          >
            <span class="my-auto mx-2 text-sm 0">Read</span>
            <img
              src="src/assets/read_more.svg"
              class="image my-auto mr-2 left-0 w-6"
              alt=""
              srcset=""
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </div>
   <!-- Blogs End -->
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import aboutmeMixins from "../mixins/aboutmeMixins";
import firebaseMixins from "../mixins/firebaseMixins";
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import { defineAsyncComponent } from "vue"; 

const AsyncBlogItems = defineAsyncComponent(()=> import("./BlogItems.vue")) 

export default {
  mixins: [aboutmeMixins, firebaseMixins],
  components: {
    NavigationBar,
   AsyncBlogItems
  },
  data: {
    blogs: [],
    images: [
      "src/assets/art_3.jpg", 
      "src/assets/art_2.jpg",
      "src/assets/art.jpg",
      "src/assets/oranges.jpg",
      "src/assets/book_on_face.jpg",
      "src/assets/spiral.jpg",
      "src/assets/idea.jpg",
    ],
  },
  methods: {
    fetchBlogs(ref) {
      onValue(
        ref,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            let blog = {
              name: childData.name,
              link: childData.link,
              description: childData.description,
            };
            console.log(" == > ", blog);
            this.blogs.push(blog);
          });
        },
        {
          onlyOnce: true,
        }
      );
    },

    _animate() {
      /*    Animation    */  
      const blogs  = document.querySelector(".blog");     
   const images  = document.querySelector(".image"); 
      const t1 = new TimelineMax(); 
      t1.fromTo(blogs,2, {opacity:"0"}, {opacity:"1", ease:Power2.easeInOut} )
        t1.fromTo(images,1, {opacity:"0"}, {opacity:"1", ease:Power2.easeInOut} )

    },
  },
  mounted() {
    // Initialize Firebase
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
    initializeApp(firebaseConfig);
    const db = getDatabase();
    const dbRef = ref(db, "blogs");
    this.fetchBlogs(dbRef);
    this._animate()
  },
};
</script>

<style></style>
