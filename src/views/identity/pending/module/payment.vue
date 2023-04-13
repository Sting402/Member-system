<script setup>
import { ref } from "vue";
import { useSignupstore } from "../../../../store/Signup-agent/Signup-agent";

const store = useSignupstore();

const method = store.paymethod
const holder = store.cardHolder
const num = store.cardNumber
const ex = store.expiryDate
const val = store.valNum
</script>

<template>
  <div>
    <label for="paymentMethod" class="type">付款方式:</label>
    <span>{{ method }}</span>

    <div v-if="method === 'cash'">
      <p>付款/取貨 地址: 800高雄市新興區民生一路247號14號樓之二</p>
    </div>

    <div v-if="method === 'creditCard'">
      <form class="credit">
        <label for="cardNumber">信用卡號:</label>
        <span class="info">{{ num }}</span>

        <label for="cardHolder">持卡人姓名:</label>
        <span class="info">{{ holder }}</span>

        <label for="expiryDate">到期日:</label>
        <span class="info">{{ ex }}</span>

        <label for="expiryDate">確認碼:</label>
        <span class="info">{{ val }}</span>
      </form>
    </div>

    <div v-if="method === 'atmTransfer'">
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
span {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.101);
  padding: 8px;
  padding-left: 10px;
  border-radius: 4px;
}
label {
  margin-bottom: 10px;
  font-size: large;
  font-weight: bold;
  margin-left: 15px;
}
.info{
  margin-left: 30px;
}
</style>
