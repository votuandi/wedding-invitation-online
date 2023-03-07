<template>
  <div class="ten-dau-re flex flex-row items-center justify-center">
    <p class="font-[normal] text-base lg:text-3xl">{{ groom }}</p>
    <i
      class="ti-heart text-rose-400 box-border leading-none font-normal text-base lg:text-2xl iheart mx-px"
    />
    <p class="font-[normal] text-base lg:text-3xl">{{ bride }}</p>
  </div>
</template>

<script>
export default {
  name: "CoupleName",
  data() {
    return {
      bride: "Tuyết Minh",
      groom: "Tuấn Dĩ",
    };
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.ten-dau-re p {
  font-family: "Dancing Script", cursive;
}
.ten-dau-re .iheart {
  margin: 0.52em 0.5rem 0.5em 0.5rem;
  /* font-size: 1.5rem; */
}
</style>