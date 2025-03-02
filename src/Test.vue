<template>
    <el-drawer v-model="drawer" :direction="'ltr'" :with-header="false">
    </el-drawer>
    <el-button @click="drawer=true">1</el-button>
</template>

<script setup>
import {ref} from "vue";

const drawer = ref(false);
</script>
<style scoped>
</style>