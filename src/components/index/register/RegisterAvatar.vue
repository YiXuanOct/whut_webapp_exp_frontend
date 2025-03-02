<script setup>

import {ElMessage} from "element-plus";
import {ref} from "vue";
import {Plus} from "@element-plus/icons-vue";

const form = ref({
    imageUrl: ""
})
const rules = {
    imageUrl: [
        {required: true, message: "请上传头像", trigger: "blur"},
    ]
}
const formRef = ref(null);
const handleAvatarSuccess = (response, uploadFile) => {
    form.value.imageUrl.value = URL.createObjectURL(uploadFile.raw);
};
const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
        ElMessage.error('上传的图片必须是JPG/PNG格式！')
        return false;
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error("上传的图片大小不能超过2MB！")
        return false;
    }
    return true
}

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
    <el-form label-position="top" :model="form" :rules="rules" ref="formRef" :hide-required-asterisk="true">
        <el-form-item label="请上传头像" prop="imageUrl">
            <el-upload class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess"
                       :before-upload="beforeAvatarUpload">
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" alt=""/>
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus/>
                </el-icon>
            </el-upload>
        </el-form-item>
    </el-form>
</template>
<style scoped>
.el-form {
    margin: 0 auto;
    width: 200px;
}

.el-form-item {
    margin-bottom: 0;
}

@media (max-width: 800px) {
    .el-form {
        margin-top: 24px;
    }
}
</style>
<style>
.el-form-item__label {
    width: 100%;
    text-align: center !important;
    font-size: 16px;
    font-weight: bold;
}

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.avatar-uploader .el-upload {
    border: 1px dashed black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

</style>