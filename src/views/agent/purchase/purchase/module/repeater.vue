<template>
  <div class="bg-slate-50 dark:bg-slate-800 -mx-6 px-6 py-6">
    <div
      class="mb-6 text-slate-600 dark:text-slate-300 text-xs font-medium uppercase"
    >
      訂購商品
    </div>

    <div>
      <form @submit="onSubmit" novalidate>
        <div
          v-for="(field, idx) in fields"
          :key="field.key"
          class="grid-cols-12 grid gap-5 mb-5 last:mb-0"
        >
          <Textinput
            label="品項"
            type="text"
            :name="`name[${idx}]`"
            placeholder="請選擇"
            class="xl:col-span-5 lg:col-span-3 md:col-span-2 col-span-1"
          />
          <Textinput
            label="數量"
            type="text"
            :name="`name2[${idx}]`"
            placeholder="請選擇"
            class="xl:col-span-2 lg:col-span-3 md:col-span-2 col-span-1"
          />
          <Textinput
            label="金額"
            type="text"
            :name="`name3[${idx}]`"
            placeholder="自動帶出金額"
            isReadonly
            class="xl:col-span-2 lg:col-span-3 md:col-span-2 col-span-1"
          />

          <div class="flex justify-between items-end space-x-5 col-span-3">
            <Textinput
              label="小計"
              type="text"
              :name="`name4[${idx}]`"
              placeholder="自動計算金額"
              class="flex-1"
            />
            <div class="flex-none relative">
              <button
                type="div"
                v-if="idx > 0"
                class="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                @click="remove(idx)"
              >
                <Icon icon="heroicons-outline:trash" />
              </button>
            </div>
          </div>
        </div>
        <Button
          text="新增"
          icon="heroicons-outline:plus"
          btnClass=" text-slate-600 p-0 dark:text-slate-300"
          @click="push('')"
        />
        
      </form>
    </div>
  </div>
</template>
<script setup>
import { useForm, useFieldArray } from "vee-validate";
import Button from "@/components/Button";

import Textinput from "@/components/Textinput";
import Icon from "@/components/Icon";

const { handleSubmit } = useForm({
  initialValues: {
    links: ["https://github.com/logaretm"],
  },
});
const { remove, push, fields } = useFieldArray("links");
const onSubmit = handleSubmit(() => {
  // console.warn(JSON.stringify(values, null, 2));
});
</script>
