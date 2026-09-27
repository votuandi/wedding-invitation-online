<template>
  <WeddingInvitation />
</template>

<script>
import WeddingInvitation from "@/components/WeddingInvitation";
import { invitationConfig } from "@/features/invitation/data/invitationConfig";
export default {
  name: "App",
  components: {
    WeddingInvitation,
  },
  mounted() {
    document.title = invitationConfig.documentTitle;
  },
};
</script>
