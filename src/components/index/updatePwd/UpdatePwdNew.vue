<script setup>
import {ref} from "vue";

const form = ref({
    "new-password": "",
    "confirm-new-password": "",
})

const rules = ref({
    "new-password": [
        {required: true, message: "请输入新密码", trigger: "blur"},
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
    "confirm-new-password": [
        {required: true, message: "请再次输入新密码", trigger: "blur"},
        {
            validator: (rule, value, callback) => {
                if (value !== form.value["new-password"]) {
                    callback(new Error("两次输入的密码不一致"));
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
    <el-form :model="form" class="new" ref="formRef" :rules="rules" status-icon>
        <el-form-item prop="new-password">
            <el-input v-model="form['new-password']" placeholder="新密码"/>
        </el-form-item>
        <el-form-item prop="confirm-new-password">
            <el-input v-model="form['confirm-new-password']" placeholder="确认新密码"/>
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

@media (max-width: 800px) {
    .new {
        margin-top: 24px;
    }
}
</style>