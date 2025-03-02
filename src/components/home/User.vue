<script setup>
import {inject, onMounted, ref} from "vue";
import Dialog from "@/components/home/Dialog.vue";
import Dropdown from "@/components/home/Dropdown.vue";
import {Memo} from "@element-plus/icons-vue";

const originData = ref([
    {
        no: '1',
        date: '2016-05-03 08:00:00',
        name: '张小三',
        province: '湖北省',
        city: '武汉市洪山区',
        address: 'No. 189, Grove St, Los Angeles',
        postcode: '222222'
    },
    {
        no: '2',
    },
    {
        no: '3',
    },
    {
        no: '4',
    },
    {
        no: '5',
    },
]);
const filteredData = ref([]);
filteredData.value = originData.value;
const tableData = ref([]);
const currentPage = ref(1);
const pageSize = ref(5);
const total = ref(originData.value.length);
const DialogRef = ref(null);
const searchKeyword = ref('');
const toggleAside = inject("toggleAside");
const isMobile = inject("isMobile");

function handleSizeChange(newSize) {
    pageSize.value = newSize;
    fetchTableData();
}

function handleCurrentChange(newPage) {
    currentPage.value = newPage;
    fetchTableData();
}

function fetchTableData() {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    tableData.value = filteredData.value.slice(start, end);
}

function handleEdit(row) {
    DialogRef.value.open(row);
}

function handleDelete(row) {
    originData.value = originData.value.filter(item => item.no !== row.no);
    originData.value.forEach((item, index) => {
        item.no = String(index + 1);
    });
    total.value = originData.value.length;
    filteredData.value = originData.value;
    fetchTableData();
}

function handleSave(updatedRow) {
    if (updatedRow.no) {
        const index = originData.value.findIndex(item => item.no === updatedRow.no);
        if (index !== -1) {
            originData.value[index] = {...updatedRow};
            filteredData.value = originData.value;
        }
    } else {
        updatedRow.no = String(originData.value.length + 1);
        originData.value.push(updatedRow);
        total.value = originData.value.length;
        currentPage.value = Math.ceil(total.value / pageSize.value);
        filteredData.value = originData.value;
    }
    fetchTableData();
}

function handleSearch() {
    if (searchKeyword.value.trim()) {
        filteredData.value = originData.value.filter(item => item.name === searchKeyword.value);
    } else {
        filteredData.value = originData.value;
    }
    fetchTableData();
}

function handleAdd() {
    DialogRef.value.open();
}

onMounted(fetchTableData);
</script>

<template>
    <el-container>
        <el-header>
            <el-button link @click="toggleAside" v-if="isMobile">
                <el-icon>
                    <Memo/>
                </el-icon>
            </el-button>
            <Dropdown/>
        </el-header>
        <el-main>
            <div class="main-body">
                <h1>用户管理</h1>
                <div class="table-tool">
                    <el-button plain type="primary" @click="handleAdd">添加</el-button>
                    <el-input v-model="searchKeyword" placeholder="请输入姓名" @keyup.enter="handleSearch">
                        <template #append>
                            <el-button type="primary" @click="handleSearch">搜索</el-button>
                        </template>
                    </el-input>
                </div>
                <el-table :data="tableData" border style="width: 100%" height="100%">
                    <el-table-column prop="no" label="序号" width="60"></el-table-column>
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                    <el-table-column prop="province" label="省份" width="120"></el-table-column>
                    <el-table-column prop="city" label="市区" width="120"></el-table-column>
                    <el-table-column prop="address" label="地址" min-width="360"></el-table-column>
                    <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="120">
                        <template #default="scope">
                            <el-button link type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                            <el-popconfirm title="确定要删除这行信息吗？" confirm-button-type="danger"
                                           @confirm="handleDelete(scope.row)">
                                <template #reference>
                                    <el-button link type="primary" size="small">删除
                                    </el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination :current-page="currentPage" :page-size="pageSize" :total="total"
                               :page-sizes="[5,10,15,20]"
                               layout="total,sizes,prev,pager,next" @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"/>
            </div>
        </el-main>
    </el-container>
    <Dialog ref="DialogRef" @save="handleSave"/>
</template>

<style scoped>
.el-container {
    height: 100%;
}

.el-header {
    background-color: var(--header-bg-color);
    display: flex;
    justify-content: end;
}

.el-header .el-button {
    font-size: 20px;
    color: black;
    outline: none;
    flex: 1;
    display: flex;
    justify-content: start;
}

.el-main {
    background-color: var(--main-bg-color);
    text-align: center;
}

.main-body {
    background-color: white;
    border-radius: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;
}

.main-body h1 {
    font-size: 36px;
}

.el-table {
    flex: 1;
}

.el-pagination {
    margin: 10px 0;
}

.table-tool {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 6px 0;
}

.table-tool .el-input {
    max-width: 400px;
}

.el-dropdown-link {
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
}

.el-dropdown-link:focus {
    outline: unset;
}
</style>

<style>
.cell {
    height: 30px;
    display: flex;
    align-items: center;
}
</style>