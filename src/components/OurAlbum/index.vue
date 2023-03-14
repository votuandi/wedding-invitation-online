<template>
  <div class="w-screen h-fit px-2 py-5 bg-white">
    <img
      v-for="(filename, ind) in imageFilenames"
      :src="getFilePath(filename)"
      :key="ind"
      class="w-full mb-2"
    />
  </div>
</template>

<script>
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

export default {
  name: "OurAlbum",
  components: {
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      imageFilenames: [
        "album107.jpg",
        "album124.jpg",
        "album148.jpg",
        "album163.jpg",
        "album169.jpg",
        "album211.jpg",
        "album218.jpg",
        "album240.jpg",
        "album272.jpg",
        "album297.jpg",
        "album346.jpg",
        "album391.jpg",
        "album409.jpg",
        "album417.jpg",
        "album434.jpg",
        "album470.jpg",
        "album495.jpg",
        "album50.jpg",
        "album501.jpg",
        "album513.jpg",
        "album516.jpg",
        "album533.jpg",
        "album557.jpg",
        "album578.jpg",
        "album636.jpg",
        "album641.jpg",
        "album65.jpg",
        "album677.jpg",
        "album730.jpg",
        "album741.jpg",
        "album746.jpg",
        "album751.jpg",
        "album760.jpg",
        "album778.jpg",
        "album812.jpg",
        "album819.jpg",
        "album825.jpg",
        "album84.jpg",
        "album847.jpg",
        "album867.jpg",
        "album871.jpg",
        "album880.jpg",
        "album883.jpg",
        "album889.jpg",
        "album891.jpg",
        "album903.jpg",
        "album913.jpg",
        "album926.jpg",
        "album936.jpg",
        "album938.jpg",
      ],
    };
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
  methods: {
    getFilePath(filename) {
      return require(`@/assets/img/album/${filename}`);
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
.swiper {
  width: 320px;
  height: auto;
}

.swiper-slide {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: white;
}
</style>