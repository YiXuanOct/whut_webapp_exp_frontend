<script setup>
import RegisterForm from "@/components/index/register/RegisterForm.vue";
import RegisterAvatar from "@/components/index/register/RegisterAvatar.vue";

</script>

<template>
    <RegisterForm/>
    <el-divider direction="vertical"/>
    <RegisterAvatar/>
</template>

<style scoped>
.el-divider {
    height: auto;
    border-left: 1px black solid;
}
</style>