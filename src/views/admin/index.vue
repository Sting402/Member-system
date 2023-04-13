<template>
  <div>
    <!-- <Breadcrumb /> -->
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card title="代理人數統計">
            <!-- <div class="flex justify-between mb-6">
            <h4 class="text-slate-900 text-xl font-medium">代理人數統計</h4>
            <label class="inline-flex text-sm cursor-pointer">
              <input type="checkbox" @change="toggle" hidden />
              <span class="px-[18px] py-1 transition duration-100 rounded" :class="
                check
                  ? 'bg-slate-900 dark:bg-slate-900 text-white'
                  : 'dark:text-slate-300'
              ">本月</span>
              <span class="px-[18px] py-1 transition duration-100 rounded" :class="
                !check
                  ? 'bg-slate-900 dark:bg-slate-900 text-white'
                  : ' dark:text-slate-300'
              ">上月</span>
            </label>
          </div> -->
            <template #header>
              <SelectMonth />
            </template>
            <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              <div
                class="price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]"
                :class="item.bg" v-for="(item, i) in agents" :key="i">
                <div class="overlay absolute right-0 top-0 w-full h-full z-[-1]" v-if="item.img">
                  <img :src="item.img" alt="" class="ml-auto block" />
                </div>
                <div v-if="item.ribon"
                  class="text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45">
                  {{ item.ribon }}
                </div>
                <header class="mb-6">
                  <h4 class="text-xl mb-5">{{ item.title }}</h4>
                  <div class="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                    <!-- <span class="text-[32px] leading-10 font-medium" v-if="check">
                    {{ item.price_Yearly }} 
                  </span>
                  <span class="text-[32px] leading-10 font-medium" v-if="!check">
                    {{ item.price_Monthly }}
                  </span> -->
                    <span class="text-[32px] leading-10 font-medium">
                      {{ item.count1 }} <span class="text-base">人</span>
                    </span>
                    <!-- <span
                    class="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">Save
                    20%
                  </span> -->
                  </div>
                  <!-- <p class="text-slate-500 dark:text-slate-300 text-sm">
                  per user/month, annually
                </p> -->
                </header>
                <div class="price-body space-y-8">
                  <!-- <p class="text-sm leading-5 text-slate-600 dark:text-slate-300">
                  Designed for teams who need to manage complex workflows with more
                  automation and integration.
                </p> -->
                  <div class="grid grid-cols-2 col-span-1 gap-1">

                    <div>
                      <span
                        class="block mb- text-lg text-slate-900 dark:text-white font-medium mb-2"><small>當月新增</small><br />
                        {{
                          item.count2
                        }} <small>人</small>
                      </span>
                    </div>
                    <div>
                      <span
                        class="block mb- text-lg text-slate-900 dark:text-white font-medium mb-2"><small>當月升級</small><br />
                        {{
                          item.count3
                        }} <small>人</small>
                      </span>
                    </div>
                    <div>
                      <span
                        class="block mb- text-lg text-slate-900 dark:text-white font-medium mb-2"><small>當月終止</small><br />
                        {{
                          item.count4
                        }} <small>人</small>
                      </span>
                    </div>
                    <div>
                      <div class="flex space-x-2 rtl:space-x-reverse mt-2">
                        <div class="flex-none text-xl" :class="item.textClass">
                          <Icon :icon="item.icon" />
                        </div>
                        <div class="flex-1 text-sm">
                          <span class="block mb-[2px]" :class="item.percentClass">{{
                            item.percent
                          }}</span>
                          <span class="block mb-1 text-slate-600 dark:text-slate-300">比上個月</span>
                        </div>
                      </div>
                    </div>


                  </div>
                  <!-- <div>
                  <Button :text="item.button" btnClass="btn-outline-dark dark:border-slate-400 w-full" />
                </div> -->
                </div>
              </div>
            </div>
          </Card>



        </div>
      </div>


      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-8 col-span-12 space-y-5">
          <Card title="代理人數統計">
            <template #header>
              <SelectMonth />
            </template>
            <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 col-span-1 gap-3">
              <div v-for="(item, i) in statistics" :key="i" :class="item.bg"
                class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]">
                <div class="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                  <img :src="item.img" alt="" draggable="false" class="w-full h-full object-contain" />
                </div>
                <span class="block mb-3 text-lg text-slate-900 dark:text-white font-medium">{{ item.title }}</span>
                <div class="grid grid-cols-2 col-span-1 gap-2">
                  <div>
                    <span
                      class="block mb- text-xs text-slate-900 dark:text-white font-medium mb-2"><small>目前代理</small><br />
                      {{
                        item.count1
                      }} <small>人</small>
                    </span>
                  </div>
                  <div>
                    <span
                      class="block mb- text-xs text-slate-900 dark:text-white font-medium mb-2"><small>當月新增</small><br />
                      {{
                        item.count2
                      }} <small>人</small>
                    </span>
                  </div>
                  <div>
                    <span
                      class="block mb- text-xs text-slate-900 dark:text-white font-medium mb-2"><small>當月升級</small><br />
                      {{
                        item.count3
                      }} <small>人</small>
                    </span>
                  </div>
                  <div>
                    <span
                      class="block mb- text-xs text-slate-900 dark:text-white font-medium mb-2"><small>當月終止</small><br />
                      {{
                        item.count4
                      }} <small>人</small>
                    </span>
                  </div>
                </div>

                <div class="flex space-x-2 rtl:space-x-reverse mt-2">
                  <div class="flex-none text-xl" :class="item.text">
                    <Icon :icon="item.icon" />
                  </div>
                  <div class="flex-1 text-sm">
                    <span class="block mb-[2px]" :class="item.percentClass">{{
                      item.percent
                    }}</span>
                    <span class="block mb-1 text-slate-600 dark:text-slate-300">比上個月</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card title="產品銷售數據">
            <template #header>
              <SelectMonth />
            </template>
            <div class="legend-ring">
              <apexchart type="bar" height="420" :options="columnCharthomeComputed.chartOptions"
                :series="columnCharthomeComputed.series" />
            </div>
          </Card>
          <div class="grid grid-cols-12 gap-5">
            <div class="md:col-span-6 col-span-12">
              <Card title="自有品牌業績百分比">
                <template #header>
                  <SelectMonth />
                </template>
                <div class="legend-ring3">
                  <apexchart type="pie" height="335" :options="
                    this.$store.themeSettingsStore.isDark
                      ? pieChartDark.chartOptions
                      : pieChart.chartOptions
                  " :series="pieChart.series" />
                </div>
              </Card>
            </div>
            <div class="md:col-span-6 col-span-12">
              <Card title="合作品牌業績百分比">
                <template #header>
                  <SelectMonth />
                </template>
                <div class="legend-ring3">
                  <apexchart type="pie" height="335" :options="
                    this.$store.themeSettingsStore.isDark
                      ? pieChartDarkTwo.chartOptions
                      : pieChartTwo.chartOptions
                  " :series="pieChartTwo.series" />
                </div>
              </Card>
            </div>
          </div>

        </div>

        <!-- <div class="lg:col-span-8 col-span-12 space-y-5">
          <Card>
            <div class="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
              <div
                v-for="(item, i) in statistics"
                :key="i"
                :class="item.bg"
                class="rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]"
              >
                <div class="overlay absolute left-0 top-0 w-full h-full z-[-1]">
                  <img
                    :src="item.img"
                    alt=""
                    draggable="false"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="block mb-6 text-s text-slate-900 dark:text-white font-medium"
                  >{{ item.title }}</span
                >
                <span
                  class="block mb- text-xs text-slate-900 dark:text-white font-medium"
                  >目前代理人數 {{ item.count }}</span
                >
                <span
                  class="block mb- text-s text-slate-900 dark:text-white font-medium mb-6"
                  >{{ item.count }}</span
                >
                <div class="flex space-x-2 rtl:space-x-reverse">
                  <div class="flex-none text-xl" :class="item.text">
                    <Icon :icon="item.icon" />
                  </div>
                  <div class="flex-1 text-sm">
                    <span class="block mb-[2px]" :class="item.percentClass">{{
                      item.percent
                    }}</span>
                    <span class="block mb-1 text-slate-600 dark:text-slate-300"
                      >From last week</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <header class="md:flex md:space-y-0 space-y-4">
              <h6 class="flex-1 text-slate-900 dark:text-white capitalize">
                Deal distribution by stage
              </h6>
              <div class="flex-none">
                <FromGroup>
                  <flat-pickr
                    class="form-control bg-white"
                    placeholder="Select date range"
                    v-model="rangeDate"
                    :config="{ mode: 'range' }"
                  />
                </FromGroup>
              </div>
            </header>

            <div class="legend-ring">
              <apexchart
                type="bar"
                height="410"
                :options="
                  this.$store.themeSettingsStore.isDark
                    ? stackedDark.chartOptions
                    : stacked.chartOptions
                "
                :series="stacked.series"
              />
            </div>
          </Card>
        </div> -->

        <div class="lg:col-span-4 col-span-12 space-y-5">
          <Card title="業績銷售數據">
            <template #header>
              <SelectMonth />
            </template>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div class="bg-slate-50 dark:bg-slate-900 rounded pt-3 px-4">
                <div class="text-sm text-slate-600 dark:text-slate-300 mb-[6px]">
                  累計銷售金額
                </div>
                <div class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]">
                  $245,387,500
                </div>
                <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
                  <span class="text-warning-500">+10%</span>
                  比上週
                </div>
                <div class="mt-4">
                  <apexchart type="bar" height="44" :options="columnCharthome2.chartOptions"
                    :series="columnCharthome2.series" />
                </div>
              </div>
              <div class="bg-slate-50 dark:bg-slate-900 rounded pt-3 px-4">
                <div class="text-sm text-slate-600 dark:text-slate-300 mb-[6px]">
                  累計銷售數量
                </div>
                <div class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]">
                  472,423 <small>組</small>
                </div>
                <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
                  <span class="text-primary-500">+8%</span>
                  比上週
                </div>
                <div class="mt-4">
                  <apexchart type="line" height="44" :options="
                    this.$store.themeSettingsStore.isDark
                      ? areaLineDark.chartOptions
                      : areaLine.chartOptions
                  " :series="areaLine.series" />
                </div>
              </div>
              <div class="md:col-span-2 bg-slate-50 dark:bg-slate-900 rounded py-3 px-4">
                <div class="flex items-center">
                  <div class="flex-none">
                    <div class="text-sm text-slate-600 dark:text-slate-300 mb-[6px]">
                      業績金額比例
                    </div>
                    <div class="text-lg text-slate-900 dark:text-white font-medium mb-[6px]">
                      $12,335,434
                    </div>
                    <div class="font-normal text-xs text-slate-600 dark:text-slate-300">
                      <span class="text-primary-500">+38%</span>
                      比去年
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="legend-ring2">
                      <apexchart type="donut" height="200" :options="donutChartDarkComputed.chartOptions"
                        :series="donutChartDarkComputed.series" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card title="獎金發放統計">
            <template #header>
              <SelectMonth />
            </template>
            <ul class="divide-y divide-slate-100 dark:divide-slate-700">
              <li v-for="(item, i) in Bonus" :key="i" class=" text-sm  text-slate-600 dark:text-slate-300 py-2 ">
                <div class="flex justify-between">
                  <span>{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </div>
              </li>
            </ul>
          </Card>
          <Card title="自有品牌銷售業績">
            <template #header>
              <SelectMonth />
            </template>
            <ul class="divide-y divide-slate-100 dark:divide-slate-700">
              <li v-for="(item, i) in Products" :key="i" class=" text-sm  text-slate-600 dark:text-slate-300 py-2 ">
                <div class="flex justify-between">
                  <span>{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </div>
              </li>
            </ul>
          </Card>
          <Card title="合作品牌銷售業績">
            <template #header>
              <SelectMonth />
            </template>
            <ul class="divide-y divide-slate-100 dark:divide-slate-700">
              <li v-for="(item, i) in ProductsCoop" :key="i" class=" text-sm  text-slate-600 dark:text-slate-300 py-2 ">
                <div class="flex justify-between">
                  <span>{{ item.name }}</span>
                  <span>{{ item.value }}</span>
                </div>
              </li>
            </ul>
          </Card>

        </div>

      </div>

    </div>
  </div>
</template>
<script>
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Icon from "@/components/Icon";
import CrmTable from "./Analytics-Component/CrmTable";
import {
  pieChart,
  pieChartDark,
  pieChartTwo,
  pieChartDarkTwo,
  stacked,
  stackedDark,
  columnCharthome2,
  areaLineDark,
  areaLine,
  donutChart,
  donutChartDark,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import SelectMonth from "./Analytics-Component/SelectMonth";

// Import Images
import shade1 from "@/assets/images/all-img/shade-1.png"
import shade2 from "@/assets/images/all-img/shade-2.png"
import shade3 from "@/assets/images/all-img/shade-3.png"
import shade4 from "@/assets/images/all-img/shade-4.png"
import shapeImg1 from "@/assets/images/all-img/big-shap1.png";
import shapeImg2 from "@/assets/images/all-img/big-shap2.png";
import shapeImg3 from "@/assets/images/all-img/big-shap3.png";
import shapeImg4 from "@/assets/images/all-img/big-shap4.png";

export default {
  components: {
    Card,
    Button,
    Icon,
    CrmTable,
    DropEvent,
    FromGroup,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {
      stacked,
      stackedDark,
      rangeDate: null,
      pieChart,
      pieChartDark,
      pieChartTwo,
      pieChartDarkTwo,
      columnCharthome2,
      areaLineDark,
      areaLine,
      donutChart,
      donutChartDark,
      statistics: [
        {
          title: "全省",
          count1: "40,350",
          count2: "8,478",
          count3: "4,953",
          count4: "6",
          bg: "bg-red-500",
          text: "text-red-500",
          percent: "25.67% ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "高雄市",
          count1: "10,350",
          count2: "3,478",
          count3: "1,953",
          count4: "0",
          bg: "bg-teal-500",
          text: "text-primary-500",
          percent: "25.67% ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "台北市 ",
          count1: "1,837",
          count2: "686",
          count3: "282",
          count4: "0",
          bg: "bg-fuchsia-500",
          text: "text-primary-500",
          percent: "8.67%",
          icon: "heroicons:arrow-trending-up",
          img: shade2,
          percentClass: "text-primary-500",
        },
        {
          title: "新北市",
          count1: "466",
          count2: "21",
          count3: "43",
          count4: "0",
          bg: "bg-primary-500",
          text: "text-danger-500",
          percent: "1.67%  ",
          icon: "heroicons:arrow-trending-down",
          img: shade3,
          percentClass: "text-danger-500",
        },
        {
          title: "台南市",
          count1: "3,289",
          count2: "532",
          count3: "76",
          count4: "0",
          bg: "bg-sky-500",
          text: "text-primary-500",
          percent: "11.67%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade4,
          percentClass: "text-primary-500",
        },
        {
          title: "台中市",
          count1: "937",
          count2: "193",
          count3: "87",
          count4: "1",
          bg: "bg-yellow-500",
          text: "text-primary-500",
          percent: "28.32%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "桃園市",
          count1: "860",
          count2: "345",
          count3: "42",
          count4: "0",
          bg: "bg-lime-500",
          text: "text-danger-500",
          percent: "2.87%  ",
          icon: "heroicons:arrow-trending-down",
          img: shade2,
          percentClass: "text-danger-500",
        },
        {
          title: "新竹市",
          count1: "984",
          count2: "153",
          count3: "88",
          count4: "2",
          bg: "bg-amber-500",
          text: "text-primary-500",
          percent: "32.26%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade3,
          percentClass: "text-primary-500",
        },
        {
          title: "嘉義市",
          count1: "1,390",
          count2: "22",
          count3: "5",
          count4: "0",
          bg: "bg-violet-500",
          text: "text-primary-500",
          percent: "9.30%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade4,
          percentClass: "text-primary-500",
        },
        {
          title: "基隆市",
          count1: "453",
          count2: "45",
          count3: "7",
          count4: "0",
          bg: "bg-primary-500",
          text: "text-primary-500",
          percent: "30.64%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade1,
          percentClass: "text-primary-500",
        },
        {
          title: "其他行政區",
          count1: "3,974",
          count2: "321",
          count3: "34",
          count4: "0",
          bg: "bg-stone-500",
          text: "text-primary-500",
          percent: "10.89%  ",
          icon: "heroicons:arrow-trending-up",
          img: shade2,
          percentClass: "text-primary-500",
        },
      ],
      Bonus: [
        {
          name: "當月累計教育獎金",
          value: "$492,500",
        },
        {
          name: "當月累計團隊獎金",
          value: "$1,358,500",
        },
        {
          name: "營業額與發放獎金比例",
          value: "28%",
        },
      ],
      Products: [
        {
          name: "肖副總",
          value: "$9,352,500",
        },
        {
          name: "簡助理",
          value: "$6,138,500",
        },
        {
          name: "妤美人",
          value: "$1,443,000",
        },
        {
          name: "排素錠",
          value: "$425,000",
        },
        {
          name: "金秘書",
          value: "$1,345,000",
        },
        {
          name: "小鰻力",
          value: "$3,455,000",
        },
      ],
      ProductsCoop: [
        {
          name: "燕窩潔顏慕斯",
          value: "$252,500",
        },
        {
          name: "保濕精華",
          value: "$198,000",
        },
        {
          name: "靚顏精華",
          value: "$843,000",
        },
        {
          name: "抗皺精華",
          value: "$432,000",
        },
        {
          name: "亮顏乳霜",
          value: "$84,000",
        },
        {
          name: "煥顏乳霜",
          value: "$78,000",
        },
      ],
      check: true,
      agents: [
        {
          title: "全省",
          price_Yearly: "$196",
          price_Monthly: "$26",
          count1: "1,340,350",
          count2: "8,478",
          count3: "4,953",
          count4: "6",
          button: "詳細資訊",
          bg: "bg-warning-500",
          ribon: "台灣 代理人數",
          percent: "25.67% ",
          percentClass: "text-primary-500",
          textClass: "text-primary-500",
          icon: "heroicons:arrow-trending-up",
          img: shapeImg1,
        },
        {
          title: "高雄市",
          price_Yearly: "$196",
          price_Monthly: "$20",
          count1: "40,350",
          count2: "8,478",
          count3: "4,953",
          count4: "6",
          button: "詳細資訊",
          bg: "bg-info-500",
          percent: "25.67% ",
          percentClass: "text-primary-500",
          textClass: "text-primary-500",
          icon: "heroicons:arrow-trending-up",
          img: shapeImg2,
        },
        {
          title: "台北市",
          price_Yearly: "$26",
          price_Monthly: "$16",
          count1: "40,350",
          count2: "8,478",
          count3: "4,953",
          count4: "6",
          button: "詳細資訊",
          bg: "bg-success-500",
          percent: "25.67% ",
          percentClass: "text-primary-500",
          textClass: "text-primary-500",
          icon: "heroicons:arrow-trending-up",
          img: shapeImg3,
        },
        {
          title: "新北市",
          price_Yearly: "$126",
          price_Monthly: "$16",
          count1: "40,350",
          count2: "8,478",
          count3: "4,953",
          count4: "6",
          button: "詳細資訊",
          bg: "bg-primary-500",
          percent: "25.67% ",
          percentClass: "text-primary-500",
          textClass: "text-primary-500",
          icon: "heroicons:arrow-trending-up",
          img: shapeImg4,
        },
      ],
    };
  },

  computed: {
    columnCharthomeComputed() {
      return {
        series: [
          {
            name: "肖副總",
            data: [99, 33, 78, 44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "簡助理",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 56, 61, 58],
          },
          {
            name: "金秘書",
            data: [35, 41, 36, 56, 61, 58, 26, 45, 48, 52, 53, 41],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              endingShape: "rounded",
              columnWidth: "45%",
            },
          },
          legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
            fontSize: "12px",
            fontFamily: "Inter",
            offsetY: -30,
            markers: {
              width: 8,
              height: 8,
              offsetY: -1,
              offsetX: -5,
              radius: 12,
            },
            labels: {
              colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
            },
            itemMargin: {
              horizontal: 18,
              vertical: 0,
            },
          },
          title: {
            text: "∞",
            align: "left",

            offsetX: this.$store.themeSettingsStore.direction ? "0%" : 0,
            offsetY: 13,
            floating: false,
            style: {
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Inter",
              color: this.$store.themeSettingsStore.isDark ? "#fff" : "#0f172a",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          yaxis: {
            opposite: this.$store.themeSettingsStore.direction ? true : false,
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
                fontFamily: "Inter",
              },
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            labels: {
              style: {
                colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
                fontFamily: "Inter",
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },

          fill: {
            opacity: 1,
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " 萬";
              },
            },
          },
          colors: ["#4669FA", "#0CE7FA", "#FA916B"],
          grid: {
            show: true,
            borderColor: this.$store.themeSettingsStore.isDark ? "#334155" : "#E2E8F0",
            strokeDashArray: 10,
            position: "back",
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                legend: {
                  position: "bottom",
                  offsetY: 8,
                  horizontalAlign: "center",
                },
                plotOptions: {
                  bar: {
                    columnWidth: "80%",
                  },
                },
              },
            },
          ],
        },
      };
    },
    donutChartDarkComputed() {
      return {
        series: [9123453, 2378455],

        chartOptions: {
          labels: ["自有品牌", "合作品牌"],
          dataLabels: {
            enabled: false,
          },
          colors: ["#0CE7FA", "#FA916B"],
          legend: {
            position: "bottom",
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 400,
            markers: {
              width: 8,
              height: 8,
              offsetY: 0,
              offsetX: -5,
              radius: 12,
            },
            itemMargin: {
              horizontal: 18,
              vertical: 0,
            },
            labels: {
              colors: this.$store.themeSettingsStore.isDark ? "#CBD5E1" : "#475569",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "65%",
              },
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      };
    },
  },

  methods: {
    toggle() {
      this.check = !this.check;
    },
  },
};

</script>
<style lang=""></style>
