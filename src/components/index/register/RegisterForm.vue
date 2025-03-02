<script setup>
import {ref} from "vue";

const form = ref({
    name: "",
    password: "",
    email: "",
    date: ""
})
const rules = ref({
    name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {
            validator: (rule, value, callback) => {
                const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d\W_]+$/;
                if (!regex.test(value)) {
                    callback(new Error('密码必须包含大小写字母和数字'));
                } else {
                    callback();
                }
            },
            trigger: "blur"
        }
    ],
    email: [
        {required: true, message: '请输入邮箱', trigger: "blur"},
        {type: "email", message: '请输入正确的邮箱格式', trigger: "blur"}
    ],
    date: [
        {required: true, message: '请选择日期', trigger: "blur"},
    ]
})
const formRef = ref(null);

function getForm() {
    return new Promise((resolve, reject) => {
        formRef.value.validate((valid) => {
            if (valid) {
                resolve(form.value);
            } else {
                reject();
            }
        });
    });
}

defineExpose({getForm})
</script>

<template>
    <el-form :model="form" :rules="rules" ref="formRef" status-icon>
        <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="用户名"/>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="密码"/>
        </el-form-item>
        <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="邮箱"/>
        </el-form-item>
        <el-form-item prop="date">
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