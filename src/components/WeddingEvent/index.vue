<template>
  <section class="bg-event w-screen h-fit px-3 py-[110px] flex flex-col justify-center items-center" aria-labelledby="events-heading">
    <div class="flex flex-col items-center text-center">
      <h2 id="events-heading" class="event-title text-[48px]">Lễ cưới</h2>
      <p class="event-invite text-base font-light mt-1 text-gray-500 mb-6">
        Được sự cho phép của hai gia đình,<br />
        Lễ cưới của (con em) chúng tôi sẽ được tổ chức theo các mốc thời gian sau.<br />
        Kính mời quý quan khách đến chung vui cùng gia đình chúng tôi.
      </p>
    </div>
    <div v-for="(eventRow, index) in eventRows" :key="index" class="w-full md:w-[640px] flex flex-row flex-wrap items-center justify-between">
      <WeddingEventCard v-for="event in eventRow" :key="event.id" :event="event" />
    </div>
  </section>
</template>

<script>
import WeddingEventCard from "@/features/invitation/components/WeddingEventCard";
import { weddingEvents } from "@/features/invitation/data/events";

export default {
  name: "WeddingEvent",
  components: { WeddingEventCard },
  data() { return { eventRows: [weddingEvents.slice(0, 2), weddingEvents.slice(2)] }; },
};
</script>

<style>
.event-title { font-family: "Great Vibes", cursive; }
.event-invite { font-family: "Comfortaa", cursive; }
.event-time { font-family: "Dancing Script", cursive; }
.bg-event { background-image: url("@/assets/optimized/event/bg-event.webp"); background-position: center; background-repeat: no-repeat; background-size: cover; }
</style>
