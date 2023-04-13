<script setup>
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import OrganizationalChart from "./Office-Component/OrganizationalChart.vue";
import { basicArea, basicAreaDark } from "@/constant/chart-data.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
function edit() {
  router.push("/yuvog-agent/personalinfo");
}

const x = JSON.parse(localStorage.getItem("login-info"));
// console.log(x.mname);
const name = x.mname;
console.log(name);
</script>

<template>
  <div class="space-y-5 profile-page">
    <div
      class="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
    >
      <div
        class="bg-rose-900 dark:bg-rose-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"
      ></div>
      <div class="profile-box flex-none md:text-start text-center">
        <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
          <div class="flex-none">
            <div
              class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
            >
              <img
                src="@/assets/images/all-img/user-kaws.jpg"
                alt=""
                class="w-full h-full object-cover rounded-full"
              />
              <router-link
                to="/app/profile-setting"
                class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
              >
                <Icon icon="heroicons:pencil-square" />
              </router-link>
            </div>
          </div>
          <div class="flex-1">
            <div
              class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
            >
              <span class="text-ellipsis whitespace-nowrap block">{{
                x.mname
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- end profile box -->
      <div
        class="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[600px] md:space-y-0 space-y-4"
      >
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            $14,532,400
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            累計營業額
          </div>
        </div>
        <!-- end single -->
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            900,432
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            累計銷售數
          </div>
        </div>
        <!-- end single -->
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            987
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            下線代理人數
          </div>
        </div>
        <!-- end single -->
        <div class="flex-1">
          <Button text="升級申請" btnClass="btn-primary shadow-base2" />
        </div>
        <!-- end single -->
        <div class="flex-1">
          <Button text="終止代理" btnClass="btn-danger shadow-base2" />
        </div>
        <!-- end single -->
      </div>
      <!-- profile info-500 -->
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div class="lg:col-span-4 col-span-12">
        <Card title="基本資訊">
          <template #header>
            <button type="button" @click="edit()" class="btn btn-dark btn-sm">
              編輯資訊
            </button>
          </template>
          <ul class="list space-y-8">
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:envelope" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  電子信箱
                </div>
                <span class="text-ellipsis whitespace-nowrap block">{{
                  x.email
                }}</span>
              </div>
            </li>
            <!-- end single list -->
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:phone-arrow-up-right" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  聯絡電話
                </div>
                <span class="text-ellipsis whitespace-nowrap block">{{
                  x.phone
                }}</span>
              </div>
            </li>
            <!-- end single list -->
            <li class="flex space-x-3 rtl:space-x-reverse">
              <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:map" />
              </div>
              <div class="flex-1">
                <div
                  class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
                >
                  聯絡地址
                </div>
                <span class="text-ellipsis whitespace-nowrap block">{{x.city}}市{{x.area}}{{
                  x.address
                }}</span>
              </div>
            </li>
            <!-- end single list -->
          </ul>
        </Card>
      </div>
      <div class="lg:col-span-8 col-span-12">
        <Card title="年度銷售額">
          <apexchart
            type="area"
            height="250"
            :options="
              this.$store.themeSettingsStore.isDark
                ? basicAreaDark.chartOptions
                : basicArea.chartOptions
            "
            :series="basicArea.series"
          />
        </Card>
      </div>
      <div class="lg:col-span-12 col-span-12">
        <Card title="我的組織圖">
          <!-- <div class="md:flex justify-between ">
          </div> -->
          <OrganizationalChart></OrganizationalChart>
        </Card>
      </div>
      <!-- <span class="text-sm text-slate-600 dark:text-slate-300">ongoing</span> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
