<script setup>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import axios from "axios";
import Button from "@/components/Button";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const schema = yup.object({
  // otp: yup.string().required("請輸入驗證碼").min(6),
});

const toast = useToast();
const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: schema,
});
// No need to define rules for fields

const { value: otp, errorMessage: otpError } = useField("otp");

const onSubmitreset = handleSubmit(async (value) => {
  const loginInfo = JSON.parse(localStorage.getItem("login-info"));

  const isGenerally = loginInfo.level === 1;
  console.log("mid", loginInfo.mid);
  console.log("lvl", loginInfo.level);
  console.log("role", isGenerally);
  console.log("otp", value.otp);

  axios
    .post(`http://220.133.235.3:5040/api/Register/VaildateMail`, {
      mid: loginInfo.mid,
      otp: value.otp,
      isGenerally,
    })

    .then(function (response) {
      console.log(response);
      if (response.data.success == true) {
        const a = JSON.stringify(response.data.payload);
        sessionStorage.setItem("login-info", a);
        console.log(a);
        // router.push("/Yuvog-agent/agent-office");
        router.push("/Yuvog-agent/admin");
        // router.push ("/login")
        toast.success("OTP驗證成功", {
          timeout: 2000,
        });
      } else if (response.data.success == false) {
        router.push("/otpval");
        toast.error("OTP驗證失敗", {
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
  <!-- <form @submit.prevent="onSubmitreset" class="space-y-4"> -->
  <div
    class="hero-static col-lg-12 d-flex flex-column align-items-center bg-body-extra-light"
  >
    <div class="w-100">
      <div class="bg-body-extra-light">
        <div class="content content-full">
          <div class="row g-0 justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">
              <!-- <Textinput
                  label="身分證號或電話號碼"
                  type="text"
                  placeholder="請輸入身分證號或電話號碼"
                  name="account"
                  v-model="account"
                  :error="accountError"
                  classInput="h-[48px]"
                  class="input"
                /> -->
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
              <!-- <Textinput
                  label="密碼"
                  type="text"
                  placeholder="請輸密碼"
                  name="npass"
                  v-model="npass"
                  :error="npassError"
                  classInput="h-[48px]"
                  class="input"
                /> -->

              <button
                type="submit"
                @click="onSubmitreset"
                class="btn btn-dark block w-full text-center"
              >
                確認驗證碼
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
  <!-- </form> -->
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
