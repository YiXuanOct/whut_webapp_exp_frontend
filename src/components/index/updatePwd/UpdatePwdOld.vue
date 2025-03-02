<script setup>
import {reactive} from "vue";

const form = reactive({
    "name": "",
    "old-password": "",
})
</script>

<template>
    <el-form :model="form">
        <el-form-item>
            <el-input v-model="form.name" placeholder="用户名"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form['old-password']" placeholder="旧密码"/>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.el-form {
    margin: 0 auto;
    width: 200px;
}

.el-form-item {
    height: 40px;
    margin-bottom: 0;
}

.el-button, .el-input {
    width: 100%;
    height: 100%;
    font-size: 16px;
}

.el-form-item + .el-form-item {
    margin-top: 16px;
}
</style>