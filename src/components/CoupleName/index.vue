<template>
  <div class="ten-dau-re flex flex-row items-center justify-center">
    <p class="font-[normal] text-base lg:text-3xl">{{ groom }}</p>
    <i
      class="ti-heart text-rose-400 box-border leading-none font-normal text-base lg:text-2xl iheart mx-px"
      aria-hidden="true"
    />
    <p class="font-[normal] text-base lg:text-3xl">{{ bride }}</p>
  </div>
</template>

<script>
import { invitationConfig } from "@/features/invitation/data/invitationConfig";

export default {
  name: "CoupleName",
  data() {
    return {
      bride: invitationConfig.bride,
      groom: invitationConfig.groom,
    };
  },
};
</script>

<style scoped>
.ten-dau-re p {
  font-family: "Dancing Script", cursive;
}
.ten-dau-re .iheart {
  margin: 0.52em 0.5rem 0.5em 0.5rem;
  /* font-size: 1.5rem; */
}
</style>
