<template>
  <div class="city">
    <label for="selectedCity" class="label lg:col-span-2 md:col-span-2">居住縣市</label>
    <VueSelect
      label="name"
      :reduce="(option) => ({ label: option.name, value: option.districts })"
      placeholder="縣市"
      :options="cities"
      v-model="selectedCity"
      class="selectcity"
      @click.native="selectedDistrict = ''" 
    ></VueSelect>
  </div>
  <div class="area">
    <label for="selectedCity" class="label">居住區域</label>
    <VueSelect
      label="name"
      placeholder="請先選縣市"
      v-model="selectedDistrict"
      :options="selectedCity ? selectedCity.value : []"
      class="selectarea"
      :disabled="!selectedCity"
      
    >
    </VueSelect>
  </div>

</template>



<script>
import { ref, watch } from "vue";
import VueSelect from "vue-select";
import cities from "./json/TwCities.json";
import { useSignupstore } from "../../store/Signup-agent/Signup-agent";

export default {
  components: { VueSelect },
  data() {
    return {
      selectedCity: null,
      selectedDistrict: null,
      showErrorMessage: false,
    };
  },
  setup() {
    const selectedCity = ref("");
    const selectedDistrict = ref("");
    
    const store = useSignupstore();

    const setCity = (city) => {
      selectedCity.value = city;
      store.isCity = city ? city.label : "";
      console.log("isCity value in store:", store.isCity);
    };

    const setArea = (area) => {
      selectedDistrict.value = area;
      store.isArea = area ? area.name : "";
      console.log("isArea value in store:", store.isArea);
    };
    
    // Watch for changes to selectedCity and call setCity
    watch(selectedCity, (newValue, oldValue) => {
      if (oldValue && !oldValue.label) {
        // Only reset selectedDistrict if the old value was the placeholder
        selectedDistrict.value = "";
      }
      setCity(newValue);
    });

    // Watch for changes to selectedDistrict and call setArea
    watch(selectedDistrict, (newValue) => {
      setArea(newValue);
    });

    const onCitySearch = (searchQuery, loading) => {
      // If the selected district is empty, set it to the placeholder value
      if (!selectedDistrict.value) {
        selectedDistrict.value = "鄉鎮區域";
      }
    };

    return { cities, selectedCity, selectedDistrict, onCitySearch };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.label {
  margin-bottom: 25px;
  font-size: 14px;
}
.v-select {
  margin-top: 10px;
}
.v-select :deep(input) {
  height: 28px;
}
</style>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.label {
  margin-bottom: 25px;
  font-size: 14px;
}
</style>