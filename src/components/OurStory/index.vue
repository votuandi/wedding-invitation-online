<template>
  \
  <div class="flex flex-col w-full py-10 items-center">
    <div class="flex flex-col items-center justify-start px-10 mb-10">
      <img class="w-[126px]" src="@/assets/img/pattern/sec-title-flower.png" />
      <p class="story-intro text-[24px] font-semibold">
        Câu chuyện tình yêu của chúng tôi
      </p>
      <span class="font-light text-center text-lg"
        >Tình yêu là điều kiện trong đó hạnh phúc của người kia là điều cần
        thiết cho chính bạn.</span
      >
    </div>
    <div>
      <div
        class="img-children relative flex flex-row justify-center h-[600px] items-end pb-5"
        ref="story_0"
      >
        <img
          v-if="animations[0]"
          class="h-[500px] w-auto animate__animated animate__bounceInDown"
          src="@/assets/img/story/chu-re-luc-nho.png"
        />
        <img
          v-if="animations[0]"
          class="h-[450px] mb-5 w-auto animate__animated animate__bounceInDown"
          src="@/assets/img/story/co-dau-luc-nho.png"
        />
        <img
          v-if="animations[0]"
          class="w-screen md:w-[700px] absolute bottom-0 mx-0 my-auto -z-10 animate__animated animate__rotateInUpLeft"
          src="@/assets/img/story/bg-sen.png"
        />
        <img
          v-if="animations[0]"
          class="absolute -z-10 w-[200px] top-0 right-5 md:right-[35vw] animate__animated animate__slideInRight"
          src="@/assets/img/story/pt-birds.png"
        />
        <img
          v-if="animations[0]"
          class="absolute -z-10 w-[100px] top-0 left-5 md:left-[35vw] animate__animated animate__slideInLeft"
          src="@/assets/img/story/pt-sun.png"
        />
      </div>
      <div
        class="px-10 my-14 animate__animated animate__fadeInDown"
        v-if="animations[0]"
      >
        <p class="font-light text-center text-lg">
          Cả 2 sinh ra và lớn lên tại vùng đất<br />
          sen hồng Đồng Tháp
        </p>
      </div>

      <div
        class="img-children relative justify-center h-[320px] w-screen md:w-[600px] items-end pb-5 self-center"
        ref="story_1"
      >
        <div
          class="flex flex-row absolute w-screen md:w-[600px] justify-between px-3"
        >
          <img
            v-if="animations[1]"
            class="h-[280px] w-auto animate__animated animate__fadeInLeftBig"
            src="@/assets/img/story/pt-story-2vk.png"
          />
          <img
            v-if="animations[1]"
            class="h-[280px] w-auto animate__animated animate__fadeInRightBig"
            src="@/assets/img/story/pt-story-2ck.png"
          />
        </div>
      </div>
      <div
        class="px-10 mt-5 mb-14 animate__animated animate__fadeInDown"
        v-if="animations[1]"
      >
        <p class="font-light text-center text-lg">
          Mọi thứ bắt đầu từ 1 tin nhắn đầu năm 2015. <br />
          Tuy chưa gặp mặt lần nào, nhưng 2 đứa vẫn giữ liên lạc suốt 7 năm
        </p>
      </div>

      <div
        class="img-children relative justify-center h-[600px] w-screen md:w-[600px] items-end pb-5 self-center"
        ref="story_2"
      >
        <div
          class="flex flex-row absolute bottom-[280px] w-screen md:w-[600px] justify-between"
        >
          <img
            v-if="animations[2]"
            class="w-[220px] h-auto -z-10 animate__animated animate__fadeInLeftBig"
            src="@/assets/img/story/pt-boy.png"
          />
          <img
            v-if="animations[2]"
            class="w-[220px] h-auto -z-10 animate__animated animate__fadeInRightBig"
            src="@/assets/img/story/pt-girl.png"
          />
        </div>
        <img
          v-if="animations[2]"
          class="h-[300px] absolute bottom-0 mx-0 my-auto animate__animated animate__bounceInUp"
          src="@/assets/img/story/pt-table.png"
        />
        <div
          class="absolute bottom-[200px] z-10 mx-0 my-auto w-screen md:w-[600px] flex justify-center"
        >
          <img
            v-if="animations[2]"
            class="h-[150px] animate__animated animate__bounceInDown"
            src="@/assets/img/story/pt-bunbo.png"
          />
        </div>
      </div>
      <div
        class="px-10 mt-5 mb-14 animate__animated animate__fadeInDown"
        v-if="animations[2]"
      >
        <p class="font-light text-center text-lg">
          2 đứa gặp nhau lần đầu vào ngày 8/9/2019<br />
          Món ăn đầu tiên cùng nhau là Bún bò
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurStory",
  mounted() {
    window.addEventListener("scroll", this.updateScaroll);
  },
  data() {
    return {
      lastScrollY: 0,
      animations: [false, false, false],
    };
  },
  methods: {
    updateScaroll() {
      console.log("---------");
      console.log(window.innerHeight);
      const scrollPosition = window.scrollY;
      if (
        this.$refs.story_0.getBoundingClientRect().top +
          this.$refs.story_0.getBoundingClientRect().height <
          window.innerHeight &&
        scrollPosition - this.lastScrollY > 0
      ) {
        this.animations[0] = true;
      } else if (
        this.$refs.story_0.getBoundingClientRect().top > window.innerHeight
      ) {
        this.animations[0] = false;
      }

      if (
        this.$refs.story_1.getBoundingClientRect().top +
          this.$refs.story_1.getBoundingClientRect().height <
          window.innerHeight &&
        scrollPosition - this.lastScrollY > 0
      ) {
        console.log(
          this.$refs.story_1.getBoundingClientRect().top +
            this.$refs.story_1.getBoundingClientRect().height
        );
        this.animations[1] = true;
      } else if (
        this.$refs.story_1.getBoundingClientRect().top > window.innerHeight
      ) {
        this.animations[1] = false;
      }

      if (
        this.$refs.story_2.getBoundingClientRect().top +
          this.$refs.story_2.getBoundingClientRect().height <
          window.innerHeight &&
        scrollPosition - this.lastScrollY > 0
      ) {
        console.log(
          this.$refs.story_2.getBoundingClientRect().top +
            this.$refs.story_2.getBoundingClientRect().height
        );
        this.animations[2] = true;
      } else if (
        this.$refs.story_2.getBoundingClientRect().top > window.innerHeight
      ) {
        this.animations[2] = false;
      }
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "animate.css";
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.story-intro {
  font-family: "Dancing Script", cursive;
}
</style>