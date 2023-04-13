<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useSignupstore } from "../../store/Signup-agent/Signup-agent";
const store = useSignupstore();
const pid = ref(null);
const props = defineProps({
  name: {
    type: String,
    default: "name",
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Choose a file or drop it here...",
  },
  label: {
    type: String,
    default: "Browse",
  },
  classInput: {
    type: String,
    default: "",
  },
  filenametag: {
    type: Boolean,
    default: false,
  },
});

const data = reactive({
  pid: null,
  url: null,
  multipleFiles: [],
  multipleurls: [],
});

const onChange = async (e) => {
  pid.value = e.target.files[0];
  console.log(pid.value);

  let form = new FormData();
  form.append("title", "MyFile1");
  form.append("file", pid.value);
  console.log(form);

  try {
    const response = await axios.post(
      "http://220.133.235.3:5040/api/FileUpload/RegisterFileUpload",
      form
    );

    if (response.data) {
      let res = await response.data.url;
      data.url = "http://220.133.235.3:5040" + res;
      store.isUrlb = res;
      console.log("response", res);
      console.log("dataurl", data.url);
      
      // Update the preview of the selected image
      if (imageRef.value) {
        imageRef.value.src = data.url;
      }
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};
const imageRef = ref(null);


</script>

<template>
  <div>
    <div class="filegroup">
      <label :for="name">
        <input
          type="file"
          @change="onChange"
          class="bg-red-400 w-full hidden"
          :id="name"
          :name="name"
          :multiple="multiple"
          :preview="preview"
          :placeholder="placeholder"
          :label="label"
          accept="image/png, image/jpeg"
        />
        <div
          class="w-full h-[40px] file-control flex items-center"
          :class="`  ${classInput}`"
        >
          <span
            v-if="!multiple"
            class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <span
              v-if="pid?.name"
              :class="
                filenametag ? ' badge-title' : 'text-slate-900 dark:text-white'
              "
              >{{ pid?.name }}</span
            >
            <span v-if="!pid?.name" class="text-slate-400">{{
              placeholder
            }}</span>
          </span>

          <span
            class="file-name flex-none cursor-pointer border-l px-4 border-slate-200 dark:border-slate-700 h-full inline-flex items-center bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-base rounded-tr rounded-br font-normal"
            >{{ label }}</span
          >
        </div>
      </label>

      <!-- Only show the img section when a file is selected -->
      <img
        v-if="data.url"
        ref="imageRef"
        :src="data.url"
        class="w-full object-cover h-full block rounded"
        :alt="pid?.name"
        @load="onImageLoad"
      />
    </div>
  </div>
</template>


<style lang="scss"></style>
