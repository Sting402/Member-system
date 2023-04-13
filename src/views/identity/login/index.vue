<template>
  <div
    class="loginwrapper bg-cover bg-no-repeat bg-center"
    :style="{
      backgroundImage:
        'url(' + loginBg + ')',
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
            <h4 class="font-medium">妤果代理商系統</h4>
            <div class="text-slate-500 dark:text-slate-400 text-base">
              請輸入 <b>身份證字號</b> 或 <b>手機號碼</b> 登入系統
            </div>
          </div>
          <Signin />
          <div
            className=" relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6"
          >
            <div
              className=" absolute inline-block  bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm  text-slate-500  dark:text-slate-400font-normal "
            >
              妤我同行 果然有錢
            </div>
          </div>
          <!-- <div class="max-w-[242px] mx-auto mt-8 w-full">
            <Social />
          </div> -->
          <div
            class="mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm text-center"
          >
            還沒有加入我們?
            <router-link
              to="/signup-agent"
              class="text-rose-900 dark:text-white font-medium hover:underline"
            >
              我要成為代理商</router-link>
              <router-link
              to="/signup-member"
              class="text-slate-900 dark:text-white font-medium hover:underline"
            >
              我要參加減重比賽</router-link>
          </div>
        </div>
      </div>
      <div class="auth-footer3 text-white py-5 px-5 text-lg w-full">
        COPYRIGHT © 2023 Yuvog, All rights Reserved
      </div>
    </div>
  </div>
</template>
<script>
import Signin from "../common/Signin";
import Social from "../common/Social";
// Image Import
import loginBg from "@/assets/images/identity/page-bg.jpg"
import logoWhite from "@/assets/images/logo/logo-white-yuvog.svg"
import logo from "@/assets/images/logo/logo-yuvog.svg"

export default {
  data () {
    return {
      logoWhite,logo,loginBg
    }
  },
  components: {
    Social,
    Signin,
  },
};
</script>
<style lang="scss"></style>
