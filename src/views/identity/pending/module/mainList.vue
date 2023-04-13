<script setup>
import { reactive, ref } from "vue";
import { useSignupstore } from "../../../../store/Signup-agent/Signup-agent";

const store = useSignupstore();
let data = reactive(JSON.parse(localStorage.getItem("tableData")));
let rows = ref(data);
const total = reactive(JSON.parse(localStorage.getItem("total")));;
</script>

<template>
  <div>
    <table class="table-styles">
      <tr>
        <th width="50"><span></span></th>
        <th><span>品名</span></th>
        <th><span>單價</span></th>
        <th><span>數量</span></th>
        <th><span>小計</span></th>
      </tr>
      <tr
        class="row-styles"
        v-show="rows.length"
        v-for="(data, index) in rows"
        :key="index"
      >
        <td class="cell-styles">{{ index + 1 }}</td>
        <td class="cell-styles">{{ data.mp_name }}</td>
        <td>${{ data.price }}</td>
        <td>
          <input
            type="number"
            min="0"
            v-model.number="data.unit"
            @change="calculate(data)"
            placeholder="0"
            readonly
          />
        </td>
        <td class="cell-styles">${{ data.amount || 0 }}</td>
      </tr>
    </table>
    <div class="md:flex px-6 py-6 items-center">
      <div class="text-styles"></div>
      <div class="flex justify-between">
        <span class="total-styles">總計:</span>
        <span class="total-amount-styles">${{ total }}</span>
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
.table-styles {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.row-styles {
  border-bottom: 1px solid #cbd5e0;
  border-bottom: 1px solid rgba(55, 65, 81, 0.1);
}

.cell-styles {
  padding: 0.75rem;
  text-align: left;
}

.text-styles {
  flex: 1;
  color: #4a5568;
  font-size: 0.875rem;
}

.total-styles {
  font-weight: 500;
  text-transform: uppercase;
  color: #718096;
  color: #a0aec0;
}

.total-amount-styles {
  color: #1a202c;
  font-weight: bold;
}
.submit {
  border: 1px solid black;
  border-radius: 4px;
  background-color: black;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
}
.btn-contain {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
