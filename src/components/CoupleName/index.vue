<template>
  <div class="ten-dau-re flex flex-row content-center justify-center">
    <p>{{ groom }}</p>
    <i
      class="
        ti-heart
        text-rose-400
        box-border
        leading-none
        font-normal
        text-2xl
        iheart
        mx-px
      "
    />
    <p>{{ bride }}</p>
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
.ten-dau-re {
  font-family: "Dancing Script", cursive;
}
.ten-dau-re p {
  font-weight: normal;
  font-size: 30px;
}
.ten-dau-re .iheart {
  margin: 0.52em 0.5rem 0.5em 0.5rem;
  /* font-size: 1.5rem; */
}
</style>