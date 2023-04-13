<script setup>
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { ref } from "vue";
import { onMounted, reactive } from "vue";
import {useRouter} from 'vue-router'
import axios from "axios";

const router = useRouter();

const span = ref("");
const data = reactive({
  mid: "",
  mname: "",
  pid: "",
  phone: "",
  email: "",
  city: "",
  area: "",
  address: "",
  birthday: "",
  deposit: "",
});
const update = async (e) => {
  const x = JSON.parse(localStorage.getItem("login-info"));
  axios.post('http://220.133.235.3:5040/api/Member/ModifyMember', {
    mid: x.mid,  
    level: x.level,                 
    mname: data.mname,             
    pid: data.pid,
    phone: data.phone,
    email: data.email,
    password: "12345",
    city: data.city,               
    birthday: data.birthday,     
    area: data.area,             
    address: data.address,            
    regdate: x.regdate,    
    enable: "0"
  })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
// router.push('/yuvog-agent/agent-office')

}
onMounted(() => {
  // Set the data object with the values from your data
  const x = JSON.parse(localStorage.getItem("login-info"));
  console.log(x.birthday);
  span.value = x.mname;
  data.mid = x.mid;
  data.mname = x.mname;
  data.address = x.address;
  data.birthday = x.birthday;
  data.city = x.city + "市";
  data.area = x.area;
  data.email = x.email;
  data.phone = x.phone;
  data.pid = x.pid;
  data.deposit = x.deposit;
  // Set the other data properties
});
</script>
<template>
  <div>
    <div
      class="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
    >
      <div
        class="bg-rose-900 dark:bg-rose-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"
      ></div>
      <div class="profile-box flex-none md:text-start text-center">
        <div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
          <div class="flex-none">
            <div
              class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
            >
              <img
                src="@/assets/images/all-img/user-kaws.jpg"
                alt=""
                class="w-full h-full object-cover rounded-full"
              />
              <router-link
                to="/app/profile-setting"
                class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
              >
                <Icon icon="heroicons:pencil-square" />
              </router-link>
            </div>
          </div>
          <div class="flex-1">
            <div
              class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]"
            >
              <span class="text-ellipsis whitespace-nowrap block">{{
                span
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- end profile box -->
      <div
        class="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[600px] md:space-y-0 space-y-4"
      >
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            $14,532,400
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            累計營業額
          </div>
        </div>
        <!-- end single -->
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            900,432
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            累計銷售數
          </div>
        </div>
        <!-- end single -->
        <div class="flex-1">
          <div
            class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1"
          >
            987
          </div>
          <div class="text-sm text-slate-600 font-light dark:text-slate-300">
            下線代理人數
          </div>
        </div>
        <!-- end single -->
      </div>
      <!-- profile info-500 -->
    </div>
  </div>
  <div class="container">
    <form @submit.prevent="submit">
    <Card title="基本資訊">
      <ul class="list space-y-10">
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:tag" />
              </div>
          <div class="flex-1">
            <label class="label">會員編號:</label>
            <input type="text" v-model="data.mid" readonly />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse short">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:user" />
              </div>
          <div class="flex-1">
            <label class="label">姓名:</label>
            <input type="text" v-model="data.mname" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:identification" />
              </div>
          <div class="flex-1">
            <label class="label">身分證號:</label>
            <input type="text" v-model="data.pid" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:phone-arrow-up-right" />
              </div>
          <div class="flex-1">
            <label class="label">電話號碼:</label>
            <input type="text" v-model="data.phone" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:inbox" />
              </div>
          <label class="label">電子信箱:</label>
          <input type="text" v-model="data.email" />
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:globe-europe-africa" />
              </div>
          <div class="flex-1">
            <label class="label">居住城市:</label>
            <input type="text" v-model="data.city" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:map" />
              </div>
          <div class="flex-1">
            <label class="label">居住區域:</label>
            <input type="text" v-model="data.area" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:map-pin" />
              </div>
          <div class="flex-1">
            <label class="label">居住地址:</label>
            <input type="text" v-model="data.address" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse short">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:cake" />
              </div>
          <div class="flex-1">
            <label class="label">生日:</label>
            <input type="text" v-model="data.birthday" />
          </div>
        </li>
        <!-- end single list -->
        <li class="flex space-x-3 rtl:space-x-reverse">
          <div
                class="flex-none text-2xl text-slate-600 dark:text-slate-300"
              >
                <Icon icon="heroicons:banknotes" />
              </div>
          <div class="flex-1">
            <label class="label">銀行帳號:</label>
            <input type="text" v-model="data.deposit" />
          </div>
        </li>
        <!-- end single list -->
      </ul>
      <div>
      <button @click="update" class="btn-dark">更新會員資訊</button>
    </div>
    </Card>
  </form>
  </div>

</template>
<style scoped>
.container {
  margin-top: 20px;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.25rem;
  padding-left: 15px;
  margin-left: 10px;
  width: fit-content;
}
.label{
  display: inline-block;
  width: 80px;
}
button{
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.25rem;
  margin-left: 36%;
  width: 30%;
  margin-top: 50px;
}
</style>
