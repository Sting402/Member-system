<template>
  <div>
    <!-- <Breadcrumb /> -->
    <div class="grid grid-cols-12 gap-5 mb-5">
      <div class="2xl:col-span-3 lg:col-span-4 col-span-12">
        <div
          class="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
          :style="{
            backgroundImage:
              'url(' + widgetbg2 + ')',
          }"
        >
          <div>
            <h4 class="text-xl font-medium text-white mb-2">
              <span class="block font-normal">早安,</span>
              <span class="block">{{ span }}</span>
            </h4>
            <p class="text-sm text-white font-normal">董事</p>
          </div>
        </div>
      </div>
      <div class="2xl:col-span-9 lg:col-span-8 col-span-12">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div v-for="(item, i) in statistics" :key="i">
            <Card bodyClass="pt-4 pb-3 px-4">
              <div class="flex space-x-3 rtl:space-x-reverse">
                <div class="flex-none">
                  <div
                    class="h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl"
                    :class="`${item.bg} ${item.text}`"
                  >
                    <Icon :icon="item.icon" />
                  </div>
                </div>
                <div class="flex-1">
                  <div
                    class="text-slate-600 dark:text-slate-300 text-sm mb-1 font-medium"
                  >
                    {{ item.title }}
                  </div>
                  <div
                    class="text-slate-900 dark:text-white text-lg font-medium"
                  >
                    {{ item.count }}
                  </div>
                </div>
              </div>
              <div class="ltr:ml-auto rtl:mr-auto max-w-[124px]">
                <apexchart
                  type="area"
                  height="41"
                  width="124"
                  :options="item.name.chartOptions"
                  :series="item.name.series"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-5">
      <div class="xl:col-span-6 col-span-12">
        <Card title="我的進貨單" noborder>
          <template #header>
            <SelectMonth />
          </template>
          <Etable class="-mx-6 -mb-6" />
        </Card>
      </div>
      <div class="xl:col-span-6 col-span-12">
        <Card title="我的出貨單" noborder>
          <template #header>
            <SelectMonth />
          </template>
          <Etable class="-mx-6 -mb-6" />
        </Card>
      </div>
      <div class="2xl:col-span-12 lg:col-span-12 col-span-12">
        <Card>
          <div class="legend-ring">
            <apexchart
              type="bar"
              height="420"
              :options="columnCharthomeComputed.chartOptions"
              :series="columnCharthomeComputed.series"
            />
          </div>
        </Card>
      </div>

      <div class="xl:col-span-8 lg:col-span-7 col-span-12">
        <Card title="年度銷售業績">
          <template #header>
            <DropEvent />
          </template>
          <apexchart
            type="area"
            height="350"
            :options="
              this.$store.themeSettingsStore.isDark
                ? basicAreaDark.chartOptions
                : basicArea.chartOptions
            "
            :series="basicArea.series"
          />
        </Card>
      </div>
      <div class="xl:col-span-4 lg:col-span-5 col-span-12">
        <Card title="年度銷售分析">
          <template #header>
            <DropEvent />
          </template>
          <apexchart
            type="radar"
            height="350"
            :options="
              this.$store.themeSettingsStore.isDark
                ? radarChartDark.chartOptions
                : radarChart.chartOptions
            "
            :series="radarChart.series"
        /></Card>
      </div>
      <div class="xl:col-span-6 col-span-12">
        <!-- <Card title="Best selling products">
          <template #header>
            <DropEvent />
          </template>
          <Products />
        </Card> -->
      </div>
      <div class="xl:col-span-6 col-span-12">

      </div>

    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Customer from "./Analytics-Component/Customer";
import {ref} from 'vue'
import {
  areaLine,
  areaLineDark,
  basicArea,
  basicAreaDark,
  columnCharthome,
  columnCharthomeDark,
  columnCharthome2,
  donutChart,
  donutChartDark,
  radarChart,
  radarChartDark,
  shapeLine1,
  shapeLine2,
  shapeLine3,
  mostSales2,
} from "./Analytics-Component/data";
import DropEvent from "./Analytics-Component/DropEvent";
import Etable from "./Analytics-Component/Etable";
import Map from "./Analytics-Component/Map2";
import Products from "./Analytics-Component/Products";
import SelectMonth from "./Analytics-Component/SelectMonth";
import Breadcrumb from "./Analytics-Component/Breadcrumbs";
import widgetbg2 from "@/assets/images/all-img/widget-bg-2.png"
export default {
  components: {
    Card,
    Etable,
    Map,
    Customer,
    Products,
    Icon,
    DropEvent,
    SelectMonth,
    Breadcrumb,
  },
  data() {
    return {
      mostSales2,
      columnCharthome,
      columnCharthomeDark,
      columnCharthome2,
      fillterMap: "usa",
      areaLine,
      areaLineDark,
      basicArea,
      basicAreaDark,
      donutChart,
      donutChartDark,
      radarChart,
      radarChartDark,
      widgetbg2,
      statistics: [
        {
          name: shapeLine2,
          title: "當月業績金額",
          count: "$876,342",
          bg: "bg-[#FFEDE6] dark:bg-slate-900	",
          text: "text-warning-500",
          icon: "heroicons:cube",
        },
        {
          name: shapeLine3,
          title: "當年業績金額",
          count: "$1,423,535",
          bg: "bg-[#EAE6FF] dark:bg-slate-900	",
          text: "text-[#5743BE]",
          icon: "heroicons:arrow-trending-up-solid",
        },
        {
          name: shapeLine1,
          title: "歷史業績金額",
          count: "$3,453,564",
          bg: "bg-[#E5F9FF] dark:bg-slate-900	",
          text: "text-info-500",
          icon: "heroicons:shopping-cart",
        },
      ],
      activity: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 6,
        },
        {
          id: 6,
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
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 99, 54, 34],
          },
          {
            name: "簡助理",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 119, 55],
          },
          {
            name: "妤美人",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 56, 35, 26],
          },
          {
            name: "排宿錠",
            data: [48, 52, 53, 41 ,36, 26, 45, 35, 41, 90, 54, 32],
          },
          {
            name: "金秘書",
            data: [35, 41, 90, 54, 32, 48, 52, 53, 41 ,36, 26, 45, ],
          },
          {
            name: "小鰻力",
            data: [90, 54, 32, 48, 26, 45, 35, 41, 52, 53, 41 ,36 ],
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
            text: "年度商品銷售數據",
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
              "Dec"
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
          colors: ["#4669FA", "#0CE7FA", "#FA916B", "#ADC0B4", "#8A7E66", "#E36E40"],
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
        series: [44, 55],

        chartOptions: {
          labels: ["success", "Return"],
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
  setup(){
    const x = JSON.parse(localStorage.getItem("login-info"));
    // console.log(x.mname);
    const name = x.mname
    console.log(name);
const span = ref('');
span.value=(name);


     
  
  

    return {
      span,
    }
  },
};
</script>
<style></style>
