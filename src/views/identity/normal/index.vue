<template>
  <div class="loginwrapper">
    <div class="lg-inner-column">
      <div class="left-column relative z-[1]">
        <div class="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
          <router-link to="/">
            <img
              src="@/assets/images/logo/logo-yuvog.svg"
              alt=""
              class="mb-10"
              v-if="!this.$store.themeSettingsStore.isDark"
            />
            <img
              src="@/assets/images/logo/logo-white-yuvog.svg"
              alt=""
              class="mb-10"
              v-else
            />
          </router-link>

          <h4>
            It's your own
            <span class="text-slate-800 dark:text-slate-400 font-bold"
              >vogue</span
            >
          </h4>
        </div>
        <div class="absolute left-0 bottom-[-130px] h-full w-full z-[-1]">
          <img
            src="@/assets/images/identity/signup.svg"
            alt=""
            class="h-full w-full object-contain"
          />
        </div>
      </div>
      <div class="right-column relative bg-white dark:bg-slate-800">
        <div
          class="inner-content h-full flex flex-col bg-white dark:bg-slate-800"
        >
          <div class="auth-box h-full flex flex-col justify-center">
            <div class="mobile-logo text-center mb-6 lg:hidden block">
              <router-link to="/"
                ><img
                  src="@/assets/images/logo/logo.svg"
                  alt=""
                  class="mx-auto"
              /></router-link>
            </div>
            <div class="text-center 2xl:mb-10 mb-5">
              <h4 class="font-medium">妤果一般會員申請</h4>
              <div class="text-slate-500 dark:text-slate-400 text-base">
                歡迎加入妤果 共創美好生活
              </div>
            </div>
            <Signup />
            <div
              className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
            >
              <div
                className=" absolute inline-block  bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal "
              >
                妤我同行 果然有錢
              </div>
            </div>
            <!-- <div class="max-w-[242px] mx-auto mt-8 w-full">
              <Social />
            </div> -->
            <div
              class="max-w-[215px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm"
            >
              加入我們的行列?
              <router-link
                to="/signup-agent"
                class="text-slate-900 dark:text-white font-medium hover:underline"
              >
                申請加入代理商</router-link
              >
            </div>
          </div>
          <div class="auth-footer text-center">
            Copyright 2023, Yuvog All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Signup from "../common/Signup0";
import Social from "../common/Social";

export default {
  components: {
    Social,
    Signup,
  },
};
</script>
<style lang="scss"></style>
