<template>
  <div class="content-center bg-white py-8 main-title">
    <CoupleName />
    <span class="text-xs">Just Married</span>
  </div>
</template>

<script>
import CoupleName from "@/components/CoupleName";
export default {
  name: "MainTitle",
  components: {
    CoupleName,
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Dancing+Script&display=swap");
.main-title {
  height: 140px;
}
.main-title span {
  font-family: "Comfortaa", cursive;
}
</style>