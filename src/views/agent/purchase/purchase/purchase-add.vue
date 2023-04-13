<template>
  <div>
    <Card title="建立訂單">
      <h4 class="text-slate-900 dark:text-white text-xl mb-4">#2212250245</h4>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div
            class="lg:col-span-2 col-span-1 text-slate-900 dark:text-slate-300 text-base font-medium"
          >
            收件人資訊
          </div>
          <FromGroup label="訂單日期" name="d1">
            <flat-pickr
              v-model="dateDefault"
              class="form-control"
              id="d1"
              placeholder="預設今天"
            />
          </FromGroup>
          <Textinput label="收件人姓名" type="text" placeholder="請輸入姓名" />
          <Textinput label="收件人電話" type="text" placeholder="請輸入電話" />
          <Textinput label="收件人信箱" type="email" placeholder="請輸入信箱" />
          <div class="lg:col-span-2 col-span-1">
            <Textarea
              label="收件人地址"
              type="email"
              placeholder="請輸入地址"
              rows="2"
            />
          </div>
          <VueSelect :options="options" label="寄送方式" />
          <VueSelect :options="options2" label="付款方式" />

        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div
            class="lg:col-span-2 col-span-1 text-slate-900 text-base dark:text-slate-300 font-medium"
          >
            訂購人資訊
          </div>

          <Textinput label="訂購人姓名" name="pn2" isReadonly type="text" modelValue="楊世賢" />
          <Textinput label="訂購人級別" name="pn2" isReadonly type="text" modelValue="董事" />
          <Textinput label="訂購人電話" name="pn2" isReadonly type="text" modelValue="0912 345 678" />
          <Textinput label="訂購人信箱" name="pn2" isReadonly type="text" modelValue="someone@yuvog.com.tw" />


          <div class="lg:col-span-2 col-span-1">
            <Textarea
              label="訂購人地址"
              type="email"
              placeholder="高雄市前鎮區和平二路193號10樓之2"
              rows="2"
              isReadonly
            />
          </div>
          <div class="lg:col-span-2 col-span-1">
            <Button icon="heroicons-outline:arrow-left" text="帶入訂購人資訊" btnClass="btn-primary  " />
          </div>

        </div>
      </div>
      <div class="my-6">
        <Repeater />
      </div>
      <Textarea
        label="備註"
        type="text"
        rows="2"
        placeholder="請輸入備註事項"
        class="lg:w-1/2"
      />
      <div class="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse">
        <Button text="確定下訂" btnClass="btn-dark" />
      </div>
    </Card>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import FromGroup from "@/components/FromGroup";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import Repeater from "./module/repeater";
import VueSelect from "@/components/Select/VueSelect";
export default {
  components: {
    Button,
    Card,
    Textinput,
    FromGroup,
    Textarea,
    Repeater,
    VueSelect
  },
  data() {
    return {
      options: [
        {
          value: "option1",
          label: "自取",
        },
        {
          value: "option2",
          label: "郵寄",
        },
      ],
      options2: [
        {
          value: "option1",
          label: "現金",
        },
        {
          value: "option2",
          label: "匯款",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
