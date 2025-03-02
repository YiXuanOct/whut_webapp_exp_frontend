<script setup>
import {ArrowDown} from "@element-plus/icons-vue";
import {inject} from "vue";
import router from "@/router/index.js";

const user = inject("user");

function goToLogin() {
    router.push("/login")
}
</script>

<template>
    <el-dropdown>
        <span class="el-dropdown-link">{{ user.name }}
            <el-icon class="el-icon--right"><arrow-down/></el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="goToLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
}

.el-dropdown-link:focus {
    outline: unset;
}
</style>