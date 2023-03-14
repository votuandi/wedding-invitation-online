<template>
  <div class="relative">
    <MainTitle />
    <NavigationBar />
    <SpliderCustomer />
    <SaveTheDay />
    <OurStory />
    <WeddingEvent />
    <OurAlbum />
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle";
import NavigationBar from "@/components/NavigationBar";
import SpliderCustomer from "@/components/SpliderCustomize";
import SaveTheDay from "@/components/SaveTheDay";
import OurStory from "@/components/OurStory";
import WeddingEvent from "@/components/WeddingEvent";
import OurAlbum from "@/components/OurAlbum";
export default {
  name: "WeddingInvitation",
  components: {
    MainTitle,
    NavigationBar,
    SpliderCustomer,
    SaveTheDay,
    OurStory,
    WeddingEvent,
    OurAlbum,
  },
};
</script>

<style scoped>
</style>