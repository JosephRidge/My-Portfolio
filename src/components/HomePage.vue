<template>
  <div class="bg-primary w-screen h-screen static">
    <!-- background -->
    <div class="transition duration-300 ease-in-out">

            <img
        src="src/assets/bgImage.png"
        class=" h-screen w-1/2 hover:bg-red-900"
        alt="image of Pencil and rubber on a green background"
        srcset=""
      /> 
      
      <!-- Center image + Name-->
      <div
        class="absolute w-fit  flex flex-col justify-center top-0 right-0 bottom-0 left-0"
      >
        <div class="flex justify-center
       p-2 hover:hidden   ">
          <img
            src="src/assets/Logo.svg"
            class="w-1/5"
            alt="Joseph Ridge logo"
            srcset=""
          />
        </div>
        <div class="flex justify-center ">
          <img
            src="src/assets/JayR.svg"
            class="w-1/5 pb-10 "
            alt="Joseph Ridge logo"
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
