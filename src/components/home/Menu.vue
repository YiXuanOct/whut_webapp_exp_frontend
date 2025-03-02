<script setup>

import {Document, Location, Setting} from "@element-plus/icons-vue";
import router from "@/router/index.js";
import {inject} from "vue";

const toggleAside = inject("toggleAside");

function goToFront() {
    router.push("/home/front")
    toggleAside();
}

function goToUser() {
    router.push("/home/user")
    toggleAside();
}

function toggleBlueTheme() {
    document.documentElement.style.setProperty('--menu-bg-color', 'rgb(121.3, 187.1, 255)');
    document.documentElement.style.setProperty('--active-bg-color', 'rgb(235.9, 245.3, 255)');
    document.documentElement.style.setProperty('--main-bg-color', 'rgb(216.8, 235.6, 255)');
    document.documentElement.style.setProperty('--header-bg-color', 'rgb(51.2, 126.4, 204)');
}

function toggleYellowTheme() {
    document.documentElement.style.setProperty('--menu-bg-color', 'rgb(237.5, 189.9, 118.5)');
    document.documentElement.style.setProperty('--active-bg-color', 'rgb(252.5, 245.7, 235.5)');
    document.documentElement.style.setProperty('--main-bg-color', 'rgb(250, 236.4, 216)');
    document.documentElement.style.setProperty('--header-bg-color', 'rgb(184, 129.6, 48)');
}
</script>

<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" :default-openeds="['2','3']">
        <el-menu-item index="1" @click="goToFront">
            <template #title>
                <el-icon>
                    <document/>
                </el-icon>
                <span>首页</span>
            </template>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <location/>
                </el-icon>
                <span>功能菜单</span>
            </template>
            <el-menu-item index="2-1" @click="goToUser">用户管理</el-menu-item>
            <el-menu-item index="2-2">文章管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <document/>
                </el-icon>
                <span>主题切换</span>
            </template>
            <el-menu-item index="3-1" @click="toggleBlueTheme">蓝色风格</el-menu-item>
            <el-menu-item index="3-2" @click="toggleYellowTheme">黄色风格</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">
            <template #title>
                <el-icon>
                    <document/>
                </el-icon>
                <span>导航三</span>
            </template>
        </el-menu-item>
        <el-menu-item index="5">
            <template #title>
                <el-icon>
                    <setting/>
                </el-icon>
                <span>导航四</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    height: 100vh;
}

.el-sub-menu, .el-menu-item:not(.el-sub-menu .el-menu-item) {
    background-color: var(--menu-bg-color);
}

.el-menu-item.is-active {
    background-color: var(--active-bg-color) !important;
}
</style>