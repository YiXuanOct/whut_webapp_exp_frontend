<script setup>
import {ref} from "vue";

const form = ref({
    "name": "",
    "old-password": "",
})
const rules = ref({
    "name": [
        {required: true, message: "请输入用户名", trigger: "blur"},
    ],
    "old-password": [
        {required: true, message: "请输入旧密码", trigger: "blur"},
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
    ]
})
const formRef = ref(null);

const getForm = () => {
    return new Promise((resolve, reject) => {
        formRef.value.validate((valid) => {
            if (valid) {
                resolve(form.value);
            } else {
                reject();
            }
        });
    });
};

defineExpose({getForm});
</script>

<template>
    <el-form :model="form" :rules="rules" ref="formRef" status-icon>
        <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="用户名"/>
        </el-form-item>
        <el-form-item prop="old-password">
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