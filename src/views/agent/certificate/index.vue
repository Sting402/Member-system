<script setup>
import { ref, onMounted } from "vue";
import image123 from "../../../static/代理商證書.jpg";

const showFront = ref("");
const image = ref(null);
const canvas = ref(null);
const context = ref(null);

// onMounted(async () => {
//   // 等待圖片加載
//   await new Promise(resolve => {
//     const img = new Image()
//     img.onload = () => resolve()
//     img.src = image123
//     image.value = img
//   })

//   context.value = canvas.value.getContext('2d')

//   canvas.value.width = image.value.width
//   canvas.value.height = image.value.height
//   //繪製圖片
//   context.value.drawImage(image.value, 0, 0)

//   //繪製文本
//   context.value.font = '30px Arial'
//   context.value.fillStyle = 'red'
//   context.value.fillText(showFront.value, 330, 165)
// })

// // 下載
// function download() {
//   const link = document.createElement('a')
//   link.download = 'image.png'
//   link.href = canvas.value.toDataURL('image/png')
//   link.click()
// }

// // 確認
// function handleClick() {
//   context.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
//   context.value.drawImage(image.value, 0, 0)
//   context.value.font = 'bold 34px Arphic Mingti Medium BIG5'
//   context.value.fillStyle = 'black'
//   context.value.fillText(showFront.value, 350, 165)
// }
onMounted(() => {
  image.value = new Image();
  image.value.src = image123;

  context.value = canvas.value.getContext("2d");

  canvas.value.width = 800; // set your desired width here
  canvas.value.height = 600; // set your desired height here

  image.value.onload = () => {
    // calculate the aspect ratio of the image
    const aspectRatio = image.value.width / image.value.height;

    // calculate the width and height of the scaled image
    let scaledWidth = canvas.value.width;
    let scaledHeight = scaledWidth / aspectRatio;

    // if the scaled height is greater than the canvas height, scale by height instead
    if (scaledHeight > canvas.value.height) {
      scaledHeight = canvas.value.height;
      scaledWidth = scaledHeight * aspectRatio;
    }

    // calculate the x and y positions to center the image
    const x = (canvas.value.width - scaledWidth) / 2;
    const y = (canvas.value.height - scaledHeight) / 2;

    // draw the scaled image
    context.value.drawImage(image.value, x, y, scaledWidth, scaledHeight);

    //繪製文本
    context.value.font = "30px Arial";
    context.value.fillStyle = "red";
    context.value.fillText(showFront.value, 330, 165);

    // // 下載
    // function download() {
    //   const link = document.createElement('a')
    //   link.download = 'image.png'
    //   link.href = canvas.value.toDataURL('image/png')
    //   link.click()
    // }

    // // 確認
    function handleClick() {
      console.log("123");
      // context.value.clearRect(0, 0, canvas.value.width, canvas.value.     height)
      // context.value.drawImage(image.value, 0, 0)
      // context.value.font = 'bold 34px Arphic Mingti Medium BIG5'
      // context.value.fillStyle = 'black'
      // context.value.fillText(showFront.value, 350, 165)
    }
  };
});
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div class="edit">
      <input
        type="text"
        name=""
        id=""
        placeholder="請輸入姓名後按下確認鈕"
        v-model="showFront"
      />
      {{ showFront }}
      <button type="button" @click="handleClick" class="btn1">確認</button
      ><br />
      <button @click="download" class="btn1">下載圖片</button>
    </div>
    <div>
      <canvas ref="canvas" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn1 {
  border: 1px solid black;
  border-radius: 6px;
  padding-left: 3px;
  padding-right: 3px;
  margin-left: 10px;
}
.edit {
  display: flex;
  padding-bottom: 10px;
}
input {
  margin-right: 10px;
}
</style>
