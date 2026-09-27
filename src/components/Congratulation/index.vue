<template>
  <div
    class="w-screen relative px-3 py-6 loi-chuc flex flex-col justify-start items-center h-[100vh]"
  >
    <div class="flex flex-col items-center justify-start px-10 mb-10">
      <img class="w-[126px]" src="@/assets/optimized/pattern/sec-title-flower.webp" width="126" height="59" loading="lazy" decoding="async" alt="" />
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
        <form
          class="flex flex-col items-center justify-evenly p-5 h-[360px] w-full"
          @submit.prevent="sendData"
        >
          <p class="save-the-day-text1 text-[40px] mb-6">Xác nhận tham dự</p>
          <p
            v-if="formMessage"
            :class="formStatus === 'success' ? 'text-green-700' : 'text-red-700'"
            class="text-center text-sm mb-2"
            role="status"
            aria-live="polite"
          >
            {{ formMessage }}
          </p>
          <label class="sr-only" for="inpName">Họ tên của bạn</label>
          <input
            class="appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            name="inpName"
            id="inpName"
            placeholder="Nhập họ tên của bạn"
            v-model="name"
            :aria-invalid="Boolean(errors.name)"
            aria-describedby="name-error"
            maxlength="100"
          />
          <p v-if="errors.name" id="name-error" class="text-red-700 text-sm -mt-2 mb-2 w-[300px]" role="alert">{{ errors.name }}</p>
          <label class="sr-only" for="inpPhone">Số điện thoại của bạn</label>
          <input
            class="appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="tel"
            name="inpPhone"
            id="inpPhone"
            placeholder="Cho xin SĐT với nè"
            v-model="phone"
            :aria-invalid="Boolean(errors.phone)"
            aria-describedby="phone-error"
            autocomplete="tel"
            maxlength="30"
          />
          <p v-if="errors.phone" id="phone-error" class="text-red-700 text-sm -mt-2 mb-2 w-[300px]" role="alert">{{ errors.phone }}</p>
          <div class="mt-3 flex flex-col">
            <!-- <p class="text-cf text-[14px] mb-2">
              Sự hiện diện của bạn là niềm hạnh phúc với gia đình chúng tôi.
            </p> -->
            <div class="flex items-center mb-4 self-center">
              <input
                id="default-radio-1"
                type="radio"
                :value="true"
                v-model="isJoin"
                name="attendance"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label for="default-radio-1" class="ml-2 text-sm"
                >Chắc chắn tham dự</label
              >
            </div>
            <div class="flex items-center self-center">
              <input
                id="default-radio-2"
                type="radio"
                :value="false"
                v-model="isJoin"
                name="attendance"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label for="default-radio-2" class="ml-2 text-sm"
                >Chúc vợ chồng trăm năm hạnh phúc</label
              >
            </div>
          </div>
          <button
            class="bg-[#b38888] flex flex-row items-center justify-center w-40 h-12 mt-4"
            type="submit"
            :disabled="isSubmitting"
            :aria-busy="isSubmitting"
          >
            <span class="text-white mr-2 text-base font-bold">{{ isSubmitting ? "Đang gửi..." : "Xác nhận" }}</span>
            <img
              class="w-5 h-5 btn-white"
              src="@/assets/icons/arrow-right-alt-svgrepo-com.svg"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createRsvp } from "@/rsvp/rsvpRepository";
import { validateRsvp } from "@/rsvp/validation";
export default {
  name: "WeddingCongratulation",
  data() {
    return {
      isJoin: true,
      name: "",
      phone: "",
      isSubmitting: false,
      errors: {},
      formStatus: "",
      formMessage: "",
    };
  },
  methods: {
    async sendData() {
      if (this.isSubmitting) return;

      this.formMessage = "";
      this.formStatus = "";
      const validation = validateRsvp({ name: this.name, phone: this.phone, join: this.isJoin });
      this.errors = validation.errors;

      if (!validation.isValid) {
        this.formStatus = "error";
        this.formMessage = "Vui lòng kiểm tra lại thông tin xác nhận.";
        return;
      }

      this.isSubmitting = true;
      try {
        await createRsvp(validation.value);
        this.isJoin = true;
        this.name = "";
        this.phone = "";
        this.errors = {};
        this.formStatus = "success";
        this.formMessage = "Cảm ơn bạn đã xác nhận tham dự!";
      } catch (error) {
        this.formStatus = "error";
        this.formMessage = "Không thể gửi xác nhận lúc này. Vui lòng thử lại.";
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style>

.loi-chuc {
  background-image: url("@/assets/optimized/pattern/bg.webp");
}

.text-cf {
  font-family: "Comfortaa", cursive;
}
</style>
