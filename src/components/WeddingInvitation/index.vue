<template>
  <div class="relative">
    <MainTitle />
    <NavigationBar />
    <SpliderCustomer />
    <CalendarCustomize />
  </div>
</template>

<script>
import MainTitle from "@/components/MainTitle";
import NavigationBar from "@/components/NavigationBar";
import SpliderCustomer from "@/components/SpliderCustomize";
import CalendarCustomize from "@/components/CalendarCustomize";
export default {
  name: "WeddingInvitation",
  components: {
    MainTitle,
    NavigationBar,
    SpliderCustomer,
    CalendarCustomize,
  },
};
</script>

<style scoped>
</style>