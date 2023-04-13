<script setup>
import { ref, watch } from "vue";
import debounce from "lodash-es/debounce";
import axios from "axios";
import VueSelect from "vue-select";
import { useSignupstore } from "../../../store/Signup-agent/Signup-agent";
const store = useSignupstore();


    const selectedOption = ref(null);
    const options = ref([]);
    const fetchOptions = debounce((searchTerm) => {
      axios
        .post(
          `http://220.133.235.3:5040/api/Register/GetMemberbyName?name=${searchTerm}`,
          {
            mname: searchTerm,
          }
        )
        .then((response) => {
          console.log(response.data);
          options.value = response.data.payload.map((item) => ({
            id: item.pid,
            name: item.mname,
            mid: item.mid
          }));
        });
    }, 500);

     // Define the function that will be called when the selected option changes
  const handleSelectedOptionChange = (newValue) => {
    // Store the selected option's mid in pinia
    // sessionStorage.setItem("selectedOption", JSON.stringify(newValue));
    store.refer = newValue

  };

  // Define the watch function to listen for changes to the selectedOption variable
  watch(selectedOption, (newValue) => {
    handleSelectedOptionChange(newValue);
  });

    const handleInput = (searchTerm) => {
      if (!searchTerm) {
        options.value = [];
      }
    };
    const onSearch = (searchTerm) => {
      if (!searchTerm) {
        options.value = [];
      }else{
      fetchOptions(searchTerm);}
    };
 
</script>
<template>
  <div class="vselect">
    <label for="refer" class="label">推薦人</label>
    <VueSelect
      :options="options"
      label="name"
      placeholder="請輸入推薦人"
      class="select"
      @search="onSearch"
      :noOptions="{ message: '自訂的錯誤訊息' }"
      :input="handleInput"
      v-model="selectedOption"
      id="refer"
    >
      <template #no-options="{ noOptionsSearch }">
        <span class="span">沒符合的對象</span>
      </template>
    </VueSelect>
  </div>
</template>

<style scoped src="./VueSelect.css"></style>
