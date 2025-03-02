<template>
    <el-dialog v-model="visible" :title="isEditMode ? '编辑用户信息' : '添加用户信息'" width="30%">
        <el-form :model="form" label-width="auto">
            <el-form-item label="序号">
                <el-input v-model="form.no" disabled></el-input>
            </el-form-item>
            <el-form-item label="日期">
                <el-date-picker
                    v-model="form.date"
                    type="datetime"
                    placeholder="选择日期时间"
                    value-format="YYYY-MM-DD HH:mm:ss"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="省份">
                <el-input v-model="form.province"></el-input>
            </el-form-item>
            <el-form-item label="市区">
                <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="邮编">
                <el-input v-model="form.postcode"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="visible = false">取消</el-button>
            <el-button type="primary" @click="handleSave">保存</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import {ref} from 'vue';

const visible = ref(false);
const isEditMode = ref(false);
const form = ref({
    no: '',
    date: '',
    name: '',
    province: '',
    city: '',
    address: '',
    postcode: ''
});
const emit = defineEmits(['save']);

const open = (row) => {
    if (row) {
        form.value = {...row};
        isEditMode.value = true;
    } else {
        form.value = {
            no: '',
            date: '',
            name: '',
            province: '',
            city: '',
            address: '',
            postcode: ''
        };
        isEditMode.value = false;
    }
    visible.value = true;
};

const handleSave = () => {
    emit('save', form.value);
    visible.value = false;
};

defineExpose({
    open
});
</script>