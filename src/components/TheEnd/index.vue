<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="img-children relative justify-center h-fit py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col"
    >
      <div class="self-start p-6 animate__animated animate__pulse">
        <p class="font-bold text-3xl text-rose-300">Bật mí chuyện "Xin vía"</p>
        <p class="text-base font-light mt-1">
          Tháng 5/2021,<br />
          Chúng mình có tham dự tiệc cưới của một người bạn. Và...<br />
          Nàng đã bắt được hoa cưới và trao cho chàng ❤️
        </p>
      </div>
      <video
        ref="video_vx_ref"
        id="video-vx"
        controls="true"
        class="w-[320px] md:w-[640px] lg:w-[720px] h-auto self-center animate__animated animate__fadeInDown"
        src="@/assets/videos/bat-hoa.mp4"
      />
    </div>
    <div
      class="w-[100vw] h-[100vh] bg-white justify-center items-center flex flex-col"
    >
      <img
        class="w-[80vw] md:h-[60vh] md:w-auto mb-6 -mt-16"
        src="@/assets/img/avt.png"
      />
      <p class="thanks text-4xl lg:text-8xl text-center">
        Tuấn Dĩ & Tuyết Minh
      </p>
      <p class="thanks text-3xl lg:text-5xl text-center">
        Xin trân trọng cảm ơn
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheEnd",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

.thanks {
  font-family: "Great Vibes", cursive;
}
</style>