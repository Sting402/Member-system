<template>
  <div>
    <!-- <Breadcrumb /> -->
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card title="代理會員申請流程-選擇代理等級">
            <template #header>
              <div class="flex">
                <selectLevel />
              </div>
            </template>
            <mainList />
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/Card";
import mainList from "./module/mainList.vue"
import selectLevel from "../../../components/Signup-agent/selectLeveltest.vue";
import TotalTable from "./module/mainList.vue";
import VerticallyWizard from "./form-wizard/VerticallyWizard.vue";


</script>
<style lang="scss" scoped>
button {
  height: 41px;
  margin-right: 10px;
  padding-top: -10px;
}
.flex {
  display: flex;
}
</style>
