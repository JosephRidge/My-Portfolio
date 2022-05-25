<template>
  <div class="h-screen w-screen flex flex-col my-auto" loading="lazy"> 
    <!-- Blogs Start -->
    <div class="grid grid-cols-3 mb-16 mx-16 justify-center">
      <div
        v-for="item in blogs"
        :key="item.id"
        loading="lazy"
        class="border-2 rounded-xl shadow m-10 p-4 flex flex-col shadow-xl"
      >
        <div class="flex flex-row">
          <!-- src="src/assets/articles.jpg" -->
          <img
            :src="images[Math.floor(Math.random() * (6 - 0 + 1) + 0)]"
            alt="type writer image"
            class="magniflier h-24 w-28 rounded-full bg-cover bg-cent my-auto"
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
              src="../assets/read_more.svg"
              class="my-auto mr-2 left-0 w-6"
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
import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

export default { 
  components: { 
  },
  data: {
    blogs: [],
    images: [
      "assets/art_3.jpg",
      "art_4.jpg",
      "/src/assets/art_2.jpg",
      "../src/assets/oranges.jpg",
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
  },
};
</script>

<style></style>
