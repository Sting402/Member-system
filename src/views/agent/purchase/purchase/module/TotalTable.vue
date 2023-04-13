<template>
  <div>
    <table
      class="w-full border-collapse table-fixed dark:border-slate-700 dark:border"
    >
      <tr>
        <th width="50"><span></span></th>
        <th><span>購買品項</span></th>
        <th><span>單價</span></th>
        <th><span>數量</span></th>
        <th><span>已出貨</span></th>
        <th><span>小計</span></th>
      </tr>

      <tr
        v-show="rows.length"
        v-for="(data, index) in rows"
        :key="index"
        class="border-b border-slate-100 dark:border-slate-700"
      >
        <td>
          {{ index+1 }}
        </td>
        <td>
          {{ data.item }}
        </td>
        <td>
          {{ data.price }}
        </td>
        <td>
          {{ data.qty }} 組
        </td>
        <td>
          {{ data.qtyship }} 組
        </td>
        <td>
          {{ data.total }}
        </td>
      </tr>
    </table>
    <div class="md:flex px-6 py-6 items-center">
      <div class="flex-1 text-slate-500 dark:text-slate-300 text-sm">
        <!-- Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit <br />
        officia consequat duis enim velit mollit. -->
      </div>
      <div class="flex-none min-w-[270px] space-y-3">
        <div class="flex justify-between">
          <span
            class="font-medium text-slate-600 text-s dark:text-slate-300 uppercase"
            >小計:</span
          >
          <span class="text-slate-900 dark:text-slate-300">$19900</span>
        </div>
        <div class="flex justify-between">
          <span
            class="font-medium text-slate-600 text-s dark:text-slate-300 uppercase"
            >運費:</span
          >
          <span class="text-slate-900 dark:text-slate-300">$70</span>
        </div>
        <div class="flex justify-between">
          <span
            class="font-medium text-slate-600 text-s dark:text-slate-300 uppercase"
            >總計:</span
          >
          <span class="text-slate-900 dark:text-slate-300 font-bold"
            >$19970</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const rows = ref([
  {
    item: "肖副總",
    qty: 10,
    qtyship: 10,
    price: "$1450",
    total: "$14500",
  },
  {
    item: "簡助理",
    qty: 10,
    qtyship: 10,
    price: "$290",
    total: "$2900",
  },
  {
    item: "妤美人",
    qty: 5,
    qtyship: 5,
    price: "$500",
    total: "$2500",
  }
]);
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
</style>
