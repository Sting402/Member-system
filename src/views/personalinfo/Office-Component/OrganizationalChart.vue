<script setup>
import { ref,reactive } from 'vue';
const data = reactive({
    "id": 1,
    "label": "妤果",
    "children": [
        {
            "id": 2,
            "pid": 1,
            "label": "產品研發部產品研發部產品研發部產品研發部產品研發部",
            "style": { "color": "#fff", "background": "#108ffe" },
            "children": [
                { "id": 6, "pid": 2, "label": "禁止", "disabled": true },
                { "id": 8, "pid": 2, "label": "禁止", "noDragging": true },
                { "id": 10, "pid": 2, "label": "測試" }
            ]
        },
        {
            "id": 3,
            "pid": 1,
            "label": "客服部",
            "children": [
                {
                    "id": 11, "pid": 3,
                    "label": "客服一部",
                    "children": [
                        { "id": 11, "pid": 3, "label": "客服一部" },
                        { "id": 12, "pid": 3, "label": "客服二部" }
                    ]

                },
                { "id": 12, "pid": 3, "label": "客服二部" }
            ]
        },
        { "id": 4, "pid": 1, "label": "業務部" }
    ]
});
const keyword = ref('');
const horizontal = ref(false);
const collapsable = ref(true);
const onlyOneNode = ref(true);
const cloneNodeDrag = ref(true);
const expandAll = ref(true);
const style = ref({
    background: "#fff",
    color: "#5e6d82",
});

function onMenus({ node, command }) {
    console.log(node, command);
}

function restore() {
    console.log('restore');
}

// function filter() {
//     $refs.tree.filter(keyword.value);
// }

function filterNodeMethod(value, data) {
    console.log(value, data);
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
}

function onNodeClick(e, data) {
   console.log(e);
   console.log(data);
}

function expandChange() {
    toggleExpand(data, expandAll.value);
}

function toggleExpand(data, flag) {
    if (data.children && data.children.length) {
        data.expanded = flag;
        data.children.forEach((child) => {
            toggleExpand(child, flag);
        });
    }
}
data.children[1].children[0].children = [{ "id": 13, "pid": 11, "label": "客服一部-1" }, { "id": 14, "pid": 11, "label": "客服一部-2" }];

data.children[1].children[1].children = [{ "id": 15, "pid": 12, "label": "客服二部-1" }, { "id": 16, "pid": 12, "label": "客服二部-2" }];

</script>
<template>
    <div style="height: 400px;">
        <vue3-tree-org
            :data="data"
            :horizontal="horizontal"
            :collapsable="collapsable"
            :label-style="style"
            :tool-bar="false"
            :scalable="false"
            :node-draggable="false"
            :only-one-node="onlyOneNode"
            :clone-node-drag="cloneNodeDrag"
            @on-contextmenu="onMenus"
            @on-node-click="onNodeClick"
        />
    </div>
</template>
<style lang="scss" scoped>
.tree-wrap {
    position: relative;
}
.tree-org-node__text {
    text-align: left;
    font-size: 14px;

    .custom-content {
        padding-bottom: 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid currentColor;
    }
}
</style>
