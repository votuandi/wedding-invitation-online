<template>
  <div class="album w-screen h-fit px-2 py-5 bg-yellow-50 rounded-t-2xl -mt-3 flex flex-col items-center">
    <div class="flex flex-col items-center justify-start px-10 mb-10">
      <img class="w-[126px]" src="@/assets/optimized/pattern/sec-title-flower.webp" width="126" height="59" loading="lazy" decoding="async" alt="" />
      <p class="story-intro text-[24px] font-semibold">Album cưới</p>
      <span class="font-light text-center text-base text-cf">Mời cả nhà nhìn ngắm cô dâu và chú rể trước lễ cưới qua Album Pre-Wedding của chúng mình nhé!</span>
    </div>
    <div class="rounded-xl w-fit bg-white p-3 mb-2 shadow-lg self-center" v-for="image in images" :key="image.name">
      <img :src="image.medium" :srcset="`${image.small} 640w, ${image.medium} 960w`" sizes="(max-width: 767px) calc(100vw - 40px), 960px" :width="image.width" :height="image.height" class="w-full md:w-auto md:h-[80vh] rounded-xl" loading="lazy" decoding="async" :alt="`Ảnh cưới ${image.name}`" />
    </div>
  </div>
</template>

<script>
const album107 = { small: require("@/assets/optimized/album/album107-640.webp"), medium: require("@/assets/optimized/album/album107-960.webp") };
const album124 = { small: require("@/assets/optimized/album/album124-640.webp"), medium: require("@/assets/optimized/album/album124-960.webp") };
const album148 = { small: require("@/assets/optimized/album/album148-640.webp"), medium: require("@/assets/optimized/album/album148-960.webp") };
const album163 = { small: require("@/assets/optimized/album/album163-640.webp"), medium: require("@/assets/optimized/album/album163-960.webp") };
const album169 = { small: require("@/assets/optimized/album/album169-640.webp"), medium: require("@/assets/optimized/album/album169-960.webp") };
const album211 = { small: require("@/assets/optimized/album/album211-640.webp"), medium: require("@/assets/optimized/album/album211-960.webp") };
const album218 = { small: require("@/assets/optimized/album/album218-640.webp"), medium: require("@/assets/optimized/album/album218-960.webp") };
const album240 = { small: require("@/assets/optimized/album/album240-640.webp"), medium: require("@/assets/optimized/album/album240-960.webp") };
const album272 = { small: require("@/assets/optimized/album/album272-640.webp"), medium: require("@/assets/optimized/album/album272-960.webp") };
const album297 = { small: require("@/assets/optimized/album/album297-640.webp"), medium: require("@/assets/optimized/album/album297-960.webp") };
const album346 = { small: require("@/assets/optimized/album/album346-640.webp"), medium: require("@/assets/optimized/album/album346-960.webp") };
const album391 = { small: require("@/assets/optimized/album/album391-640.webp"), medium: require("@/assets/optimized/album/album391-960.webp") };
const album409 = { small: require("@/assets/optimized/album/album409-640.webp"), medium: require("@/assets/optimized/album/album409-960.webp") };
const album417 = { small: require("@/assets/optimized/album/album417-640.webp"), medium: require("@/assets/optimized/album/album417-960.webp") };
const album434 = { small: require("@/assets/optimized/album/album434-640.webp"), medium: require("@/assets/optimized/album/album434-960.webp") };
const album470 = { small: require("@/assets/optimized/album/album470-640.webp"), medium: require("@/assets/optimized/album/album470-960.webp") };
const album495 = { small: require("@/assets/optimized/album/album495-640.webp"), medium: require("@/assets/optimized/album/album495-960.webp") };
const album50 = { small: require("@/assets/optimized/album/album50-640.webp"), medium: require("@/assets/optimized/album/album50-960.webp") };
const album501 = { small: require("@/assets/optimized/album/album501-640.webp"), medium: require("@/assets/optimized/album/album501-960.webp") };
const album513 = { small: require("@/assets/optimized/album/album513-640.webp"), medium: require("@/assets/optimized/album/album513-960.webp") };
const album516 = { small: require("@/assets/optimized/album/album516-640.webp"), medium: require("@/assets/optimized/album/album516-960.webp") };
const album533 = { small: require("@/assets/optimized/album/album533-640.webp"), medium: require("@/assets/optimized/album/album533-960.webp") };
const album557 = { small: require("@/assets/optimized/album/album557-640.webp"), medium: require("@/assets/optimized/album/album557-960.webp") };
const album578 = { small: require("@/assets/optimized/album/album578-640.webp"), medium: require("@/assets/optimized/album/album578-960.webp") };
const album636 = { small: require("@/assets/optimized/album/album636-640.webp"), medium: require("@/assets/optimized/album/album636-960.webp") };
const album641 = { small: require("@/assets/optimized/album/album641-640.webp"), medium: require("@/assets/optimized/album/album641-960.webp") };
const album65 = { small: require("@/assets/optimized/album/album65-640.webp"), medium: require("@/assets/optimized/album/album65-960.webp") };
const album677 = { small: require("@/assets/optimized/album/album677-640.webp"), medium: require("@/assets/optimized/album/album677-960.webp") };
const album730 = { small: require("@/assets/optimized/album/album730-640.webp"), medium: require("@/assets/optimized/album/album730-960.webp") };
const album741 = { small: require("@/assets/optimized/album/album741-640.webp"), medium: require("@/assets/optimized/album/album741-960.webp") };
const album746 = { small: require("@/assets/optimized/album/album746-640.webp"), medium: require("@/assets/optimized/album/album746-960.webp") };
const album751 = { small: require("@/assets/optimized/album/album751-640.webp"), medium: require("@/assets/optimized/album/album751-960.webp") };
const album760 = { small: require("@/assets/optimized/album/album760-640.webp"), medium: require("@/assets/optimized/album/album760-960.webp") };
const album778 = { small: require("@/assets/optimized/album/album778-640.webp"), medium: require("@/assets/optimized/album/album778-960.webp") };
const album812 = { small: require("@/assets/optimized/album/album812-640.webp"), medium: require("@/assets/optimized/album/album812-960.webp") };
const album819 = { small: require("@/assets/optimized/album/album819-640.webp"), medium: require("@/assets/optimized/album/album819-960.webp") };
const album825 = { small: require("@/assets/optimized/album/album825-640.webp"), medium: require("@/assets/optimized/album/album825-960.webp") };
const album84 = { small: require("@/assets/optimized/album/album84-640.webp"), medium: require("@/assets/optimized/album/album84-960.webp") };
const album847 = { small: require("@/assets/optimized/album/album847-640.webp"), medium: require("@/assets/optimized/album/album847-960.webp") };
const album867 = { small: require("@/assets/optimized/album/album867-640.webp"), medium: require("@/assets/optimized/album/album867-960.webp") };
const album871 = { small: require("@/assets/optimized/album/album871-640.webp"), medium: require("@/assets/optimized/album/album871-960.webp") };
const album880 = { small: require("@/assets/optimized/album/album880-640.webp"), medium: require("@/assets/optimized/album/album880-960.webp") };
const album883 = { small: require("@/assets/optimized/album/album883-640.webp"), medium: require("@/assets/optimized/album/album883-960.webp") };
const album889 = { small: require("@/assets/optimized/album/album889-640.webp"), medium: require("@/assets/optimized/album/album889-960.webp") };
const album891 = { small: require("@/assets/optimized/album/album891-640.webp"), medium: require("@/assets/optimized/album/album891-960.webp") };
const album903 = { small: require("@/assets/optimized/album/album903-640.webp"), medium: require("@/assets/optimized/album/album903-960.webp") };
const album913 = { small: require("@/assets/optimized/album/album913-640.webp"), medium: require("@/assets/optimized/album/album913-960.webp") };
const album926 = { small: require("@/assets/optimized/album/album926-640.webp"), medium: require("@/assets/optimized/album/album926-960.webp") };
const album936 = { small: require("@/assets/optimized/album/album936-640.webp"), medium: require("@/assets/optimized/album/album936-960.webp") };
const album938 = { small: require("@/assets/optimized/album/album938-640.webp"), medium: require("@/assets/optimized/album/album938-960.webp") };

export default {
  name: "OurAlbum",
  data() {
    return {
      // Literal imports make this a static manifest and preserve gallery order.
      images: [
        { name: "album107", width: 1620, height: 1080, ...album107 },
        { name: "album124", width: 1620, height: 1080, ...album124 },
        { name: "album148", width: 1620, height: 1080, ...album148 },
        { name: "album163", width: 1080, height: 1620, ...album163 },
        { name: "album169", width: 1080, height: 1620, ...album169 },
        { name: "album211", width: 1620, height: 1080, ...album211 },
        { name: "album218", width: 1620, height: 1080, ...album218 },
        { name: "album240", width: 1080, height: 1620, ...album240 },
        { name: "album272", width: 1620, height: 1080, ...album272 },
        { name: "album297", width: 1620, height: 1080, ...album297 },
        { name: "album346", width: 1080, height: 1620, ...album346 },
        { name: "album391", width: 1620, height: 1080, ...album391 },
        { name: "album409", width: 1080, height: 1620, ...album409 },
        { name: "album417", width: 1620, height: 1080, ...album417 },
        { name: "album434", width: 1620, height: 1080, ...album434 },
        { name: "album470", width: 1620, height: 1080, ...album470 },
        { name: "album495", width: 1620, height: 1080, ...album495 },
        { name: "album50", width: 1620, height: 1080, ...album50 },
        { name: "album501", width: 1080, height: 1620, ...album501 },
        { name: "album513", width: 1620, height: 1080, ...album513 },
        { name: "album516", width: 1620, height: 1080, ...album516 },
        { name: "album533", width: 1620, height: 1080, ...album533 },
        { name: "album557", width: 1620, height: 1080, ...album557 },
        { name: "album578", width: 1620, height: 1080, ...album578 },
        { name: "album636", width: 1620, height: 1080, ...album636 },
        { name: "album641", width: 1620, height: 1080, ...album641 },
        { name: "album65", width: 1080, height: 1620, ...album65 },
        { name: "album677", width: 1620, height: 1080, ...album677 },
        { name: "album730", width: 1080, height: 1620, ...album730 },
        { name: "album741", width: 1620, height: 1080, ...album741 },
        { name: "album746", width: 1080, height: 1620, ...album746 },
        { name: "album751", width: 1620, height: 1080, ...album751 },
        { name: "album760", width: 1620, height: 1080, ...album760 },
        { name: "album778", width: 1620, height: 1080, ...album778 },
        { name: "album812", width: 1080, height: 1620, ...album812 },
        { name: "album819", width: 1080, height: 1620, ...album819 },
        { name: "album825", width: 1620, height: 1080, ...album825 },
        { name: "album84", width: 1620, height: 1080, ...album84 },
        { name: "album847", width: 1620, height: 1080, ...album847 },
        { name: "album867", width: 1620, height: 1080, ...album867 },
        { name: "album871", width: 1620, height: 1080, ...album871 },
        { name: "album880", width: 1620, height: 1080, ...album880 },
        { name: "album883", width: 1620, height: 1080, ...album883 },
        { name: "album889", width: 1620, height: 1080, ...album889 },
        { name: "album891", width: 1080, height: 1620, ...album891 },
        { name: "album903", width: 1620, height: 1080, ...album903 },
        { name: "album913", width: 1620, height: 1080, ...album913 },
        { name: "album926", width: 1080, height: 1620, ...album926 },
        { name: "album936", width: 1620, height: 1080, ...album936 },
        { name: "album938", width: 1080, height: 1620, ...album938 },
      ],
    };
  },
};
</script>

<style>
.album { box-shadow: 0px 10px 5px #88888833, 0px -5px 5px #88888833; }
.text-cf { font-family: "Comfortaa", cursive; }
</style>
