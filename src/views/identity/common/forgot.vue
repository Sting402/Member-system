<script setup>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import axios from "axios";

import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const checkbox = ref(false);

const schema = yup.object({
  account: yup
    .string()
    .required("Email is required")
    .test("is-pid-or-phone", "請輸入身分證號或電話號碼", function (value) {
      // 判斷是否為電話號碼格式或身分證字號格式
      const idRegexp = /^[A-Z][1-2]\d{8}$/;
      const phoneRegexp = /^09\d{8}$/;
      return idRegexp.test(value) || phoneRegexp.test(value);
    }),
});

const toast = useToast();
const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: schema,
});
// No need to define rules for fields

const { value: account, errorMessage: accountError } = useField("account");

const onSubmit = handleSubmit(async (value) => {
  console.log("123");
  const arr = [];
  arr.push(value.account);
  const firstCharCode = arr[0].charCodeAt(0);
  let accountType;
  let pid;
  let phone;
  if (
    (firstCharCode >= 65 && firstCharCode <= 90) ||
    (firstCharCode >= 97 && firstCharCode <= 122)
  ) {
    accountType = "pid";
  } else {
    accountType = "phone";
  }

  console.log("accountType", accountType);

  axios
    .post(
      `http://220.133.235.3:5040/api/Login/ForgetPassword?pid=${pid}&&phone=${phone}`,
      {
        [accountType]: value.account,
      }
    )

    .then(function (response) {
      console.log(response);
      if (response.data.success == true) {
        toast.success("OPT 信件寄送成功", {
          timeout: 2000,
        });
        router.push("/reset");
      } else if (response.data.success == false) {
        toast.error("OTP 信件寄送失敗", {
          timeout: 1000,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//重新寄送按鈕功能
const countdownActive = ref(false);
const buttonText = ref("重新寄送");
let countdownInterval;

const startCountdown = handleSubmit(async (value) => {
  const arr = [];
  arr.push(value.account);
  const firstCharCode = arr[0].charCodeAt(0);
  let accountType;
  let pid;
  let phone;
  if (
    (firstCharCode >= 65 && firstCharCode <= 90) ||
    (firstCharCode >= 97 && firstCharCode <= 122)
  ) {
    accountType = "pid";
  } else {
    accountType = "phone";
  }
  axios
    .post(
      `http://220.133.235.3:5040/api/Login/ForgetPassword?pid=${pid}&&phone=${phone}`,
      {
        [accountType]: value.account,
      }
    )

    .then(function (response) {
      console.log(response);
      if (response.data.success == true) {
        toast.success("OPT 成功寄送", {
          timeout: 2000,
        });
      } else if (response.data.success == false) {
        toast.error("失敗，請確認帳號", {
          timeout: 1000,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .catch(function (error) {
      console.log(error);
    });

  let timeLeft = 60;
  countdownActive.value = true;

  countdownInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownActive.value = false;
      buttonText.value = "重新寄送";
    } else {
      buttonText.value = `已重新寄送 OTP (${timeLeft}s)`;
      timeLeft--;
    }
  }, 1000);
});
</script>
<template>
  <div
    class="hero-static col-lg-12 d-flex flex-column align-items-center bg-body-extra-light"
  >
    <div class="w-100">
      <div class="bg-body-extra-light">
        <div class="content content-full">
          <div class="row g-0 justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">
              <!-- <div class="text-center">
                <p class="mb-3">
                  請輸入您的帳號，我們將把認證碼發送至您的Email。
                </p>
              </div> -->
              <form @submit.prevent="onSubmit" class="space-y-4">
                <Textinput
                  label="帳號"
                  type="text"
                  placeholder="請輸入身分證號或電話號碼"
                  name="account"
                  v-model="account"
                  :error="accountError"
                  classInput="h-[48px]"
                />
                <div class="flex">
                  <button
                    type="submit"
                    @click="onSubmit"
                    class="btn btn-dark block w-half text-center btn1"
                  >
                    寄送驗證信
                  </button>
                  <button
                    @click="startCountdown"
                    :disabled="countdownActive"
                    class="btn btn-dark block w-half text-center btn2"
                  >
                    {{ buttonText }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// SweetAlert2
@import "sweetalert2/dist/sweetalert2.min.css";
.flex {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.btn1 {
  flex: 1;
}
.btn2 {
  flex: 1;
}
</style>
