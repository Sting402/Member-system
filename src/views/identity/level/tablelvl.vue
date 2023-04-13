
<template>
<table>
    <thead>
      <tr>
        <th colspan="4"><img src="" alt="">logo-yuvog</th>
        <th>訂單日期</th>
        <th colspan="2">2023/03/24</th>
        
      </tr>
      <tr>
        <th colspan="2">上家董事</th>
        <th rowspan="4">姓名</th>
        <th>吳大仁</th>
        <th>訂單類別</th>
        <th colspan="2">補貨訂單</th>
      </tr>
      <tr>
        <th >上家代理</th>
        <th>董事</th>
        <th>陳小華</th>
        <th>付款方式</th>
        <th colspan="2">匯款</th>
      </tr>
      <tr>
        <th rowspan="2">代理階級</th>
        <th rowspan="2">董事</th>
        <th rowspan="2">王小明</th>
        <th>匯款帳號後五碼</th>
        <th colspan="2">12345</th>
      </tr>
      <tr>
        <th>取貨方式</th>
        <th colspan="2">自取</th>
      </tr>
      <tr>
        <th >電話</th>
        <th colspan="2">0988-555-666</th>
        <th>地址</th>
        <th colspan="3">高雄市新興區民生一路247號14樓-2</th>
      </tr>
      <tr>
        <th colspan="2">產品</th>
        <th>數量</th>
        <th>價格</th>
        <th>輔銷品(不列入業績算表)</th>
        <th>數量</th>
        <th>價格</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">潔顏慕斯</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$280</td>
        <td>旅行組</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$300</td>
        
      </tr>
      <tr>
        <td colspan="2">1號保濕精華</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$800</td>
        <td>1號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$200</td>
        
      </tr>
      <tr>
        <td colspan="2">2號-美白精華</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$800</td>
        <td>2號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$200</td>
        
      </tr>
      <tr>
        <td colspan="2">3號-抗皺精華</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$800</td>
        <td>3號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$200</td>
        
      </tr>
      <tr>
        <td colspan="2">4號-亮顏乳霜</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$900</td>
        <td>4號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$200</td>
        
      </tr>
      <tr>
        <td colspan="2">5號-煥彩乳霜</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$900</td>
        <td>5號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$200</td>
        
      </tr>
      <tr>
        <td colspan="2">NANA霜</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$450</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">燕窩蜂王乳面膜(亮白)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$370</td>
        <td>保養品DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">燕窩蜂王乳面膜(修復)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$370</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td colspan="2">肖副總</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$1,450</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">簡助理(紅茶)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$290</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">簡助理(金萱綠茶)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$290</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">妤清茶</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$160</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">燕窩Q彈力膠原胜肽</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$500</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">排宿錠</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$290</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">生命之泉raffinee</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount1" ></td>
        <td id="price1">$3000</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$150</td>
        
      </tr>
      <tr>
        <td colspan="2">代理階級補貨金額</td>
        <td colspan="2">$15,000</td>
        
        <td>妤果紙袋(10個)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$200</td>
        
      </tr>
    
      <tr>
        <td colspan="4">補貨金額不足</td>
        
        <td>制度本(20本起印)</td>
        <td><input type="number" min="0" value="0" @onChange = "onchange()"   id="amount2" ></td>
        <td id="price2">$180</td>
        
      </tr>
      
      
    </tbody>
    <tr>
      <td colspan="2">商品家總</td>
      <td colspan="2" ><input id="sum1" class="sums" type="number" value={{sum1}} @onChange = "onchange()"   readonly/></td>
      
      <td>輔銷品加總</td>
      <td colspan="2" ><input id="sum2" class="sumh" type="number" value={{sum2}} @onChange = "onchange()"   readonly/></td>
      
      
    </tr>
    <tfoot>
      <tr>
        <td colspan="2">付款總金額</td>
        <td  colspan="5"><input id="total" class="suma" type="number" value={{total}}   /></td>
      </tr>
    </tfoot>
  </table>
</template>
<!-- <script setup>
var price1 = parseFloat(document.getElementById("price1").value);
var amount1 = parseFloat(document.getElementById("amount1").value);
var sum1 = price1 * amount1;
document.getElementById("sum1").value = sum1.toFixed(2);

var price2 = parseFloat(document.getElementById("price2").value);
var amount2 = parseFloat(document.getElementById("amount2").value);
var sum2 = price2 * amount2;
document.getElementById("sum2").value = sum2.toFixed(2);

var total = sum1 + sum2;
document.getElementById("total").value = total.toFixed(2);

</script> -->
<script>
import {ref} from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  // Get references to the input fields
  const price1Input = document.getElementById("price1");
  const amount1Input = document.getElementById("amount1");
  const sum1Input = document.getElementById("sum1");
  const price2Input = document.getElementById("price2");
  const amount2Input = document.getElementById("amount2");
  const sum2Input = document.getElementById("sum2");
  const totalInput = document.getElementById("total");

  // Listen for changes to amount1 input field
  amount1Input.onchange = function() {
  const sum1Input = document.getElementById("sum1");
  console.log("1");
  // Calculate sum1 and update the sum1 input field
  const sum1 = Number(price1Input.innerText.substring(1)) * Number(amount1Input.value);
  sum1Input.value = sum1;

  // Calculate total and update the total input field
  const totalInput = document.getElementById("total");
  const total = Number(sum1Input.value) + Number(sum2Input.value);
  totalInput.value = total;
};


  // Listen for changes to amount2 input field
  amount2Input.onchange2 = function() {
    // Calculate sum2 and update the sum2 input field
    const sum2 = Number(price2Input.innerText.substring(1)) * Number(amount2Input.value);
    sum2Input.value = sum2;

    const totalInput = document.getElementById("total");
  const total = Number(sum1Input.value) + Number(sum2Input.value);
  totalInput.value = total;
    
  };
  

  // Initialize the values of sum1, sum2, and total to 0
  sum1Input.value = 0;
  sum2Input.value = 0;
  totalInput.value = 0;
});


</script>

  <style scoped>
  table{
    width: 100%;
  }
th, td{
    border:1px solid black
}
td{
    text-align: center;
}
input{
    text-align: center;
    
}
</style>
  