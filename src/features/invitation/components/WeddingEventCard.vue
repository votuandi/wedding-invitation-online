<template>
  <article class="w-full md:w-[300px] h-fit p-2 pb-5 bg-white/80 rounded-lg drop-shadow-lg flex flex-col justify-start items-center mb-4">
    <img class="w-full h-auto rounded-lg" :src="event.image" :width="event.width" :height="event.width" loading="lazy" decoding="async" :alt="event.title" />
    <div class="w-full flex flex-col text-center my-4">
      <h3 class="event-time font-medium text-4xl mb-5 text-rose-600">{{ event.title }}</h3>
      <p class="event-invite font-semibold text-lg mb-[2px] text-gray-700">{{ event.time }}</p>
      <p class="event-invite text-lg font-extralight">{{ event.location }}</p>
    </div>
    <div class="w-full flex flex-col text-center justify-center items-center">
      <button class="bg-transparent w-[200px] text-orange-600 font-semibold py-3 px-4 border border-orange-300 rounded cursor-not-allowed" type="button" disabled :aria-label="`Thêm ${event.title} vào lịch (chưa khả dụng)`">Thêm vào lịch</button>
      <a class="bg-rose-500 w-[200px] hover:bg-rose-700 text-white font-bold py-3 px-4 border border-rose-700 rounded mt-2" :href="event.mapUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Xem bản đồ ${event.title} (mở trong tab mới)`">Xem bản đồ</a>
    </div>
  </article>
</template>

<script>
export default { name: "WeddingEventCard", props: { event: { type: Object, required: true } } };
</script>
