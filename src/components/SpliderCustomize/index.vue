<template>
  <div class="relative">
    <splide class="splider bg-yellow-500" :options="options">
      <splide-slide v-for="(photoPath, ind) in getListPhotoPaths()" :key="ind">
        <img class="image-scale" :src="photoPath" alt="" />
      </splide-slide>
    </splide>
    <div class="text-over-silde">
      <div class="flex flex-col justify-center content-center">
        <CoupleName class="zoom" />
        <span>{{ date }}</span>
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
.image-scale {
  height: 80vh;
  width: 100vw;
  object-fit: cover;
}
.text-over-silde {
  position: absolute;
  display: flex;
  height: 80vh;
  width: 100vw;
  top: 0%;
  left: 0%;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.silder-customer {
  position: relative;
}

.text-over-silde span {
  color: #fff;
  text-shadow: 1.5px 1.5px 2px rgb(0 0 0 / 60%);
}

.zoom {
  zoom: 200%;
}

.zoom p,
i {
  color: #fff;
  text-shadow: 1.5px 1.5px 2px rgb(0 0 0 / 60%);
}
</style>