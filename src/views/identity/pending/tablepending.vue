<script setup>

function updateSubtotals(input) {
  var row = input.parentElement.parentElement;
  var quantity = row.cells[3].querySelector("input").value;
  var price = row.cells[4].innerText.substring(1);
  var subtotal = quantity * price;
  let subtotalColumn = document.querySelector("inputs");
  subtotalColumn.querySelector("input").value = subtotal;
}

function updateSubtotalh(input) {
  var row = input.parentElement.parentElement;
  var quantity = row.cells[6].querySelector("input").value;
  var price = row.cells[7].innerText.substring(1);
  var subtotal = quantity * price;
  let subtotalColumn = document.querySelector("inputh");
  subtotalColumn.querySelector("input").value = subtotal;
}




</script>
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
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$280</td>
        <td>旅行組</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$300</td>
        
      </tr>
      <tr>
        <td colspan="2">1號保濕精華</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$800</td>
        <td>1號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$200</td>
        
      </tr>
      <tr>
        <td colspan="2">2號-美白精華</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$800</td>
        <td>2號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$200</td>
        
      </tr>
      <tr>
        <td colspan="2">3號-抗皺精華</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$800</td>
        <td>3號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$200</td>
        
      </tr>
      <tr>
        <td colspan="2">4號-亮顏乳霜</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$900</td>
        <td>4號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$200</td>
        
      </tr>
      <tr>
        <td colspan="2">5號-煥彩乳霜</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$900</td>
        <td>5號體驗包(10包)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$200</td>
        
      </tr>
      <tr>
        <td colspan="2">NANA霜</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$450</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">燕窩蜂王乳面膜(亮白)</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$370</td>
        <td>保養品DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">燕窩蜂王乳面膜(修復)</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$370</td>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      <tr>
        <td colspan="2">肖副總</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$1,450</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">簡助理(紅茶)</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$290</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">簡助理(金萱綠茶)</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$290</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">妤清茶</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$160</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">燕窩Q彈力膠原胜肽</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$500</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">排宿錠</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$290</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">生命之泉raffinee</td>
        <td><input type="number" min="0" value="0" class="inputs" @onChange="updateSubtotals(this)"></td>
        <td>$3000</td>
        <td>DM(100張)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$150</td>
        
      </tr>
      <tr>
        <td colspan="2">代理階級補貨金額</td>
        <td colspan="2">$15,000</td>
        
        <td>妤果紙袋(10個)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$200</td>
        
      </tr>
    
      <tr>
        <td colspan="4">補貨金額不足</td>
        
        <td>制度本(20本起印)</td>
        <td><input type="number" min="0" value="0" class="inputh" @onChange="updateSubtotalh(this)"></td>
        <td>$180</td>
        
      </tr>
      
      
    </tbody>
    <tr>
      <td colspan="2">商品家總</td>
      <td colspan="2" ><input class="sums" type="text" value="" readonly/></td>
      
      <td>輔銷品加總</td>
      <td colspan="2" ><input class="sumh" type="text" value="" readonly/></td>
      
      
    </tr>
    <tfoot>
      <tr>
        <td colspan="2">付款總金額</td>
        <td id="total" colspan="5" ><input class="suma" type="text" value=""/></td>
      </tr>
    </tfoot>
  </table>
</template>
  
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
.inputs, .inputh{
    text-align: center;
    
}
</style>
  