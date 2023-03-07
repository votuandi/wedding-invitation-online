<template>
  <div class="relative">
    <MainTitle />
    <NavigationBar />
    <SpliderCustomer />
    <SaveTheDay />
    <OurStory />
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle";
import NavigationBar from "@/components/NavigationBar";
import SpliderCustomer from "@/components/SpliderCustomize";
import SaveTheDay from "@/components/SaveTheDay";
import OurStory from "@/components/OurStory";
export default {
  name: "WeddingInvitation",
  components: {
    MainTitle,
    NavigationBar,
    SpliderCustomer,
    SaveTheDay,
    OurStory,
  },
};
</script>

<style scoped>
</style>