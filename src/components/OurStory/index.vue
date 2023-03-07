<template>
  \
  <div class="flex flex-col w-full py-10">
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
        class="img-children flex flex-row items-center justify-center h-[600px]"
        ref="story_1"
      >
        <img
          v-if="animations[0]"
          class="h-[500px] w-auto animate__animated animate__bounceInDown"
          src="@/assets/img/story/chu-re-luc-nho.png"
        />
        <img
          v-if="animations[0]"
          class="h-[440px] w-auto animate__animated animate__bounceInDown"
          src="@/assets/img/story/co-dau-luc-nho.png"
        />
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
      animations: [false],
    };
  },
  methods: {
    updateScaroll() {
      console.log(this.$refs.story_1.getBoundingClientRect());
      const scrollPosition = window.scrollY;
      if (
        this.$refs.story_1.getBoundingClientRect().top +
          this.$refs.story_1.getBoundingClientRect().height <
          window.innerHeight &&
        scrollPosition - this.lastScrollY > 0
      ) {
        this.animations[0] = true;
      } else if (
        this.$refs.story_1.getBoundingClientRect().top > window.innerHeight
      ) {
        this.animations[0] = false;
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