<template>
  <div>
    <Card noborder>
      <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
        <h5>董事代理商訂單維護</h5>
        <InputGroup v-model="searchTerm" placeholder="搜尋" type="text" prependIcon="heroicons-outline:search" merged />

      </div>

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
            <Dropdown classMenuItems=" w-[140px]">
              <span class="text-xl">
                <Icon icon="heroicons-outline:dots-vertical" />
              </span>
              <template v-slot:menus>
                <MenuItem v-for="(item, i) in actions" :key="i">
                <div
                @click="item.doit"
                  :class="`
                      ${item.name === '取消訂單'
                          ? 'bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white'
                          : 'hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50'
                        }
                  w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse `">
                  <span class="text-base">
                    <Icon :icon="item.icon" />
                  </span>
                  <span>{{ item.name }}</span>
                </div>
                </MenuItem>
              </template>
            </Dropdown>
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
    </Card>
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import Pagination from "@/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { compOrderTable } from "../../constant/demo-data";
export default {
  components: {
    Pagination,
    InputGroup,
    Dropdown,
    Icon,
    Card,
    MenuItem,
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
            this.$router.push("/ams/order-view");
          },
        },
        {
          name: "編輯訂單",
          icon: "heroicons:pencil-square",
          doit: () => {
            this.$router.push("/ams/order-edit");
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

</style>
