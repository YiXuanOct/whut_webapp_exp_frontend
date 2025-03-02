<script setup>
import {reactive, ref} from "vue";
import router from "@/router/index.js";

const form = ref({
    name: '',
    password: '',
})

function goToHomeFront() {
    router.push("/home/front")
}
</script>

<template>
    <el-form :model="form">
        <el-form-item>
            <el-input v-model="form.name" placeholder="用户名"/>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.password" type="password" placeholder="密码"/>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="goToHomeFront">登录</el-button>
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

.el-form-item + .el-form-item {
    margin-top: 16px;
}

.el-button, .el-input {
    width: 100%;
    height: 100%;
    font-size: 16px;
}

@media (max-width: 800px) {
    .el-form {
        margin-top: 24px;
    }
}
</style>