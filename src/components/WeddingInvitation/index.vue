<template>
  <div class="relative">
    <MainTitle />
    <NavigationBar @rollTo="rollTo" />
    <SpliderCustomer id="0" />
    <SaveTheDay id="1" @rollTo="rollTo(5)" />
    <OurStory id="2" />
    <WeddingEvent id="3" />
    <OurAlbum id="4" />
    <Congratulation id="5" />
    <TheEnd />
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
import Congratulation from "@/components/Congratulation";
import TheEnd from "@/components/TheEnd";
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
    Congratulation,
    TheEnd,
  },
  methods: {
    rollTo(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style scoped>
</style>