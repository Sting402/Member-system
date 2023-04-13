<template>
  <div>
    <table
      class="w-full border-collapse table-fixed dark:border-slate-700 dark:border vgt-compact"
    >
      <tr>
        <th width="50"><span></span></th>
        <th><span>品名</span></th>
        <th><span>單價</span></th>
        <th><span>數量</span></th>
        <th><span>小計</span></th>
      </tr>

      <tr
        v-show="rows.length"
        v-for="(data, index) in rows"
        :key="index"
        class="border-b border-slate-100 dark:border-slate-700"
      >
        <td>
          {{ index + 1 }}
        </td>
        <td>
          {{ data.item }}
        </td>
        <td>${{ data.price }}</td>
        <td>
          <input
            type="number"
            min="0"
            v-model="data.qty"
            @change="calculateTotal(data)"
            readonly
          />
        </td>
        <td>${{ data.total }}</td>
      </tr>
    </table>
    <div class="md:flex px-6 py-6 items-center">
      <div class="flex-1 text-slate-500 dark:text-slate-300 text-sm">
        <!-- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit <br />
        officia consequat duis enim velit mollit. -->
      </div>
      <div class="flex justify-between">
        <span
          class="font-medium text-slate-600 text-s dark:text-slate-300 uppercase"
          >總計:</span
        >
        <span class="text-slate-900 dark:text-slate-300 font-bold"
          >${{ total }}</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useSignupstore} from '../../../../store/Signup-agent/Signup-agent'
const store = useSignupstore()

const rows = ref([]);
// Load the saved table data from localStorage, if available
if (localStorage.getItem("tableData1")) {
  rows.value = JSON.parse(localStorage.getItem("tableData1"));
} else {
  // If there's no saved data, initialize the rows with default values
  rows.value = [
    {
      item: "潔顏慕斯",
      qty: 0,
      price: 280,
      total: 0,
    },
    {
      item: "1號-保濕精華",
      qty: 0,
      price: 800,
      total: 0,
    },
    {
      item: "2號-美白精華",
      qty: 0,
      price: 800,
      total: 0,
    },
    {
      item: "3號-抗皺精華",
      qty: 0,
      price: 800,
      total: 0,
    },
    {
      item: "4號-亮顏乳霜",
      qty: 0,
      price: 900,
      total: 0,
    },
    {
      item: "5號-煥彩乳霜",
      qty: 0,
      price: 900,
      total: 0,
    },
    {
      item: "NANA霜",
      qty: 0,
      price: 450,
      total: 0,
    },
    {
      item: "燕窩蜂王乳面膜(亮白)",
      qty: 0,
      price: 370,
      total: 0,
    },
    {
      item: "燕窩蜂王乳面膜(修復)",
      qty: 0,
      price: 370,
      total: 0,
    },
    {
      item: "肖副總",
      qty: 0,
      price: 1450,
      total: 0,
    },
    {
      item: "簡助理(紅茶)",
      qty: 0,
      price: 290,
      total: 0,
    },
    {
      item: "簡助理(金萱綠茶)",
      qty: 0,
      price: 290,
      total: 0,
    },
    {
      item: "妤清茶",
      qty: 0,
      price: 160,
      total: 0,
    },
    {
      item: "燕窩Q彈力膠原胜肽",
      qty: 0,
      price: 500,
      total: 0,
    },
    {
      item: "排宿錠",
      qty: 0,
      price: 290,
      total: 0,
    },
    {
      item: "生命之泉raffinee",
      qty: 0,
      price: 3000,
      total: 0,
    },
  ];
}

const total = computed(() => {
  let sum = 0;
  rows.value.forEach((row) => {
    sum += row.total;
  });
  return sum;
});

function calculateTotal(data) {
  data.total = data.qty * data.price;
  saveTableData();
}

function saveTableData() {
  localStorage.setItem("tableData1", JSON.stringify(rows.value));
  store.requiredTotal = total.value
  console.log("total",store.requiredTotal);
}
</script>

<style lang="scss" scoped>
th {
  @apply bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left;
  > span {
    @apply block px-6 py-5 font-semibold;
  }
}

td {
  @apply text-slate-900 dark:text-slate-300 text-sm  font-normal ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left px-6 py-4;
}
input {
  width: 75px;
  text-align: center;
  padding: 5px;
  margin-left: -15px;
  padding-left: 2px;
  border: 1px solid rgba(0, 0, 0, 0.152);
  border-radius: 4px;
}
</style>
