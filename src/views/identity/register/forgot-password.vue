<template>
  <div
    class="loginwrapper bg-cover bg-no-repeat bg-center"
    :style="{
      backgroundImage: 'url(' + loginBg + ')',
    }"
  >
    <div class="lg-inner-column">
      <div class="left-columns lg:w-1/2 lg:block hidden">
        <div class="logo-box-3">
          <router-link to="/" class="">
            <img :src="logoWhite" alt="" />
          </router-link>
        </div>
      </div>
      <div class="lg:w-1/2 w-full flex flex-col items-center justify-center">
        <div class="auth-box-3">
          <div class="mobile-logo text-center mb-6 lg:hidden block">
            <router-link to="/"
              ><img :src="logo" alt="" class="mx-auto"
            /></router-link>
          </div>
          <div class="text-center 2xl:mb-10 mb-5">
            <h2 class="font-medium mb-4">忘記密碼?</h2>
          </div>
          <ForgotPass />

          <div
            class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm back"
          >
            前往
            <router-link
              to="/"
              class="text-slate-900 dark:text-white font-medium hover:underline"
            >
              登入
            </router-link>
            頁面 /
            <router-link
              to="/reset"
              class="text-slate-900 dark:text-white font-medium hover:underline"
            >
              重設密碼
            </router-link>
            頁面
          </div>
        </div>
        <div class="auth-footer3 text-white py-5 px-5 text-lg w-full">
          COPYRIGHT © 2023 Yuvog, All rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForgotPass from "../common/forgot.vue";
import Social from "../common/Social";
// Image Import
import loginBg from "@/assets/images/identity/page-bg.jpg";
import logoWhite from "@/assets/images/logo/logo-white-yuvog.svg";
import logo from "@/assets/images/logo/logo-yuvog.svg";

export default {
  data() {
    return {
      logoWhite,
      logo,
      loginBg,
    };
  },
  components: {
    ForgotPass,
    Social,
  },
};
</script>
<style lang="scss" scoped>
.back {
  margin-left: 28%;
}
</style>
