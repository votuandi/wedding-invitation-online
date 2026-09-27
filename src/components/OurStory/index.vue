<template>
  <div class="flex flex-col w-full pt-10 items-center">
    <div class="flex flex-col items-center justify-start px-10 mb-10">
<img class="w-[126px]" src="@/assets/optimized/pattern/sec-title-flower.webp" width="126" height="59" loading="lazy" decoding="async" alt="" />
      <p class="story-intro text-[24px] font-semibold">
        Câu chuyện tình yêu của chúng tôi
      </p>
      <span class="font-light text-center text-lg"
        >Đây là cô dâu và chú rể...</span
      >
    </div>
    <div>
      <div
        class="img-children relative flex flex-row justify-center h-[600px] items-end pb-5"
        ref="story_0"
        data-story-index="0"
      >
        <img
          v-if="animations[0]"
          class="h-[500px] w-auto animate__animated animate__bounceInDown"
          src="@/assets/optimized/story/chu-re-luc-nho.webp"
          loading="lazy" decoding="async" alt="Minh họa chú rể lúc nhỏ"
        />
        <img
          v-if="animations[0]"
          class="h-[450px] mb-5 w-auto animate__animated animate__bounceInDown"
          src="@/assets/optimized/story/co-dau-luc-nho.webp"
          loading="lazy" decoding="async" alt="Minh họa cô dâu lúc nhỏ"
        />
        <img
          v-if="animations[0]"
          class="w-screen md:w-[700px] absolute bottom-0 mx-0 my-auto -z-10 animate__animated animate__rotateInUpLeft"
          src="@/assets/optimized/story/bg-sen.webp"
          loading="lazy" decoding="async" alt=""
        />
        <img
          v-if="animations[0]"
          class="absolute -z-10 w-[200px] top-0 right-5 md:right-[35vw] animate__animated animate__slideInRight"
          src="@/assets/optimized/story/pt-birds.webp"
          loading="lazy" decoding="async" alt=""
        />
        <img
          v-if="animations[0]"
          class="absolute -z-10 w-[100px] top-0 left-5 md:left-[35vw] animate__animated animate__slideInLeft"
          src="@/assets/optimized/story/pt-sun.webp"
          loading="lazy" decoding="async" alt=""
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
        class="img-children relative justify-center h-[380px] md:h-[720px] w-screen md:w-[600px] items-end pb-5 self-center"
        ref="story_1"
        data-story-index="1"
      >
        <div
          class="flex flex-row absolute w-screen md:w-[600px] justify-evenly px-3"
        >
          <img
            v-if="animations[1]"
            class="w-[40vw] md:w-[300px] h-auto animate__animated animate__fadeInLeftBig"
            src="@/assets/optimized/story/pt-story-2vk.webp"
            loading="lazy" decoding="async" alt=""
          />
          <img
            v-if="animations[1]"
            class="w-[40vw] md:w-[300px] h-auto animate__animated animate__fadeInRightBig"
            src="@/assets/optimized/story/pt-story-2ck.webp"
            loading="lazy" decoding="async" alt=""
          />
        </div>
      </div>
      <div
        class="px-10 mt-5 mb-14 animate__animated animate__fadeInDown"
        v-if="animations[1]"
      >
        <p class="font-light text-center text-lg">
          Mọi thứ bắt đầu từ sau khi kết bạn Facebook năm 2012. <br />
          Từ đó, cả 2 vẫn giữ liên lạc suốt 7 năm dù chưa hề gặp mặt.
        </p>
      </div>

      <div
        class="img-children relative justify-center h-[500px] md:h-[640px] py-2 w-screen md:w-[600px] items-end pb-5 self-center"
        ref="story_2"
        data-story-index="2"
      >
        <div
          class="flex flex-row absolute bottom-[280px] w-screen md:w-[600px] justify-between"
        >
          <img
            v-if="animations[2]"
            class="w-[150px] md:w-[300px] h-auto -z-10 animate__animated animate__fadeInLeftBig"
            src="@/assets/optimized/story/pt-boy.webp"
            loading="lazy" decoding="async" alt=""
          />
          <img
            v-if="animations[2]"
            class="w-[150px] md:w-[300px] h-auto -z-10 animate__animated animate__fadeInRightBig"
            src="@/assets/optimized/story/pt-girl.webp"
            loading="lazy" decoding="async" alt=""
          />
        </div>
        <img
          v-if="animations[2]"
          class="h-[300px] absolute bottom-0 mx-0 my-auto animate__animated animate__bounceInUp"
          src="@/assets/optimized/story/pt-table.webp"
          loading="lazy" decoding="async" alt=""
        />
        <div
          class="absolute bottom-[200px] z-10 mx-0 my-auto w-screen md:w-[600px] flex justify-center"
        >
          <img
            v-if="animations[2]"
            class="h-[150px] animate__animated animate__bounceInDown"
            src="@/assets/optimized/story/pt-bunbo.webp"
            loading="lazy" decoding="async" alt=""
          />
        </div>
      </div>
      <div
        class="px-10 mt-5 mb-14 animate__animated animate__fadeInDown"
        v-if="animations[2]"
      >
        <p class="font-light text-center text-lg">
          2 đứa gặp nhau lần đầu vào ngày 8/9/2019<br />
          Món ăn đầu tiên cùng nhau là Bún bò. Và sau đó...
        </p>
      </div>

      <div
        class="img-children relative justify-center h-fit py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col"
        ref="story_3"
        data-story-index="3"
      >
        <div
          class="self-start p-6 animate__animated animate__pulse"
          v-if="animations[3]"
        >
          <p class="font-bold text-3xl text-rose-300">Ngày 10/03/2020,</p>
          <p class="text-base font-light mt-1">
            Chúng tôi bắt đầu yêu nhau tại thành phố biển Vũng Tàu
          </p>
        </div>
        <img
          class="w-[320px] h-auto self-center animate__animated animate__fadeInDown"
          v-if="animations[3]"
          src="@/assets/optimized/story/st-10-03-2020.webp"
          loading="lazy" decoding="async" alt="Kỷ niệm tháng 3 năm 2020"
        />
      </div>

      <!-- <div
        class="img-children relative justify-center h-fit py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col"
        ref="story_4"
        data-story-index="4"
      >
        <div
          class="self-start p-6 animate__animated animate__pulse"
          v-if="animations[4]"
        >
          <p class="font-bold text-3xl text-rose-300">Tháng 10/2020,</p>
          <p class="text-base font-light mt-1">
            Hai đứa lần đầu khởi nghiệp, cùng nhau nhập hàng, lên kế hoạch,
            thiết kế banner, chốt đơn,...<br />
            Nhớ nhất những tối cùng nhau vi vu khắp các quận Sài Gòn để giao
            từng đơn hàng ^^
          </p>
        </div>
        <img
          class="w-[320px] h-auto self-center animate__animated animate__fadeInDown"
          v-if="animations[4]"
          src="@/assets/optimized/story/st-10-2020.webp"
          loading="lazy" decoding="async" alt="Kỷ niệm tháng 10 năm 2020"
        />
      </div>

      <div
        class="img-children relative justify-center h-fit py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col"
        ref="story_5"
      >
        <div
          class="self-start p-6 animate__animated animate__pulse"
          v-if="animations[5]"
        >
          <p class="font-bold text-3xl text-rose-300">Năm 2021,</p>
          <p class="text-base font-light mt-1">
            Đại dịch bùng phát, cả 2 ở nhà WFH, cùng nhau xếp hàng xin cứu trợ,
            cùng nhâu nấu ăn, chơi với mèo, rồi hóng hớt chờ được chích vac-xin
          </p>
        </div>
        <div
          class="flex flex-row flex-wrap self-center justify-center animate__animated animate__fadeInDown"
          v-if="animations[5]"
        >
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2021.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2021"
          />
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2021-1.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2021"
          />
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2021-2.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2021"
          />
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2021-3.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2021"
          />
        </div>
      </div>
      <div
        class="img-children relative justify-center h-fit py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col"
        ref="story_6"
      >
        <div
          class="self-start p-6 animate__animated animate__pulse"
          v-if="animations[6]"
        >
          <p class="font-bold text-3xl text-rose-300">Năm 2022,</p>
          <p class="text-base font-light mt-1">
            Thử thách lớn nhất trong hành trình của chúng tôi. Khoảng cách của 2
            đứa giờ là 500km với rất nhiều biến cố. <br />
            Chỉ có thể là sức mạnh của tình yêu, để có thể 5 lần 7 lượt đến thăm
            em và duy trì sợ tơ hồng đang rất mỏng manh.
          </p>
        </div>
        <div
          class="flex flex-row flex-wrap self-center justify-center animate__animated animate__fadeInDown"
          v-if="animations[6]"
        >
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2022.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2022"
          />
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2022-1.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2022"
          />
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2022-2.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2022"
          />
          <img
            class="h-[180px] w-auto self-center m-1"
            src="@/assets/optimized/story/st-2022-3.webp"
            loading="lazy" decoding="async" alt="Kỷ niệm năm 2022"
          />
        </div>
      </div> -->

      <div
        class="cau-hon img-children relative justify-center h-[100vh] py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col"
        ref="story_4"
        data-story-index="4"
      >
        <div
          class="self-start p-6 animate__animated animate__pulse mb-[20px]"
          v-if="animations[4]"
        >
          <p class="font-bold text-3xl text-rose-300">Ngày 13/06/2022,</p>
          <p class="text-base font-light mt-1">
            Sau gần 3 năm bên nhau, cùng nhau đi đến rất nhiều nơi, cùng nhau
            nấu và ăn rất nhiều món, trải qua những thử thách mà anh nghĩ là đã
            "quá đủ" rồi.<br />
            Anh đã sợ lắm khi phải xa và mất em, từ giờ mình về chung một nhà em
            nhé! <br />
            Anh đã setup buổi cầu hôn suốt cả buổi chiều. Nhờ sự giúp đỡ của các
            chú mèo ở CATFE,<br />
            Anh cầu hôn và em đã gật đầu đồng ý.
          </p>
        </div>
        <img
          class="w-[80vw] h-auto self-center animate__animated animate__fadeInDown"
          v-if="animations[4]"
          src="@/assets/optimized/story/st-06-2022.webp"
          loading="lazy" decoding="async" alt="Kỷ niệm tháng 6 năm 2022"
        />
      </div>
      
      <div
      class="img-children relative justify-center h-fit py-2 w-screen md:w-[600px] items-center pb-5 self-center flex flex-col" ref="story_5"
    >
      <div class="self-start p-6 animate__animated animate__pulse" v-if="animations[5]">
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
         v-if="animations[5]"
      />
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurStory",
  mounted() {
    this.lastScrollY = window.scrollY;
    if ("IntersectionObserver" in window) {
      this.storyObserver = new IntersectionObserver(this.handleIntersection, {
        rootMargin: "0px 0px -25% 0px",
      });
      Object.values(this.$refs).forEach((element) => this.storyObserver.observe(element));
    } else {
      window.addEventListener("scroll", this.updateScaroll, { passive: true });
      this.updateScaroll();
    }
  },
  beforeUnmount() {
    if (this.storyObserver) this.storyObserver.disconnect();
    window.removeEventListener("scroll", this.updateScaroll);
  },

  data() {
    return {
      lastScrollY: 0,
      storyObserver: null,
      animations: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.storyIndex);
        if (entry.isIntersecting && window.scrollY > this.lastScrollY) {
          this.animations[index] = true;
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > entry.rootBounds.bottom) {
          this.animations[index] = false;
        }
      });
      this.lastScrollY = window.scrollY;
    },
    updateScaroll() {
      const scrollPosition = window.scrollY;
      Object.values(this.$refs).forEach((element, index) => {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.75 && scrollPosition - this.lastScrollY > 0) this.animations[index] = true;
        else if (top > window.innerHeight) this.animations[index] = false;
      });
      this.lastScrollY = scrollPosition;

      if (
        this.$refs.story_5.getBoundingClientRect().top +
          this.$refs.story_5.getBoundingClientRect().height <
          window.innerHeight &&
        scrollPosition - this.lastScrollY > 0
      ) {
        this.animations[5] = true;
      } else if (
        this.$refs.story_5.getBoundingClientRect().top > window.innerHeight
      ) {
        this.animations[5] = false;
      }

      // if (
      //   this.$refs.story_6.getBoundingClientRect().top +
      //     this.$refs.story_6.getBoundingClientRect().height <
      //     window.innerHeight &&
      //   scrollPosition - this.lastScrollY > 0
      // ) {
      //   this.animations[6] = true;
      // } else if (
      //   this.$refs.story_6.getBoundingClientRect().top > window.innerHeight
      // ) {
      //   this.animations[6] = false;
      // }

      // if (
      //   this.$refs.story_7.getBoundingClientRect().top +
      //     this.$refs.story_7.getBoundingClientRect().height <
      //     window.innerHeight &&
      //   scrollPosition - this.lastScrollY > 0
      // ) {
      //   this.animations[7] = true;
      // } else if (
      //   this.$refs.story_7.getBoundingClientRect().top > window.innerHeight
      // ) {
      //   this.animations[7] = false;
      // }

      // if (
      //   this.$refs.story_8.getBoundingClientRect().top +
      //     this.$refs.story_8.getBoundingClientRect().height <
      //     window.innerHeight &&
      //   scrollPosition - this.lastScrollY > 0
      // ) {
      //   this.animations[8] = true;
      // } else if (
      //   this.$refs.story_8.getBoundingClientRect().top > window.innerHeight
      // ) {
      //   this.animations[8] = false;
      // }
    },
  },
};
</script>

<style>
.story-intro {
  font-family: "Dancing Script", cursive;
}

.cau-hon {
  background-image: url("@/assets/optimized/story/bg-cauhon.webp");
}
</style>
