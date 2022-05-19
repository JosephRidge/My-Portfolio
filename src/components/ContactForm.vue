<template>
  <div class="h-screen w-screen">
    <img
      src="src/assets/ContactMe.svg"
      class="mx-auto my-3"
      alt="Contact me Page"
    />
    <div class="capitalize font-roboto my-4 text-3xl font-light text-center">
      reach out and let’s make great things happen.
    </div>
    <div class="flex flex-col w-1/2 h-1/4 bg-gray-100 my-auto mx-auto p-4">
  
        <div>
          <span>Email : </span> <input type="text" class="bg-gray-200  m-1 p-2 rounded appearance-none border-2 
          focus:bg-white focus:border-white" placeholder="email" />
        </div>
        <div>
          <span> Message : </span> <input type="text" class="  m-1 p-2 rounded bg-gray-200 appearance-none border-2 "  placeholder="message" />
        </div> 
      <button class="bg-black text-white rounded w-min py-1   px-5 right-0 bottom-0 
      hover:shadow-xl transition hover:-translate-y-1">send</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
