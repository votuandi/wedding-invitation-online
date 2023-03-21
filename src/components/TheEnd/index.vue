<template>
  <div class="w-full flex flex-col items-center">
    
    <div
      class="w-[100vw] h-[100vh] bg-white justify-center items-center flex flex-col"
    >
      <img
        class="w-[80vw] md:h-[60vh] md:w-auto mb-6 -mt-16"
        src="@/assets/img/avt.png"
      />
      <p class="thanks text-4xl lg:text-8xl text-center">
        Tuấn Dĩ & Tuyết Minh
      </p>
      <p class="thanks text-3xl lg:text-5xl text-center">
        Xin trân trọng cảm ơn
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheEnd",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

.thanks {
  font-family: "Great Vibes", cursive;
}
</style>
