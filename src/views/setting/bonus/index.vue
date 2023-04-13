<template>
  <div class="space-y-5">
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-6 col-span-12 space-y-5">
          <Table />
        </div>
        <div class="lg:col-span-6 col-span-12 space-y-5">
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import Table from "./Table";
export default {
  components: {
    Table,
  },
};
</script>
<style lang="scss">
.vgt-inner-wrap {
  @apply shadow-none;
}
</style>
