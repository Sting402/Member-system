<script setup>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import axios from "axios";

import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const checkbox = ref(false);

// const schema = yup.object({
//   account: yup
//     .string()
//     .required("Email is required")
//     .test("is-pid-or-phone", "請輸入身分證號或電話號碼", function (value) {
//       // 判斷是否為電話號碼格式或身分證字號格式
//       const idRegexp = /^[A-Z][1-2]\d{8}$/;
//       const phoneRegexp = /^09\d{8}$/;
//       return idRegexp.test(value) || phoneRegexp.test(value);
//     }),
//     otp:yup.string().required("").min(6),
//     npass:yup.string().required("").min(5),
// });

const toast = useToast();
const router = useRouter();
router.push("/login");
// const { handleSubmit } = useForm({
//   validationSchema: schema,
// });
// // No need to define rules for fields

// const { value: account, errorMessage: accountError } = useField("account");
// const { value: otp, errorMessage: otpError } = useField("otp");
// const { value: npass, errorMessage: npassError } = useField("npass");



// const onSubmit = handleSubmit(async (value) => {
//   console.log("123");
//   const arr = [];
//   arr.push(value.account);
//   const firstCharCode = arr[0].charCodeAt(0);
//   let accountType;
//   let pid;
//   let phone;
//   if (
//     (firstCharCode >= 65 && firstCharCode <= 90) ||
//     (firstCharCode >= 97 && firstCharCode <= 122)
//   ) {
//     accountType = "pid";
//   } else {
//     accountType = "phone";
//   }

//   console.log("accountType", accountType);
 

    
  
//   axios
//     .post(
//       `http://220.133.235.3:5040/api/Login/ResetPassword?pid=${pid}&&phone=${phone}`,
//       {
//         [accountType]: value.account,
//         oldpassword:value.otp,
//         newpassword:value.npass,
        
//       }
//     )

//     .then(function (response) {
//       console.log(response);
//       if (response.data.success == true) {
//         toast.success("密碼重設成功", {
//           timeout: 1000,
//         });
//         router.push("/login");
//       } else if (response.data.success == false) {
//         toast.error("密碼重設失敗", {
//           timeout: 1000,
//         });
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });
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
              
              <form @submit.prevent="onSubmit" class="space-y-4">
                <Textinput
                  label="身分證號或電話號碼"
                  type="text"
                  placeholder="請輸入身分證號或電話號碼"
                  name="account"
                  v-model="account"
                  :error="accountError"
                  classInput="h-[48px]"
                />
                <Textinput
                  label="OTP 驗證碼"
                  type="text"
                  placeholder="請輸入OTP 驗證碼"
                  name="otp"
                  v-model="otp"
                  :error="otpError"
                  classInput="h-[48px]"
                />
                <Textinput
                  label="新密碼"
                  type="text"
                  placeholder="請輸新密碼"
                  name="npass"
                  v-model="npass"
                  :error="npassError"
                  classInput="h-[48px]"
                />
                

                <button
                  type="submit"
                  @click="onSubmit"
                  class="btn btn-dark block w-full text-center"
                >
                  重設密碼
                </button>
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
.esub {
  width: 100%;
}
.confirm {
  width: 100%;
}
input {
  margin-top: 25px;
  margin-bottom: 10px;
}
</style>
