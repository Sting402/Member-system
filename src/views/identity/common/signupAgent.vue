<script setup>
import { ref } from "vue";
import Textinput from "@/components/Textinput";
import Button from "@/components/Button";
import Fileinput from "../../../components/Signup-agent/filefront.vue";
import fileback from "../../../components/Signup-agent/fileback.vue";
import axios from "axios";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { inject } from "vue";
import { useRouter } from "vue-router";
import { useSignupstore } from "../../../store/Signup-agent/Signup-agent";
import VueDatePicker from "@vuepic/vue-datepicker";
import refer from "../../../components/Signup-agent/Refer/refer.vue";
import selectAddr from "../../../components/Signup-agent/selectAddr.vue";

const store = useSignupstore();

// Define a validation schema
const schema = yup.object({
  hmi_fullname: yup.string().required("請填寫姓名"),
  hmi_pid: yup
    .string()
    .required("請輸入身分證")
    .matches(/^[A-Z][1-2]\d{8}$/, "請輸入有效的身分證格式，例如：A123456789"),
  hmi_email: yup
    .string()
    .required("請輸入信箱")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "請輸入有效的信箱格式，例如：example@example.com"
    )
    .email("請輸入有效的信箱格式，例如：example@example.com"),
  hmi_phone: yup
    .string()
    .required("請填寫電話")
    .matches(/^09\d{8}$/, "請輸入有效的手機號碼"),
  hmi_password: yup.string().required("請輸入密碼").min(5, "密碼最少五位數"),

  hmi_account: yup.string().required("請輸入帳號").min(1),
  hmi_addr: yup.string().required("請輸入地址"),
  cpass: yup
    .string()
    .required("請確認密碼")
    .oneOf([yup.ref("hmi_password")], "密碼不一致"),
});
const Swal = inject("$swal");
const router = useRouter();

// Create a form context with the validation schema
const { handleSubmit } = useForm({
  validationSchema: schema,
});
let toast = Swal.mixin({
  buttonsStyling: false,

  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
});

//Message popup
function swalSuccess() {
  toast.fire("註冊成功", "成功註冊代理", "success");
}
function swalErrorFill() {
  toast.fire("錯誤", "請填寫所有欄位", "error");
}

// No need to define rules for fields
const { value: hmi_fullname, errorMessage: hmi_fullnameError } =
  useField("hmi_fullname");
const { value: hmi_birth, errorMessage: hmi_birthError } =
  useField("hmi_birth");
const { value: hmi_pid, errorMessage: hmi_pidError } = useField("hmi_pid");
// const { value: hmi_referee, errorMessage: hmi_refereeError } =
//   useField("hmi_referee");
const { value: hmi_email, errorMessage: hmi_emailError } =
  useField("hmi_email");
const { value: hmi_phone, errorMessage: hmi_phoneError } =
  useField("hmi_phone");
const { value: hmi_password, errorMessage: hmi_passwordError } =
  useField("hmi_password");
const { value: hmi_account, errorMessage: hmi_accountError } =
  useField("hmi_account");
const { value: hmi_addr, errorMessage: hmi_addrError } = useField("hmi_addr");
const { value: cpass, errorMessage: cpassError } = useField("cpass");

const onSubmitSignup = handleSubmit(async (values) => {
  if (!values.hmi_birth) {
    store.isBirth = "null";
  } else {
    //Birthday format
    const formattedDate = ref();
    const dateObj = new Date(Date.parse(values.hmi_birth));
    const day = Number(dateObj.getDate().toString().padStart(2, "0"));
    const month = (dateObj.getMonth() + 1).toString(16).padStart(2, "0");
    const year = Number(dateObj.getFullYear());

    formattedDate.value = `${year}-${month}-${day}`;
    store.isBirth = formattedDate.value;
    // console.log(formattedDate.value);
  }
  //   //Post data
  axios
    .post("http://220.133.235.3:5040/api/Register/RegisterAgent", {
      mname: values.hmi_fullname,
      pid: values.hmi_pid,
      phone: values.hmi_phone,
      parent: store.refer.mid,
      email: values.hmi_email,
      address: values.hmi_addr,
      password: values.hmi_password,
      filepath: store.isUrlf,
      filepath2: store.isUrlb,
      deposit: values.hmi_account,
      city: store.isCity,
      birthday: store.isBirth,
      area: store.isArea,
    })
    .then(function (response) {
      // console.log(response);

      if (response.data.success) {
        swalSuccess();
        const a = JSON.stringify(response.data.payload);
        localStorage.setItem("login-info", a);
        // console.log(a);
        // console.log("res", response);
        router.push("/otpval");
      } else if (response.status === 400) {
        swalErrorFill();
        // console.log("res", response.data.message);
      } else if (response.status === 200 && response.data.success === false) {
        const msg = response.data.message;
        // console.log("msg", msg);
        toast.fire("錯誤", msg, "error");
      } else {
        const msg = response.data.message;
        // console.log("msg", msg);
        toast.fire("錯誤", msg, "error");
      }
    })
    .catch(function (error) {
      // console.log("others", error);
      swalErrorFill();
    });
});
</script>
<template>
  <form @submit.prevent="onSubmitSignup" class="space-y-4">
    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
      <Textinput
        label="行動電話(登入帳號)"
        name="hmi_phone"
        type="phone"
        placeholder="輸入您的行動電話"
        v-model="hmi_phone"
        :error="hmi_phoneError"
      />
      <Textinput
        label="身分證字號"
        name="hmi_pid"
        type="text"
        placeholder="請輸入身分證"
        v-model="hmi_pid"
        :error="hmi_pidError"
      />
      <Textinput
        label="姓名"
        type="text"
        placeholder="請輸入您的姓名"
        v-model="hmi_fullname"
        :error="hmi_fullnameError"
      />
      <refer class="lg:col-span-1" />
      <Textinput
        label="電子郵件"
        name="hmi_email"
        type="email"
        placeholder="輸入您的電子郵件"
        class="lg:col-span-2"
        v-model="hmi_email"
        :error="hmi_emailError"
      />
      <Textinput
        label="密碼"
        name="hmi_password"
        type="Password"
        placeholder="輸入您的密碼"
        v-model="hmi_password"
        :error="hmi_passwordError"
      />
      <Textinput
        label="確認密碼"
        type="Password"
        placeholder="請確認密碼"
        name="cpass"
        v-model="cpass"
        :error="cpassError"
      />

      <Textinput
        label="匯款/轉帳 帳戶"
        name="hmi_account"
        type="text"
        placeholder="請輸入您的帳戶"
        v-model="hmi_account"
        :error="hmi_accountError"
      />
      <div class="fromGroup relative date">
        <label for="datepicker" class="label">生日</label>
        <VueDatePicker
          label="生日"
          name="hmi_birth"
          type="text"
          value="hmi_birth"
          placeholder="選擇日期"
          v-model="hmi_birth"
          :error="hmi_birthError"
          :enable-time-picker="false"
          format="yyyy-MM-dd"
          class="datepicker"
        />
      </div>
      <selectAddr />
      <Textinput
        label="地址"
        name="hmi_addr"
        type="text"
        placeholder="輸入您的地址"
        class="lg:col-span-2"
        v-model="hmi_addr"
        :error="hmi_addrError"
      />
    </div>
    <div class="grid grid-cols-1 gap-5 mt-6">
      <Fileinput label="上傳" name="front" placeholder="上傳您的身分證(正面)" />
    </div>
    <div class="grid grid-cols-1 gap-5 mt-6">
      <fileback label="上傳" name="back" placeholder="上傳您的身分證(背面)" />
    </div>
    <div class="grid grid-cols-1 gap-5 mt-6">
      <Button
        text="加入代理商"
        class="btn btn-dark block w-full text-center"
        type="submit"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.datepicker {
  margin-top: 10px;
}
.label {
  font-size: 14px;
}
</style>
