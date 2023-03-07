<template>
  <div>
    <div
      class="bg-yellow-50 flex flex-col lg:flex-row py-20 px-3 justify-center content-center"
    >
      <div
        class="relative items-center flex h-full justify-center max-w-[600px] w-full shadow-[0_5px_20px_rgba(0,0,0,0.3)] mx-auto my-0 p-4 md:p-6 bg-white mb-8 lg:mb-0"
      >
        <img
          class="absolute w-[300px] h-[381px] bottom-[-50px] -left-40 -top-20"
          src="@/assets/img/pattern/invitation-left-img.png"
        />
        <div
          class="save-the-date text-center bg-[#fff3e015] rounded h-fit lg:h-[540px] transition-[0.9s] w-full border-4 border-solid border-[#644d4d] flex items-center"
        >
          <div class="flex flex-col items-center justify-evenly p-5 h-[360px]">
            <p class="save-the-day-text1 text-[40px]">Save the Date</p>
            <p class="save-the-day-text2 text-[18px] lg:text-[16px] font-thin">
              For the wedding of
            </p>
            <p
              class="save-the-day-text2 text-[24px] lg:text-[28px] font-semibold"
            >
              Tuấn Dĩ & Tuyết Minh
            </p>
            <span
              class="save-the-day-text2 text-[12px] lg:text-[16px] font-light mb-5"
              >Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi
              có thêm một niềm hạnh phúc!</span
            >
            <button
              class="bg-[#b38888] flex flex-row items-center justify-center w-40 h-12"
            >
              <span class="text-white mr-2 text-base font-bold"
                >Gửi lời chúc</span
              >
              <img
                class="w-5 h-5 btn-white"
                src="@/assets/icons/arrow-right-alt-svgrepo-com.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <CalendarCustomize />
    </div>
  </div>
</template>

<script>
import CalendarCustomize from "@/components/CalendarCustomize";
export default {
  name: "SaveTheDay",
  components: {
    CalendarCustomize,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Great+Vibes&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

.save-the-date {
  @media (max-width: 1000px) {
    width: 80vw;
  }
}

.btn-white {
  filter: invert(100%) sepia(1%) saturate(1712%) hue-rotate(327deg)
    brightness(120%) contrast(100%);
}

.save-the-day-text1 {
  font-family: "Great Vibes", cursive;
}

.save-the-day-text2 {
  font-family: "Comfortaa", cursive;
}
</style>