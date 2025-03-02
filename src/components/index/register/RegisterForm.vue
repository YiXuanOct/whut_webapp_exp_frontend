<script setup>
import {reactive} from "vue";

const form = reactive({
    "name": "",
    "password": "",
    "email": "",
    "date": ""
})
</script>

<template>
    <el-form :model="form">
        <el-form-item>
            <el-input v-model="form.name" placeholder="用户名"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.password" placeholder="密码"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.email" placeholder="邮箱"/>
        </el-form-item>
        <el-form-item>
            <el-date-picker v-model="form.date" placeholder="年 / 月 / 日"/>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.el-form {
    margin: auto;
    width: 200px;
}

.el-form-item {
    margin-bottom: 0;
}

.el-button, .el-input, .el-date-picker {
    width: 100%;
    height: 100%;
}

.el-form-item + .el-form-item {
    margin-top: 16px;
}
</style>