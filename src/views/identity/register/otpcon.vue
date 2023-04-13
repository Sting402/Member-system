<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1]">
        <div class="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20"></div>
        <div class="absolute left-0 bottom-[-130px] h-full w-full z-[-1]">
          <img
            src="@/assets/images/identity/signup.svg"
            alt=""
            class="h-full w-full object-contain"
          />
        </div>
      </div>
      <div class="right-column relative">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box2 flex flex-col justify-center h-full">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  src="@/assets/images/logo/logo.svg"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h3 class="font-medium mb-4">OTP 確認</h3>
            </div>
            <otpcon />
            <div
              class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm"
            >
              返回
              <router-link
                to="/"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                登入
              </router-link>
              頁面
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2021, Dashcode All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import otpcon from "./OTPconfirm.vue";

export default {
  components: {
    otpcon,
  },
};
</script>
<style lang="scss" scoped></style>
