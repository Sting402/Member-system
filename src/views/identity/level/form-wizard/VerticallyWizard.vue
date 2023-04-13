<template>
  <div>
    <div class="flex z-[5] items-center relative justify-center md:mx-8">
      <div
        class="relative z-[1] items-center item flex flex-start flex-1 group"
        v-for="(item, i) in steps"
        :key="i"
      >
        <div
          :class="`   ${
            stepNumber >= i
              ? 'bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900'
              : 'bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70'
          }`"
          class="transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium"
        >
          <span v-if="stepNumber <= i"> {{ i + 1 }}</span>
          <span v-else class="text-3xl">
            <Icon icon="bx:check" />
          </span>
        </div>

        <div
          class="absolute top-1/2 h-[2px] w-full"
          :class="
            stepNumber >= i
              ? 'bg-slate-900 dark:bg-slate-900'
              : 'bg-[#E0EAFF] dark:bg-slate-700'
          "
        ></div>

        <div
          class="absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100"
          :class="
            stepNumber >= i
              ? ' text-slate-900 dark:text-slate-300'
              : 'text-slate-500 dark:text-slate-300 dark:text-opacity-40'
          "
        >
          <span class="w-max">{{ item.title }}</span>
        </div>
      </div>
    </div>

    <div
      class="conten-box mt-14 border-t border-slate-100 dark:border-slate-700 -mx-6 px-6 pt-6"
    >
      <form @submit.prevent="submit">
        <div v-if="stepNumber === 0">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1"></div>
            <div class="case">
              <label for="span" class="label1">姓名</label>
              <span class="span">
                {{ mname }}
              </span>
            </div>
          </div>
          <div class="step1">
            <TotalTable />
          </div>
        </div>
        <div v-if="stepNumber === 1">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1"></div>
            <div class="case">
              <label for="span" class="label1">姓名</label>
              <span class="span">
                {{ mname }}
              </span>
            </div>
          </div>
          <div class="step1">
            <supTotalTable />
          </div>
        </div>
        <div v-if="stepNumber === 2">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
              <label for="span" class="label1">會員資訊</label>
            </div>
            <div class="case">
              <label for="span" class="label">會員編碼</label>
              <span class="span">
                {{ mid }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">姓名</label>
              <span class="span">
                {{ mname }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">電話</label>
              <span class="span">
                {{ phone }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">E-Mail</label>
              <span class="span">
                {{ email }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">上級代理</label>
              <span class="span">
                {{ email }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">訂單日期</label>
              <span class="span"> {{ currentDate }} </span>
            </div>
            <div class="case">
              <label for="span" class="label">訂單類型</label>
              <span class="span"> 入會訂單 </span>
            </div>
          </div>
          <div class="step1">
            <payment />
          </div>
        </div>
        <div v-if="stepNumber === 3">
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div class="lg:col-span-3 md:col-span-2 col-span-1">
              <label for="span" class="label1">確認訂單</label>
            </div>
            <div class="case">
              <label for="span" class="label">會員編碼</label>
              <span class="span">
                {{ mid }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">姓名</label>
              <span class="span">
                {{ mname }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">電話</label>
              <span class="span">
                {{ phone }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">E-Mail</label>
              <span class="span">
                {{ email }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">上級代理</label>
              <span class="span">
                {{ email }}
              </span>
            </div>
            <div class="case">
              <label for="span" class="label">訂單日期</label>
              <span class="span"> {{ currentDate }} </span>
            </div>
            <div class="case">
              <label for="span" class="label">訂單類型</label>
              <span class="span"> 入會訂單 </span>
            </div>
          </div>
          <div class="step1">
            <subgrandTotalTable />
            <grandTotalTable />
          </div>
        </div>

        <div
          class="mt-10"
          :class="stepNumber > 0 ? 'flex justify-between' : ' text-right'"
        >
          <Button
            @click.prevent="prev()"
            text="上一步"
            btnClass="btn-dark"
            v-if="this.stepNumber !== 0"
          />
          <Button
            :text="submitButtonText"
            :disabled="isSubmitDisabled"
            btnClass="btn-dark"
            type="submit"
            @click.prevent="submit()"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import { ref, onMounted, computed } from "vue";
import { useToast } from "vue-toastification";
import TotalTable from "../module/mainList.vue";
import supTotalTable from "../module/supList.vue";
import grandTotalTable from "../module/mainCheckout.vue";
import subgrandTotalTable from "../module/supCheckout.vue";
import payment from "../module/payment.vue";
import { useSignupstore } from "../../../../store/Signup-agent/Signup-agent";
import axios from "axios";
import { useRouter } from "vue-router";
const store = useSignupstore();

export default {
  components: {
    Button,
    Icon,
    Textinput,
    InputGroup,
    Textarea,
    TotalTable,
    supTotalTable,
    grandTotalTable,
    subgrandTotalTable,
    payment,
  },

  setup() {
    let steps = [
      {
        id: 1,
        title: "入代等級購物清單",
      },
      {
        id: 2,
        title: "輔助銷售商品(選購)",
      },
      {
        id: 3,
        title: "付款資訊",
      },
      {
        id: 4,
        title: "等待確認",
      },
    ];
    const toast = useToast();
    let stepNumber = ref(0);
    const info = JSON.parse(localStorage.getItem("login-info"));
    const mname = info.mname;
    const parent = info.parent;
    const phone = info.phone;
    const email = info.email;
    const mid = info.mid;
    const acc = info.deposit;

    const submitButtonText = computed(() => {
      const totalSteps = steps.length;
      const isLastStep = stepNumber.value === totalSteps - 1;
      const requiredTotal = Number(store.requiredTotal); // Convert to number
      const remainingAmount = 20000 - requiredTotal;
      if (isLastStep) {
        if (remainingAmount > 0) {
          return `仍需 $${remainingAmount} 才能送出`;
        } else {
          return "送出訂單";
        }
      } else {
        return "下一步";
      }
    });
    const isSubmitDisabled = computed(() => {
      const totalSteps = steps.length;
      const isLastStep = stepNumber.value === totalSteps - 1;
      const requiredTotal = parseInt(store.requiredTotal);
      const remainingAmount = 20000 - requiredTotal;
      return isLastStep && remainingAmount > 0;
    });

    const router = useRouter();
    const submit = async () => {
      try {
        const totalSteps = steps.length;
        const isLastStep = stepNumber.value === totalSteps - 1;
        const requiredTotal = Number(store.requiredTotal); // Convert to number
        const remainingAmount = 20000 - requiredTotal;
        const x = JSON.parse(localStorage.getItem("login-info"));
        const mid = x.mid;
        console.log("mid", mid);

        if (isLastStep) {
          const response = await axios.post(
            "http://220.133.235.3:5040/api/Register/SaveUpgradeOrder",
            {
              mid: mid,
              ordertype: "2",
              level: 2,
              amount: requiredTotal,
              status: "1",
            }
          );

          router.push("/yuvog-agent/pending");
          console.log(response.data);
          toast.success("成功送出");
        }

        if (!isLastStep) {
          stepNumber.value++;
        }
      } catch (error) {
        console.log(error);
        toast.error("出了錯誤，請稍後嘗試");
      }
    };

    const prev = () => {
      stepNumber.value--;
    };

    //get date
    const currentDate = ref("");

    const updateDate = () => {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      currentDate.value = `${month}/${day}/${year}`;
      localStorage.setItem("date", currentDate.value);
    };

    onMounted(() => {
      setInterval(updateDate, 1000);
    });

    return {
      currentDate,
      submit,
      steps,
      stepNumber,
      prev,
      TotalTable,
      mname,
      phone,
      parent,
      email,
      mid,
      acc,
      submitButtonText,
      isSubmitDisabled,
    };
  },
};
</script>
<style lang="scss" scoped>
.step1 {
  margin-top: 100px;
}
.case {
  display: flex;
  flex-direction: column;
}
.label {
  margin-bottom: 10px;
}
.label1 {
  margin-bottom: 10px;
  font-size: large;
  font-weight: bold;
  margin-left: 15px;
}
.span {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.101);
  padding: 8px;
  padding-left: 12px;
  border-radius: 4px;
}
</style>
