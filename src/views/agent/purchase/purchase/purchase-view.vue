<template>
  <div>
    <div class="lg:flex justify-between flex-wrap items-center">
      <Breadcrumb />
      <div class="flex lg:justify-end items-center flex-wrap">


        <!-- <button
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg"><Icon icon="heroicons:pencil-square" /></span>
          <span>Edit</span>
        </button> -->
        <button
          type="button"
          @click="print"
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg"><Icon icon="heroicons:printer" /></span>
          <span>列印出貨明細</span>
        </button>
        <!-- <button
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg"><Icon icon="heroicons:arrow-down-tray" /></span>
          <span>Download</span>
        </button> -->
        <!-- <button
          class="invocie-btn inline-flex btn btn-sm whitespace-nowrap space-x-1 cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900 rtl:space-x-reverse"
        >
          <span class="text-lg transform -rotate-45"
            ><Icon icon="heroicons:paper-airplane"
          /></span>
          <span>Send invoice</span>
        </button> -->

      </div>
    </div>
    <Card bodyClass="p-2">

      <div class="bg-slate-100 dark:bg-slate-700 rounded-t-lg px-4 pt-4 pb-1 grid grid-cols-2 md:grid-cols-6 gap-4">
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            訂單編號
          </div>
          <div class="text-s font-bold text-slate-600 dark:text-slate-300">
            #2212250245
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            訂單狀態
          </div>
          <div class="text-s font-bold text-success-500">已出貨</div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            寄送方式
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            自取
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            付款方式
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            現金
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            訂購日期
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            2022/12/25
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            完成日期
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            2023/02/01
          </div>
        </div>
        <!-- end single -->
      </div>

      <div class="bg-slate-100 dark:bg-slate-700 rounded-b-lg px-4 pt-4 pb-1 grid grid-cols-2 md:grid-cols-6 gap-4">
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            訂購人編號
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            TW220912005
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            訂購人姓名
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            杜子騰
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            訂購人階級
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            董事
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            信箱
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            member@yuvog.com.tw
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            聯絡電話
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            0912 345 678
          </div>
        </div>
        <!-- end single -->
        <div class="mr-3 mb-3 space-y-2">
          <div class="text-xs font-medium text-slate-600 dark:text-slate-300">
            聯絡地址
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            高雄市前鎮區和平二路193號10樓之2
          </div>
        </div>
        <!-- end single -->
      </div>
      <div class="grid grid-cols-12 gap-5">
        <div class="md:col-span-3 col-span-12">
          <div class="max-w-[1000px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto">
            <Card>
              <ul class="relative ltr:pl-2 rtl:pr-2">
                <li v-for="(item, i) in trackingOrder.slice(0, 4)" :key="i" :class="
                          item.status === 'ok'
                            ? 'before:opacity-100'
                            : ' before:opacity-50'
                        "
                  class="ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4 before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')]">
                  <div class="p-[10px] relative top-[-20px]">
                    <h2 class="text-sm font-medium dark:text-slate-400-900 mb-1 text-slate-600">
                      {{ item.title }}
                    </h2>
                    <p class="text-xs capitalize dark:text-slate-400">
                      {{ item.date }}
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

    </div>
        <div class="md:col-span-9 col-span-12">
          <div class="max-w-[1000px] mx-auto shadow-base dark:shadow-none my-8 rounded-md overflow-x-auto">
            <TotalTable />
          </div>
        </div>
      </div>

      <!-- <div
        class="py-10 text-center md:text-2xl text-xl font-normal text-slate-600 dark:text-slate-300"
      >
        Thank you for your purchase!
      </div> -->
    </Card>
  </div>
</template>
<script>
import VueSelect from "@/components/Select/VueSelect";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumbs";
import Icon from "@/components/Icon";
import TotalTable from "./module/TotalTable.vue";
import { message, TodoList, trackingOrder } from "../../../../constant/main-data"; 
export default {
  components: {
    VueSelect,
    Card,
    Icon,
    TotalTable,
    Breadcrumb,
  },
  data() {
    return {
      trackingOrder,
      message,
      TodoList,

    };
  },
  methods: {
    print() {
      window.print();
    },
  },
};
</script>
<style lang="scss">
.vgt-wrap__actions-footer {
  border: none !important;
}
.invocie-btn {
  @apply hover:bg-slate-900 hover:text-slate-100 dark:hover:bg-slate-600 mr-3 mb-4;
}
@media print {
  .invocie-btn {
    display: none;
  }
  .sidebar-wrapper,
  .app-header,
  .site-footer,
  .shadow-deep {
    @apply hidden;
  }
  .content-wrapper {
    @apply w-full ml-0;
  }
}
</style>
