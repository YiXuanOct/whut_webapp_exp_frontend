<script setup>
import {reactive} from "vue";

const form = reactive({
    "new-password": "",
    "confirm-new-password": "",
})
</script>

<template>
    <el-form :model="form" class="new">
        <el-form-item>
            <el-input v-model="form['new-password']" placeholder="新密码"/>
        </el-form-item>
        <el-form-item>
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