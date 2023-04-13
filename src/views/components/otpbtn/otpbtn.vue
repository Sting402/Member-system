<script setup>
  import { ref } from 'vue';
  
  
      const countdownActive = ref(false);
      const buttonText = ref('Resend OTP');
      let countdownInterval;
  
      function startCountdown() {
        let timeLeft = 60;
        countdownActive.value = true;
  
        countdownInterval = setInterval(() => {
          if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownActive.value = false;
            buttonText.value = 'Resend OTP';
          } else {
            buttonText.value = `Resend OTP (${timeLeft}s)`;
            timeLeft--;
          }
        }, 1000);
      }
  
     
  </script>
  

<template>
    <button @click="startCountdown" :disabled="countdownActive"
    class="btn btn-dark block w-full text-center">{{ buttonText }}</button>
  </template>
  
  