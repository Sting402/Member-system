<script setup>
import Textinput from "@/components/Textinput";
import axios from "axios";
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import * as yup from "yup";

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
  password: yup.string().required("請輸入密碼").min(5, "密碼為五位數"),
});

const toast = useToast();
const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: schema,
});
// No need to define rules for fields

const { value: account, errorMessage: accountError } = useField("account");

const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit(async (value) => {
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
      `http://220.133.235.3:5040/api/Login/Login?pid=${pid}&&phone=${phone}`,
      {
        [accountType]: value.account,
        password: value.password,
      }
    )

    .then(function (response) {
      const a = JSON.stringify(response.data.payload);

      localStorage.setItem("login-info", a);
      sessionStorage.setItem("login-info", a);
      if (response.data.success == true) {
        // console.log("login-info", a);
        const x = JSON.parse(sessionStorage.getItem("login-info"));
        console.log("status", x.status);
        if (x.level > 7) {
          router.push("/yuvog-agent/admin");
        } else if (x.status === 0) {
          router.push("/OTPval");
        } else {
          router.push("/yuvog-agent/agent-office");
        }
        toast.success("頁面跳轉中", {
          timeout: 2000,
        });
      } else if (response.data.success == false) {
        toast.error("登入失敗", {
          timeout: 2000,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
<template>
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
    <Textinput
      label="密碼"
      type="password"
      placeholder="請輸入密碼"
      name="password"
      v-model="password"
      :error="passwordError"
      hasicon
      classInput="h-[48px]"
    />

    <div class="flex justify-between">
      <label class="cursor-pointer flex items-start">
        <input
          type="checkbox"
          class="hidden"
          @change="() => (checkbox = !checkbox)"
        />
      </label>
      <router-link
        to="/forgot-password"
        class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >忘記密碼?</router-link
      >
    </div>

    <button type="submit" class="btn btn-dark block w-full text-center">
      登入
    </button>
  </form>
</template>
