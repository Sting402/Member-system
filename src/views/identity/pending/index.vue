<template>
  <div>
    <!-- <Breadcrumb /> -->
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-12 col-span-12 space-y-5">
          <Card title="代理會員申請流程-訂單待審核">
            <mainList />
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "@/components/Card";
import mainList from "./module/mainList.vue";
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
