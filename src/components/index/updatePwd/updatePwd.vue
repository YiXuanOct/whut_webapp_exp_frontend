<script setup>
import UpdatePwdOld from "@/components/index/updatePwd/UpdatePwdOld.vue";
import UpdatePwdNew from "@/components/index/updatePwd/UpdatePwdNew.vue";
</script>

<template>
    <UpdatePwdOld/>
    <el-divider direction="vertical"/>
    <UpdatePwdNew/>
</template>

<style scoped>
.el-divider {
    height: auto;
    border-left: 1px black solid;
}
</style>