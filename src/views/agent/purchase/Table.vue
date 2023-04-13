<template>
  <div>
    <Card noborder>
      <div class="md:flex pb-6 items-center">
        <h6 class="flex-1 md:mb-0 mb-3">進貨訂單查詢</h6>
        <div
          class="md:flex md:space-x-3 items-center flex-none rtl:space-x-reverse"
          :class="window.width < 768 ? 'space-x-rb' : ''"
        >
          <InputGroup
            v-model="searchTerm"
            placeholder="查詢"
            type="text"
            prependIcon="heroicons-outline:search"
            merged
          />
          <Button
            icon="heroicons-outline:plus-sm"
            text="新增訂貨單"
            btnClass=" btn-dark font-normal btn-sm "
            iconClass="text-lg"
            link="agent-purchase-add"
          />
        </div>
      </div>
      <div class="-mx-6">
        <vue-good-table 
        :columns="columns" 
        styleClass=" vgt-table bordered centered" 
        :rows="compOrderTable"
        :pagination-options="{
          enabled: true,
          perPage: perpage,
        }" 
        :search-options="{
          enabled: true,
          externalQuery: searchTerm,
        }" 
        compactMode>
        
        <template v-slot:table-row="props">

          <span v-if="props.column.field == 'name'">
            <span style="font-weight: bold; white-space: nowrap; ">{{props.row.name}} <br/></span>
          </span>

          <span v-if="props.column.field == 'order'">
            {{ "#" + props.row.order }}
          </span>
          <!-- <span v-if="props.column.field == 'date'" class="text-slate-500 dark:text-slate-300">
            {{ props.row.date }}
          </span> -->
          <span v-if="props.column.field == 'status'" class="block w-full">
            <span class="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[10px] bg-opacity-20" 
            :class="`${props.row.status === '全部出貨'
                        ? 'text-success-500 bg-success-500'
                        : ''
                        } 
                                            ${props.row.status === '部分出貨'
                          ? 'text-warning-500 bg-warning-500'
                          : ''
                        }
                                            ${props.row.status === '待出貨'
                          ? 'text-danger-500 bg-danger-500'
                          : ''
                        }
                                            ${props.row.status === '已取消'
                          ? 'text-gray-500 bg-gray-500'
                          : ''
                        }
                        
            `">
              {{ props.row.status }}
            </span>
          </span>
          <span v-if="props.column.field == 'action'">
              <div class="flex space-x-3 rtl:space-x-reverse">
                <Tooltip placement="top" arrow theme="dark">
                  <template #button>
                    <div class="action-btn">
                      <Icon icon="heroicons:eye" />
                    </div>
                  </template>
                  <span> View</span>
                </Tooltip>
                <Tooltip placement="top" arrow theme="dark">
                  <template #button>
                    <div class="action-btn">
                      <Icon icon="heroicons:pencil-square" />
                    </div>
                  </template>
                  <span> Edit</span>
                </Tooltip>
                <Tooltip placement="top" arrow theme="danger-500">
                  <template #button>
                    <div class="action-btn">
                      <Icon icon="heroicons:trash" />
                    </div>
                  </template>
                  <span>Delete</span>
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
            :options="options">
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
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Tooltip from "@/components/Tooltip";
import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { compOrderTable } from "../../../constant/demo-data";
import window from "@/mixins/window";
export default {
  mixins: [window],
  components: {
    Pagination,
    InputGroup,
    Dropdown,
    Icon,
    Tooltip,
    Card,
    MenuItem,
    Button,
  },

  data() {
    return {
      compOrderTable,
      current: 1,
      perpage: 10,
      pageRange: 5,
      searchTerm: "",
      actions: [
        {
          name: "查看訂單",
          icon: "heroicons-outline:eye",
          doit: () => {
            this.$router.push("/ams/purchase-view");
          },
        },
        {
          name: "編輯訂單",
          icon: "heroicons:pencil-square",
          doit: () => {
            this.$router.push("/ams/purchase-edit");
          },
        },
        // {
        //   name: "取消訂單",
        //   icon: "heroicons-outline:trash",
        //   doit: () => {
        //     this.$router.push("/app/invoice-preview");
        //   },
        // },
      ],
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

      {
          label: "狀態",
          field: "status",
          width: '100px',
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: ' ', // placeholder for filter input
            filterDropdownItems: ['待出貨', '部分出貨', '全部出貨', '已取消'], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        // {
        //   label: "訂單編號",
        //   field: "order",
        //   filterOptions: {
        //     styleClass: 'class1', // class to be added to the parent th element
        //     enabled: true, // enable filter for this column
        //     placeholder: '查詢', // placeholder for filter input
        //     filterDropdownItems: [], // dropdown (with selected values) instead of text input
        //     filterFn: this.columnFilterFn, //custom filter function that
        //   },
        // },

        // {
        //   label: "編號",
        //   field: "id",
        //   filterOptions: {
        //     styleClass: 'class1', // class to be added to the parent th element
        //     enabled: true, // enable filter for this column
        //     placeholder: '查詢', // placeholder for filter input
        //     filterDropdownItems: [], // dropdown (with selected values) instead of text input
        //     filterFn: this.columnFilterFn, //custom filter function that
        //   },
        // },

        {
          label: "姓名",
          field: "name",
          width: '100px',
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: '查詢', // placeholder for filter input
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        {
          label: "訂購日期",
          field: "date",
          width: '100px',
          //type: 'date',
          // dateInputFormat: 'yyyy/MM/dd', // expects 2018-03-16
          // dateOutputFormat: 'MMM do yyyy', // outputs Mar 16th 2018
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: '查詢', // placeholder for filter input
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        {
          label: "完成日期",
          field: "edate",
          width: '100px',
          //type: 'date',
          // dateInputFormat: 'yyyy/MM/dd', // expects 2018-03-16
          // dateOutputFormat: 'MMM do yyyy', // outputs Mar 16th 2018
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: '查詢', // placeholder for filter input
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        {
          label: "金額",
          field: "amount",
          width: '100px',
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: '查詢', // placeholder for filter input
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        {
          label: "運送方式",
          field: "shipment",
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: ' ', // placeholder for filter input
            filterDropdownItems: ['自取', '郵寄'], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        {
          label: "付款方式",
          field: "payment",
          filterOptions: {
            styleClass: 'class1', // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: ' ', // placeholder for filter input
            filterDropdownItems: ['現金', '匯款'], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
          },
        },

        {
          label: "",
          field: "action",
          sortable: false,
        },
        
      ],
    };
  },


};
</script>
<style lang="scss">
.action-btn {
  @apply h-6 w-6 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 rounded;
}
</style>
