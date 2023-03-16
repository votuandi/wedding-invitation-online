<!-- eslint-disable no-unused-vars -->
<template>
  <div
    class="w-screen relative px-3 py-6 loi-chuc flex flex-col justify-start items-center h-[100vh]"
  >
    <div class="flex flex-col items-center justify-start px-10 mb-10">
      <img class="w-[126px]" src="@/assets/img/pattern/sec-title-flower.png" />
      <p class="story-intro text-[24px] font-semibold my-3 text-center">
        Kính mời quý vị tham dự lễ cưới của chúng tôi
      </p>
      <span class="font-light text-center text-normal text-cf"
        >Sự hiện diện của bạn là niềm hạnh phúc với gia đình chúng tôi!</span
      >
    </div>

    <div
      class="relative items-center flex h-full justify-center max-w-[600px] w-full shadow-[0_5px_20px_rgba(0,0,0,0.3)] mx-auto my-0 p-4 md:p-6 bg-white mb-8 lg:mb-0"
    >
      <div
        class="save-the-date text-center bg-[#fff3e015] rounded h-fit lg:h-[600px] transition-[0.9s] w-full border-4 border-double border-[#644d4d] flex items-center"
      >
        <div
          class="flex flex-col items-center justify-evenly p-5 h-[360px] w-full"
        >
          <p class="save-the-day-text1 text-[40px] mb-6">Xác nhận tham dự</p>
          <input
            class="appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="inpName"
            id="inpName"
            placeholder="Nhập họ tên của bạn"
            v-model="name"
          />
          <input
            class="appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="inpPhone"
            id="inpPhone"
            placeholder="Cho xin SĐT với nè"
            v-model="phone"
          />
          <div class="mt-3 flex flex-col">
            <!-- <p class="text-cf text-[14px] mb-2">
              Sự hiện diện của bạn là niềm hạnh phúc với gia đình chúng tôi.
            </p> -->
            <div class="flex items-center mb-4 self-center">
              <input
                checked
                id="default-radio-1"
                type="radio"
                value="1"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                @change="onConfirm($event)"
              />
              <label for="default-radio-1" class="ml-2 text-sm"
                >Chắc chắn tham dự</label
              >
            </div>
            <div class="flex items-center self-center">
              <input
                id="default-radio-2"
                type="radio"
                value="0"
                name="default-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                @change="onConfirm($event)"
              />
              <label for="default-radio-2" class="ml-2 text-sm"
                >Chúc vợ chồng trăm năm hạnh phúc</label
              >
            </div>
          </div>
          <button
            class="bg-[#b38888] flex flex-row items-center justify-center w-40 h-12 mt-4"
            @click="sendData()"
          >
            <span class="text-white mr-2 text-base font-bold">Xác nhận</span>
            <img
              class="w-5 h-5 btn-white"
              src="@/assets/icons/arrow-right-alt-svgrepo-com.svg"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/core/myFirebase";
import { collection, addDoc } from "firebase/firestore";
export default {
  name: "WeddingCongratulation",
  data() {
    return {
      isJoin: true,
      name: "",
      phone: null,
    };
  },
  methods: {
    onConfirm(event) {
      this.isJoin = event.target.value === "1";
    },
    async sendData() {
      if (this.name === "") {
        alert("Vui lòng nhập tên");
      } else
        try {
          const docRef = await addDoc(collection(db, "thiepMoi"), {
            name: this.name,
            phone: this.phone,
            join: this.isJoin,
          });

          console.log("Document written with ID: ", docRef.id);
          alert("Cảm ơn bạn rất nhiều!");
          this.isJoin = true;
          this.name = "";
          this.phone = null;
        } catch (e) {
          console.error("Error adding document: ", e);
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

.loi-chuc {
  background-image: url("@/assets/img/pattern/bg.png");
}

.text-cf {
  font-family: "Comfortaa", cursive;
}
</style>
