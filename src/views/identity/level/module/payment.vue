<script setup>
import { ref } from "vue";
import { useSignupstore } from "../../../../store/Signup-agent/Signup-agent";

const store = useSignupstore();

const selectedPaymentMethod = ref("0");
const cardNumber = ref("");
const cardHolder = ref("");
const expiryDate = ref("");
const valNum = ref("");

function method() {
  store.paymethod = selectedPaymentMethod.value;
}

function info() {
  store.cardNumber = cardNumber.value;
  store.cardHolder = cardHolder.value;
  store.expiryDate = expiryDate.value;
  store.valNum = valNum.value;
}

</script>

<template>
  <div>
    <label for="paymentMethod" class="type">付款方式:</label>
    <select v-model="selectedPaymentMethod" id="paymentMethod" @change="method">
      <option value="0">請選擇</option>
      <option value="cash">現金</option>
      <option value="creditCard">信用卡</option>
      <option value="atmTransfer">銀行轉帳</option>
    </select>

    <div v-if="selectedPaymentMethod === 'cash'">
      <p>付款/取貨 地址: 800高雄市新興區民生一路247號14號樓之二</p>
    </div>

    <div v-if="selectedPaymentMethod === 'creditCard' ">
      <form class="credit">
        <label for="cardNumber">信用卡號:</label>
        <input type="text" id="cardNumber" v-model="cardNumber" @change="info"/>

        <label for="cardHolder">持卡人姓名:</label>
        <input type="text" id="cardHolder" v-model="cardHolder" @change="info"/>

        <label for="expiryDate">到期日:</label>
        <input type="text" id="expiryDate" v-model="expiryDate" @change="info"/>

        <label for="valNum">確認碼:</label>
        <input type="text" id="valNum" v-model="valNum" @change="info"/>
      </form>
    </div>

    <div v-if="selectedPaymentMethod === 'atmTransfer'">
      <p>轉帳帳號: 822-555555555555</p>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 6px;
  width: 50%;
}
input {
  margin: 14px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 6px;
}
.credit {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}
.type {
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
}
#paymentMethod {
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 4px;
}
</style>
