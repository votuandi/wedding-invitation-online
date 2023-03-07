<template>
  <div class="relative">
    <splide class="splider bg-yellow-500" :options="options">
      <splide-slide v-for="(photoPath, ind) in getListPhotoPaths()" :key="ind">
        <img class="image-scale" :src="photoPath" alt="" />
      </splide-slide>
    </splide>
    <div
      class="absolute flex h-[80vh] w-screen items-center justify-center z-[1] left-[0%] top-[0%]"
    >
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
export default {
  name: "SpliderCustomize",
  components: { Splide, SplideSlide, CoupleName },
  beforeMount() {
    console.log(this.photoNames);
  },
  data() {
    return {
      date: "___    30 April 2023    ___",
      photoNames: ["IMG388.jpg", "IMG532.jpg", "IMG890.jpg"],
      options: {
        rewind: true,
        width: "100vw",
        gap: "1rem",
        loop: true,
        autoplay: true,
        arrows: false,
        paginationDirection: "ttb",
        padding: 0,
        // role: "tab",
      },
    };
  },
  methods: {
    getListPhotoPaths() {
      let listPath = [];
      this.photoNames.forEach((photoName) => {
        let path = require(`@/assets/img/top-splide-photos/${photoName}`);
        listPath.push(path);
      });
      return listPath;
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
.image-scale {
  height: 80vh;
  width: 100vw;
  object-fit: cover;
}

.silder-customer {
  position: relative;
}

.text-over-silde {
  color: #fff;
  text-shadow: 1.5px 1.5px 2px rgb(0 0 0 / 60%);
}

.zoom {
  zoom: 200%;
}

.zoom p,
i {
  font-weight: 800;
  color: #fff;
  text-shadow: 1.5px 1.5px 2px rgb(0 0 0 / 60%);
}
</style>