<script setup>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import axios from "axios";
import Button from "@/components/Button";
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
  otp: yup.string().required("請輸入驗證碼").min(6, 'OTP碼最少六位數'),
  npass: yup.string().required("請輸入密碼").min(5, '密碼最少五位數'),
  cpass: yup
    .string()
    .required("請確認密碼")
    .oneOf([yup.ref("npass")], "密碼不一致"),
});

const toast = useToast();
const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: schema,
});
// No need to define rules for fields

const { value: account, errorMessage: accountError } = useField("account");
const { value: otp, errorMessage: otpError } = useField("otp");
const { value: npass, errorMessage: npassError } = useField("npass");
const { value: cpass, errorMessage: cpassError } = useField("cpass");

const onSubmitreset = handleSubmit(async (value) => {
  
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
      `http://220.133.235.3:5040/api/Login/ResetPassword?pid=${pid}&&phone=${phone}`,
      {
        [accountType]: value.account,
        oldpassword: value.otp,
        newpassword: value.npass,
      }
    )

    .then(function (response) {
      console.log(response);
      if (response.data.success == true) {
        router.push("/login");
        toast.success("密碼更新成功", {
          timeout: 2000,
        });
      } else if (response.data.success == false) {
        toast.error("密碼更新失敗", {
          timeout: 2000,
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
</script>
<template>
  <form @submit.prevent="onSubmitreset" class="space-y-4">
    <div
      class="hero-static col-lg-12 d-flex flex-column align-items-center bg-body-extra-light"
    >
      <div class="w-100">
        <div class="bg-body-extra-light">
          <div class="content content-full">
            <div class="row g-0 justify-content-center">
              <div class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">
                <Textinput
                  label="身分證號或電話號碼"
                  type="text"
                  placeholder="請輸入身分證號或電話號碼"
                  name="account"
                  v-model="account"
                  :error="accountError"
                  classInput="h-[48px]"
                  class="input"
                />
                <Textinput
                  label="OTP 驗證碼"
                  type="text"
                  placeholder="請輸入OTP 驗證碼"
                  name="otp"
                  v-model="otp"
                  :error="otpError"
                  classInput="h-[48px]"
                  class="input"
                />
                <Textinput
                  label="新密碼"
                  type="Password"
                  placeholder="請輸新密碼"
                  name="npass"
                  v-model="npass"
                  :error="npassError"
                  classInput="h-[48px]"
                  class="input"
                />
                <Textinput
                  label="確認新密碼"
                  type="Password"
                  placeholder="請確認密碼"
                  name="cpass"
                  v-model="cpass"
                  :error="cpassError"
                  classInput="h-[48px]"
                  class="input"
                />

                <button
                  type="submit"
                  @click="onSubmit"
                  class="btn btn-dark block w-full text-center"
                >
                  重設密碼
                </button>
                <!-- <div class="grid grid-cols-1 gap-5 mt-6">
                  <Button
                    text="重設密碼"
                    class="btn btn-dark block w-full text-center"
                    type="submit"
                  />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
// SweetAlert2
@import "sweetalert2/dist/sweetalert2.min.css";
.input {
  margin-bottom: 30px;
}
.btn-dark {
  background-color: black;
}
</style>
