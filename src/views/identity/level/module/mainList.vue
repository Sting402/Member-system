<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useSignupstore } from "../../../../store/Signup-agent/Signup-agent";
import { inject } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useSignupstore();
let data = reactive(JSON.parse(localStorage.getItem("data")));
let rows = ref(data);

watch(
  () => store.lvlData,
  (newValue) => {
    if (newValue) {
      data = JSON.parse(localStorage.getItem("data"));
      rows.value = data;
    }
    calculate();
  }
);

function saveTableData() {
  localStorage.setItem("tableData", JSON.stringify(data));
  localStorage.setItem("total", JSON.stringify(total.value));
  store.Total = total.value;
  console.log("total", store.Total);
}

function calculate(item) {
  return computed(() => {
    saveTableData(); 
    item.amount = item.unit * item.price;
    saveTableData(); 
    return item.unit * item.price;
  });
}
const rowsComputed = computed(() => {
  return rows.value;
});
//
const total = computed(() => {
  if (rowsComputed.value) {
    return rowsComputed.value.reduce((acc, item) => {
      return acc + (calculate(item).value || 0);
    }, 0);
  }

  });
const Swal = inject("$swal");
let toast = Swal.mixin({
  buttonsStyling: false,

  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
});

const onSubmit = async () => {
  try {
    const x = JSON.parse(localStorage.getItem("login-info"));
    const mid = x.mid;
    const parent = x.parent;
    console.log("mid", mid);
    const response = await axios.post(
      "http://220.133.235.3:5040/api/Register/SaveUpgradeOrder",
      {
        mid: mid,
        ordertype: "2",
        level: store.isLevel,
        amount: total.value,
        parent: parent,
        status: "1",
        items: rows.value,
      }
    );
    if (response.data.success) {
      saveTableData()
      const msg = response.data.message;
      toast.fire("成功", msg, "success");
      router.push("/yuvog-agent/pending");
    } else if (response.status === 200 && response.data.success === false) {
      const msg = response.data.message;
      // console.log("msg", msg);
      toast.fire("錯誤", msg, "error");
    } else {
      const msg = response.data.message;
      // console.log("msg", msg);
      toast.fire("錯誤", msg, "error");
    }
  } catch (error) {
    console.log(error);
  }
};
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
        v-for="(data, index) in rowsComputed"
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
  <div class="btn-contain">
    <button type="submit" class="submit" @click="onSubmit">送出訂單</button>
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
