<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useSignupstore } from "../../store/Signup-agent/Signup-agent";
const store = useSignupstore();
const props = defineProps({
  placeholder: {
    type: String,
    default: "請選擇縣市",
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
    default: () => [],
  },
});
console.log(props);
const options = ref(props.options);
const selectedOption = ref("");
const handelChange = async () => {
  console.log(selectedOption.value);
  try {
    const response = await axios.post(
      "http://220.133.235.3:5040/api/Register/GetCity",
      {}
    );
    console.log(response);
    if (response.data.success) {
      let data = await response.data.payload;
      console.log(data);
      data.forEach((item) => {
        //console.log(item.name);
        options.value.push({
          value: item.name,
        });
      });
      store.isCity = selectedOption.value;
      console.log(store.isCity);
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  // console.log(selectedOption.value);
});
</script>

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
        class="`${classInput} input-control block w-full focus:outline-none min-h-[40px] `"
        :value="selectedOption"
        :error="error"
        @click="handelChange"
        :id="name"
        :readonly="isReadonly"
        :disabled="disabled"
        :validate="validate"
        :formatter="formatter"
        :size="size"
        :multiple="multiple"
        v-model="selectedOption"
      >
        <option value="" disabled selected>{{ placeholder }}</option>
        <template v-if="!$slots.default && options">
          <option
            v-for="(item, index) in options"
            :value="item.value"
            :key="index"
          >
            {{ item.value }}
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
