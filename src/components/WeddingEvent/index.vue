<template>
  <div
    class="bg-event w-screen h-fit px-3 py-[110px] flex flex-col justify-center items-center"
  >
    <div class="flex flex-col items-center text-center">
      <p class="event-title text-[48px]">Lễ cưới</p>
      <p class="event-invite text-base font-light mt-1 text-gray-500 mb-6">
        Được sự cho phép của hai gia đình,<br />
        Lễ cưới của (con em) chúng tôi sẽ được tổ chức theo cách móc thời gian
        sau.<br />
        Kính mời quý quan khách đến chung vui cùng gia đình chúng tôi.
      </p>
    </div>
    <div
      class="w-full h-fit p-2 pb-5 bg-white/80 rounded-lg drop-shadow-lg flex flex-col justify-start items-center mb-4"
    >
      <img
        class="w-full h-auto rounded-lg"
        src="@/assets/img/event/le-cuoi-nha-gai.png"
      />
      <div class="w-full flex flex-col text-center my-4">
        <p class="event-time font-medium text-4xl mb-5 text-rose-600">
          Lễ cưới nhà nữ
        </p>
        <p class="event-invite font-semibold text-lg mb-[2px] text-gray-700">
          8 giờ 00 ngày 29-30/04/2023
        </p>
        <p class="event-invite text-lg font-extralight">Tư gia nhà nữ</p>
      </div>
      <div class="w-full flex flex-col text-center justify-center items-center">
        <button
          class="bg-transparent w-[200px] hover:bg-orange-300 text-orange-600 font-semibold hover:text-white py-3 px-4 border border-orange-300 hover:bord6r-transparent rounded"
        >
          Thêm vào lịch
        </button>
        <button
          class="bg-rose-500 w-[200px] hover:bg-rose-700 text-white font-bold py-3 px-4 border border-rose-700 rounded mt-2"
        >
          Xem bản đồ
        </button>
      </div>
    </div>

    <div
      class="w-full h-fit p-2 pb-5 bg-white/80 rounded-lg drop-shadow-lg flex flex-col justify-start items-center mb-4"
    >
      <img
        class="w-full h-auto rounded-lg"
        src="@/assets/img/event/dinner-1.png"
      />
      <div class="w-full flex flex-col text-center my-4">
        <p class="event-time font-medium text-4xl mb-5 text-rose-600">
          Tiệc rượu nhà gái
        </p>
        <p class="event-invite font-semibold text-lg mb-[2px] text-gray-700">
          9 giờ 00 ngày 29/04/2023
        </p>
        <p class="event-invite text-lg font-extralight">Tư gia nhà gái</p>
      </div>
      <div class="w-full flex flex-col text-center justify-center items-center">
        <button
          class="bg-transparent w-[200px] hover:bg-orange-300 text-orange-600 font-semibold hover:text-white py-3 px-4 border border-orange-300 hover:bord6r-transparent rounded"
        >
          Thêm vào lịch
        </button>
        <button
          class="bg-rose-500 w-[200px] hover:bg-rose-700 text-white font-bold py-3 px-4 border border-rose-700 rounded mt-2"
        >
          Xem bản đồ
        </button>
      </div>
    </div>

    <div
      class="w-full h-fit p-2 pb-5 bg-white/80 rounded-lg drop-shadow-lg flex flex-col justify-start items-center mb-4"
    >
      <img
        class="w-full h-auto rounded-lg"
        src="@/assets/img/event/le-cuoi-nha-trai.png"
      />
      <div class="w-full flex flex-col text-center my-4">
        <p class="event-time font-medium text-4xl mb-5 text-rose-600">
          Lễ cưới nhà trai
        </p>
        <p class="event-invite font-semibold text-lg mb-[2px] text-gray-700">
          9 giờ 00 ngày 30/04/2023
        </p>
        <p class="event-invite text-lg font-extralight">Tư gia nhà trai</p>
      </div>
      <div class="w-full flex flex-col text-center justify-center items-center">
        <button
          class="bg-transparent w-[200px] hover:bg-orange-300 text-orange-600 font-semibold hover:text-white py-3 px-4 border border-orange-300 hover:bord6r-transparent rounded"
        >
          Thêm vào lịch
        </button>
        <button
          class="bg-rose-500 w-[200px] hover:bg-rose-700 text-white font-bold py-3 px-4 border border-rose-700 rounded mt-2"
        >
          Xem bản đồ
        </button>
      </div>
    </div>

    <div
      class="w-full h-fit p-2 pb-5 bg-white/80 rounded-lg drop-shadow-lg flex flex-col justify-start items-center"
    >
      <img
        class="w-full h-auto rounded-lg"
        src="@/assets/img/event/dinner-2.png"
      />
      <div class="w-full flex flex-col text-center my-4">
        <p class="event-time font-medium text-4xl mb-5 text-rose-600">
          Tiệc rượu nhà trai
        </p>
        <p class="event-invite font-semibold text-lg mb-[2px] text-gray-700">
          10 giờ 00 ngày 29/04/2023
        </p>
        <p class="event-invite text-lg font-extralight">Tư gia nhà nữ</p>
      </div>
      <div class="w-full flex flex-col text-center justify-center items-center">
        <button
          class="bg-transparent w-[200px] hover:bg-orange-300 text-orange-600 font-semibold hover:text-white py-3 px-4 border border-orange-300 hover:bord6r-transparent rounded"
        >
          Thêm vào lịch
        </button>
        <button
          class="bg-rose-500 w-[200px] hover:bg-rose-700 text-white font-bold py-3 px-4 border border-rose-700 rounded mt-2"
        >
          Xem bản đồ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeddingEvent",
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "animate.css";
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.event-title {
  font-family: "Great Vibes", cursive;
}
.event-invite {
  font-family: "Comfortaa", cursive;
}
.event-time {
  font-family: "Dancing Script", cursive;
}
.bg-event {
  background-image: url("@/assets/img/event/bg-event.png");
}
</style>