<template>
  <WeddingInvitation />
</template>

<script>
import WeddingInvitation from "@/components/WeddingInvitation";
export default {
  name: "App",
  components: {
    WeddingInvitation,
  },
  mounted() {
    document.title = "Tuấn Dĩ ❤️ Tuyết Minh";
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
