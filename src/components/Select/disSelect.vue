<template>
    <div
      class="fromGroup relative"
      :class="`${error ? 'has-error' : ''}  ${horizontal ? 'flex' : ''}  ${
        validate ? 'is-valid' : ''
      } `"
    >
      <label
        v-if="label"
        :class="`${classLabel} inline-block input-label `"
        :for="name"
      >
        {{ label }}</label
      >
      <div class="relative">
        <select
          :name="name"
          :class="`${classInput} input-control block w-full focus:outline-none min-h-[40px] `"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :error="error"
          :id="name"
          :readonly="isReadonly"
          :disabled="disabled"
          :validate="validate"
          :formatter="formatter"
          :size="size"
          :multiple="multiple"
        >
          <option value="" disabled selected>{{ placeholder }}</option>
          <template v-if="!$slots.default && options">
            <option
              v-for="(item, index) in options"
              :value="item.value"
              :key="index"
            >
              {{ item.label }}
            </option>
          </template>
          <slot v-if="$slots.default"></slot>
        </select>
      </div>
  
      <span
        v-if="error"
        class="mt-2"
        :class="
          msgTooltip
            ? ' inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded'
            : ' text-danger-500 block text-sm'
        "
        >{{ error }}</span
      >
      <span
        v-if="validate"
        class="mt-2"
        :class="
          msgTooltip
            ? ' inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded'
            : ' text-success-500 block text-sm'
        "
        >{{ validate }}</span
      >
      <span
        class="block text-secondary-500 font-light leading-4 text-xs mt-2"
        v-if="description"
        >{{ description }}</span
      >
    </div>
  </template>
  <script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: "Select Option",
      },
      label: {
        type: String,
      },
      classLabel: {
        type: String,
        default: " ",
      },
      classInput: {
        type: String,
        default: "classinput",
      },
  
      name: {
        type: String,
      },
      modelValue: {
        // type: String || Array,
        default: "",
      },
      error: {
        type: String,
      },
  
      isReadonly: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      horizontal: {
        type: Boolean,
        default: false,
      },
      validate: {
        type: String,
      },
      msgTooltip: {
        type: Boolean,
        default: false,
      },
      formatter: {
        type: Function,
        default: (value) => value,
      },
      description: {
        type: String,
      },
      size: {
        type: String,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Array,
        default: () => [
  { label: "鹽埕區", value: "1" },
  { label: "鼓山區", value: "2" },
  { label: "左營區", value: "3" },
  { label: "楠梓區", value: "4" },
  { label: "三民區", value: "5" },
  { label: "新興區", value: "6" },
  { label: "前金區", value: "7" },
  { label: "苓雅區", value: "8" },
  { label: "前鎮區", value: "9" },
  { label: "旗津區", value: "10" },
  { label: "小港區", value: "11" },
  { label: "鳳山區", value: "12" },
  { label: "林園區", value: "13" },
  { label: "大寮區", value: "14" },
  { label: "大樹區", value: "15" },
  { label: "大社區", value: "16" },
  { label: "仁武區", value: "17" },
  { label: "鳥松區", value: "18" },
  { label: "岡山區", value: "19" },
  { label: "橋頭區", value: "20" },
  { label: "燕巢區", value: "21" },
  { label: "阿蓮區", value: "22" },
  { label: "路竹區", value: "23" },
  { label: "湖內區", value: "24" },
  { label: "茄萣區", value: "25" },
  { label: "梓官區", value: "26" },
  { label: "旗山區", value: "27" },
  { label: "美濃區", value: "28" },
  { label: "六龜區", value: "29" },
  { label: "甲仙區", value: "30" },
  { label: "杉林區", value: "31" },
  { label: "內門區", value: "32" },
  { label: "茂林區", value: "33" },
  { label: "桃源區", value: "34" },
  { label: "那瑪夏區", value: "35" },
  { label: "田寮區", value: "36" },
  { label: "永安區", value: "37" },
  { label: "彌陀區", value: "38" },
],

      },
    },
  };
  </script>
  <style lang="scss" scoped>
  select {
    @apply appearance-none bg-[url('https://api.iconify.design/akar-icons/chevron-down.svg')] bg-no-repeat bg-right;
    background-position-x: 98%;
  }
  [dir="rtl"] select {
    background-position-x: 2%;
  }
  option {
    @apply capitalize;
  }
  .dark {
    select {
      @apply bg-[url('https://api.iconify.design/heroicons/chevron-down-solid.svg?color=white')];
    }
  }
  </style>
  