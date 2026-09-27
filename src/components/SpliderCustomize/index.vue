<template>
  <div class="relative">
    <splide class="splider" :options="options">
      <splide-slide v-for="(photo, index) in photos" :key="photo.name">
        <img
          class="image-scale h-[100vh] w-auto md:w-[100vw] md:h-auto"
          :src="index === 0 ? photo.medium : undefined"
          :data-splide-lazy="index === 0 ? undefined : photo.medium"
          :data-splide-lazy-srcset="`${photo.small} 640w, ${photo.medium} 960w`"
          sizes="100vw"
          :width="photo.width"
          :height="photo.height"
          :fetchpriority="index === 0 ? 'high' : undefined"
          decoding="async"
          alt=""
        />
      </splide-slide>
    </splide>
    <div class="absolute flex h-[100vh] w-screen items-center justify-center z-[1] left-[0%] top-[0%]">
      <div class="flex flex-col justify-center items-center">
        <CoupleName class="zoom" />
        <span class="text-over-silde">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import CoupleName from "@/components/CoupleName";

const desktopPhotos = [
  { name: "IMG211", small: require("@/assets/optimized/top-splide-photos/IMG211-640.webp"), medium: require("@/assets/optimized/top-splide-photos/IMG211-960.webp"), width: 1620, height: 911 },
  { name: "IMG388", small: require("@/assets/optimized/top-splide-photos/IMG388-640.webp"), medium: require("@/assets/optimized/top-splide-photos/IMG388-960.webp"), width: 1620, height: 912 },
  { name: "IMG532", small: require("@/assets/optimized/top-splide-photos/IMG532-640.webp"), medium: require("@/assets/optimized/top-splide-photos/IMG532-960.webp"), width: 1620, height: 911 },
  { name: "IMG890", small: require("@/assets/optimized/top-splide-photos/IMG890-640.webp"), medium: require("@/assets/optimized/top-splide-photos/IMG890-960.webp"), width: 1620, height: 911 },
];
const mobilePhotos = [
  { name: "mb65", small: require("@/assets/optimized/top-splide-photos/mb65-640.webp"), medium: require("@/assets/optimized/top-splide-photos/mb65-960.webp"), width: 1080, height: 1620 },
  { name: "mb926", small: require("@/assets/optimized/top-splide-photos/mb926-640.webp"), medium: require("@/assets/optimized/top-splide-photos/mb926-960.webp"), width: 1080, height: 1620 },
  { name: "mb409", small: require("@/assets/optimized/top-splide-photos/mb409-640.webp"), medium: require("@/assets/optimized/top-splide-photos/mb409-960.webp"), width: 1080, height: 1620 },
  { name: "mb730", small: require("@/assets/optimized/top-splide-photos/mb730-640.webp"), medium: require("@/assets/optimized/top-splide-photos/mb730-960.webp"), width: 1080, height: 1620 },
];

export default {
  name: "SpliderCustomize",
  components: { Splide, SplideSlide, CoupleName },
  data() {
    return {
      date: "___    30 April 2023    ___",
      photos: window.innerWidth < 600 ? mobilePhotos : desktopPhotos,
      options: { type: "loop", width: "100vw", gap: "1rem", autoplay: true, arrows: false, paginationDirection: "ttb", padding: 0, lazyLoad: "nearby", preloadPages: 1 },
    };
  },
};
</script>

<style>
.image-scale { object-fit: cover; }
.silder-customer { position: relative; }
.text-over-silde { color: #fff; text-shadow: 1.5px 1.5px 2px rgb(0 0 0 / 60%); }
.zoom { zoom: 200%; }
.zoom p, i { font-weight: 800; color: #fff; text-shadow: 1.5px 1.5px 2px rgb(0 0 0 / 60%); }
</style>
