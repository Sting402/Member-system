<script setup>
import { ref, onMounted } from 'vue'
import image123 from '../../../../public/static/lt02895265_quantized.png'

const showFront = ref('')
const image = ref(null)
const canvas = ref(null)
const context = ref(null)

onMounted(async () => {
  // 等待圖片加載
  await new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve()
    img.src = image123
    image.value = img
  })


  context.value = canvas.value.getContext('2d')


  canvas.value.width = image.value.width
  canvas.value.height = image.value.height
  //繪製圖片
  context.value.drawImage(image.value, 0, 0)

  //繪製文本
  context.value.font = '30px Arial'
  context.value.fillStyle = 'red'
  context.value.fillText(showFront.value, 330, 165)
})

// 下載
function download() {
  const link = document.createElement('a')
  link.download = 'image.png'
  link.href = canvas.value.toDataURL('image/png')
  link.click()
}

// 確認
function handleClick() {
  context.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  context.value.drawImage(image.value, 0, 0)
  context.value.font = '30px Arial'
  context.value.fillStyle = 'red'
  context.value.fillText(showFront.value, 360, 165)
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <canvas ref="canvas" />
  </div>
  <input type="text" name="" id="" v-model="showFront">
  {{ showFront }}
  <button type="button" @click="handleClick" class="btn1">確認</button><br>
  <button @click="download" class="btn1">下載圖片</button>
</template>

<style lang="scss" scoped>
.btn1 {
 border: 1px solid black;
}
</style>