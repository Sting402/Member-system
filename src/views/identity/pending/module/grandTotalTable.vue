<script setup>
import { computed } from "vue";

const table1 = JSON.parse(localStorage.getItem("tableData1")) || [];

const combinedRows = computed(() => {
  const rows = [...table1];
  return rows.filter((row) => row.qty !== 0);
});

const total = computed(() => {
  let sum = 0;
  combinedRows.value.forEach((row) => {
    sum += row.total;
  });
  return sum;
});

// 
</script>

<template>
  <div>
    <h4>主商品購物車預覽</h4>
    <table
      class="w-full border-collapse table-fixed dark:border-slate-700 dark:border vgt-compact"
    >
      <thead>
        <tr>
          <th>品名</th>
          <th>數量</th>
          <th>價格</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in combinedRows"
          :key="row.item"
          class="border-b border-slate-100 dark:border-slate-700"
        >
          <td>{{ row.item }}</td>
          <td>
            <input
              type="number"
              v-model.number="row.qty"
              min="0"
              @input="calculateTotal(row)"
              readonly
            />
          </td>
          <td>${{ row.price }}</td>
          <td>${{ row.total }}</td>
        </tr>
      </tbody>
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

<style lang="scss" scoped>
th {
  @apply bg-slate-50 dark:bg-slate-700 dark:text-slate-300 text-xs  font-medium leading-4 uppercase text-slate-600 ltr:text-left ltr:last:text-right rtl:text-right rtl:last:text-left;
  > span {
    @apply block px-6 py-5 font-semibold;
  }
}
th {
  padding: 15px;
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
h4 {
  margin-bottom: 25px;
}
</style>
