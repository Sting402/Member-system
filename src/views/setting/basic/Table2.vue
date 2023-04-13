<template>
  <div>
    <Card title="代理商角色維護" noborder>
      <div class="-mx-6">
        <vue-good-table
          :columns="columns"
          styleClass=" vgt-table centered  lesspadding2 table-head "
          :rows="agentPriceTable"
          :pagination-options="{
            enabled: false,
            perPage: perpage,
          }"
          :sort-options="{
            enabled: false,
          }"

        compactMode>
          <template v-slot:table-row="props">



            <span v-if="props.column.field == 'action'">
              <div class="flex space-x-3 rtl:space-x-reverse">
                <Tooltip placement="top" arrow theme="dark">
                  <template #button>
                    <div class="action-btn">
                      <Icon icon="heroicons:pencil-square" />
                    </div>
                  </template>
                  <span> 編輯</span>
                </Tooltip>

              </div>
            </span>
          </template>
          <template #pagination-bottom="props">
            <div class="py-4 px-3 flex justify-center">
              <Pagination
                :total="50"
                :current="current"
                :per-page="perpage"
                :pageRange="pageRange"
                @page-changed="current = $event"
                :pageChanged="props.pageChanged"
                :perPageChanged="props.perPageChanged"
              >
                >
              </Pagination>
            </div>
          </template>
        </vue-good-table>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import Pagination from "@/components/Pagination";
import { agentPriceTable } from "../../../constant/demo-data";
export default {
  components: {
    Pagination,
    Icon,
    Tooltip,
    Card,
  },

  data() {
    return {
      agentPriceTable,
      current: 1,
      perpage: 10,
      pageRange: 5,
      searchTerm: "",

      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      columns: [
        // {
        //   label: "Id",
        //   field: "id",
        // },
        {
          label: "目前名稱",
          field: "role",
        },


        {
          label: "",
          field: "action",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.action-btn {
  @apply h-6 w-6 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 rounded;
}
</style>
