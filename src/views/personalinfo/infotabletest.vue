<template>
  <div>
    <div>
      <label>MID:</label>
      <input type="text" v-model="data.mid" readonly />
    </div>
    <div>
      <label>Mname:</label>
      <input type="text" v-model="data.mname" />
    </div>
    <div>
      <label>PID:</label>
      <input type="text" v-model="data.pid" />
    </div>
    <div>
      <label>Phone:</label>
      <input type="text" v-model="data.phone" />
    </div>
    <div>
      <label>Email:</label>
      <input type="text" v-model="data.email" />
    </div>
    <div>
      <label>City:</label>
      <input type="text" v-model="data.city" />
    </div>
    <div>
      <label>Area:</label>
      <input type="text" v-model="data.area" />
    </div>
    <div>
      <label>Address:</label>
      <input type="text" v-model="data.address" />
    </div>

    <div>
      <label>Birthday:</label>
      <input type="text" v-model="data.birthday" />
    </div>

    <div>
      <label>Deposit:</label>
      <input type="text" v-model="data.deposit" />
    </div>
    <div>
      <button>編輯資訊</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const data = reactive({
  mid:'',
  mname:'',
  pid:'',
  phone:'',
  email:'',
  city:'',
  area:'',
  address:'',
  birthday:'',
  deposit:''
});

onMounted(() => {
  // Set the data object with the values from your data
  const x = JSON.parse(localStorage.getItem("login-info"));
  console.log(x.address);
  data.mid = x.mid
  data.mname = x.mname
  data.address = x.address
  data.birthday = x.birthday
  data.city = x.city
  data.area = x.area
  data.email = x.email
  data.phone = x.phone
  data.pid = x.pid
  data.deposit = x.deposit
  // Set the other data properties
});
</script>
