<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import axios from "axios";

import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

//設定驗證
const schema = yup.object({});
const toast = useToast();
const router = useRouter();

//使用驗證
const { handleSubmit } = useForm({
  validationSchema: schema,
});
// No need to define rules for fields
const holder = JSON.parse(localStorage.getItem("login-info"));

// console.log("PH", holder.phone);

//寄送 OTP 按鈕功能
const onSubmit = handleSubmit(async (_) => {
  // console.log("PH", holder);
  let phone;
  axios
    .post(
      // Add missing closing parenthesis ")"
      `http://220.133.235.3:5040/api/Register/SendOTPtoMail?phone=${phone}`,
      {
        phone: holder.phone,
      }
    )
    .then(function (response) {
      // console.log(response);
      if (response.data.success == true) {
        router.push("/otpcon");
        toast.success("OPT 信件寄送成功", {
          timeout: 2000,
        });
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

const startCountdown = handleSubmit(async (_) => {
  let phone;

  axios
    .post(
      `http://220.133.235.3:5040/api/Register/SendOTPtoMail?phone=${phone}`,
      {
        phone: holder.phone,
      }
    )

    .then(function (response) {
      // console.log(response);
      if (response.data.success == true) {
        router.push("/otpcon");
        toast.success("OPT 成功寄送", {
          timeout: 2000,
        });
      } else if (response.data.success == false) {
        toast.error("失敗，請確認帳號", {
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
              <form @submit.prevent="onSubmit" class="space-y-4">
                <label for="span" class="label">你的電話</label>
                <div class="case">
                  <span class="span">
                    {{ holder.phone }}
                  </span>
                </div>

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
.case {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.255);
  padding: 10px;
  border-radius: 4px;
}
.span {
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 20px;
}
.label {
  font-size: 20px;
  font-weight: bold;
}
</style>
