<template>
  <div class="space-y-5">
    <div class="card-auto space-y-5">
      <div class="grid grid-cols-12 gap-5">
        <div class="lg:col-span-8 col-span-12 space-y-5">
          <Table />
        </div>
        <div class="lg:col-span-4 col-span-12 space-y-5">
          <Table2 />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "./Table";
import Table2 from "./Table2";
export default {
  components: {
    Table,
    Table2
  },
};
</script>
<style lang="scss">
.vgt-inner-wrap {
  @apply shadow-none;
}
</style>
