<template>
  <header
    class="content-center bg-white py-8 main-title flex flex-col items-center"
  >
    <div>
      <CoupleName class="couple-name" />
    </div>
    <span class="text-xs">Just Married</span>
  </header>
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
.main-title {
  height: fit-content;
}
.main-title span {
  font-family: "Comfortaa", cursive;
}
.couple-name {
  zoom: 175%;
}
</style>
