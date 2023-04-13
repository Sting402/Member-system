<script setup>
import { onMounted, ref } from "vue";
import { useSignupstore } from "../../store/Signup-agent/Signup-agent";
import axios from "axios";
import VueSelect from "vue-select";

const store = useSignupstore();
const selectedOption = ref("");


const handleChange1 = async () => {
  let selectedLabel = "";
  switch (selectedOption.value) {
    case "VIP":
      selectedLabel = "2";
      break;
    case "大區":
      selectedLabel = "3";
      break;
    case "總代":
      selectedLabel = "4";
      break;
    case "聯創":
      selectedLabel = "5";
      break;
    case "董事":
      selectedLabel = "6";
      break;
    default:
      // Handle default case, if needed
      break;
  }
  store.isLevel = selectedLabel;
};

const onClick = async () => {
  try {
    // Retrieve mid and parent from localStorage or from another source
    const info = JSON.parse(localStorage.getItem("login-info"));
    const mid = info.mid;
    const parent = info.parent;

    const response = await axios.post(
      "http://220.133.235.3:5040/api/order/GetJoinOrder",
      {
        mid: mid,
        parent: parent,
        level: store.isLevel,
        orderType: 2,
      }
    );
    console.log("lvl", store.isLevel);
    console.log("res", response.data.payload.items);
    const data = JSON.stringify(response.data.payload.items);
    store.lvlData = data
    localStorage.setItem("data", data);
  } catch (error) {
    console.log(error);
  }
};

const props = defineProps({
  placeholder: {
    type: String,
    default: "請輸入等級",
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
    // default:()=>[],
    default: () => [
      {
        value: "VIP",
        label: "2",
      },
      {
        value: "大區",
        label: "3",
      },
      {
        value: "總代",
        label: "4",
      },
      {
        value: "聯創",
        label: "5",
      },
      {
        value: "董事",
        label: "6",
      },
    ],
  },
});
console.log(props);
const options = ref(props.options);
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
      <button @click="onClick()">確認代理等級</button>
      <select
        :name="name"
        :class="`${classInput} input-control block w-full focus:outline-none min-h-[40px] `"
        :value="selectedOption"
        @change="handleChange1()"
        :id="name"
        :readonly="isReadonly"
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
  </div>
</template>
<style lang="scss" scoped>
select {
  @apply appearance-none bg-[url('https://api.iconify.design/akar-icons/chevron-down.svg')] bg-no-repeat bg-right;
  background-position-x: 98%;
  width: 115px;
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
.relative {
  display: flex;
  gap: 10px;
}
button {
  border: 1px solid black;
  background-color: black;
  border-radius: 4px;
  padding-left: 3px;
  padding-right: 3px;
}
</style>
