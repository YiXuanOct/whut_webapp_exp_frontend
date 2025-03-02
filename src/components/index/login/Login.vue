<script setup>
import LoginForm from "@/components/index/login/LoginForm.vue";
import LoginButton from "@/components/index/login/LoginButton.vue";
</script>

<template>
    <LoginButton/>
    <el-divider direction="vertical"/>
    <LoginForm/>
</template>

<style scoped>

.el-divider {
    height: auto;
    border-left: 1px black solid;
}
</style>