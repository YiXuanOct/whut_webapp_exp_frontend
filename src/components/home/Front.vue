<script setup>
import {inject} from "vue";
import Dropdown from "@/components/home/Dropdown.vue";
import {Memo} from "@element-plus/icons-vue";

const user = inject("user");
const toggleAside = inject("toggleAside");
const isMobile = inject("isMobile");
</script>

<template>
    <el-container>
        <el-header>
            <el-button link @click="toggleAside" v-if="isMobile">
                <el-icon>
                    <Memo/>
                </el-icon>
            </el-button>
            <Dropdown/>
        </el-header>
        <el-main>
            <div class="main-body">
                <div class="avatar">
                    <h1>欢迎 {{ user.name }}</h1>
                    <div class="avatar-body">
                        <el-avatar shape="square" :src="user.avatarUrl" fit="fill" style="width: 80%;height: 80%"/>
                    </div>
                </div>
                <el-calendar/>
            </div>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100%;
}

.el-header {
    background-color: var(--header-bg-color);
    display: flex;
    justify-content: end;
}

.el-header .el-button {
    font-size: 20px;
    color: black;
    outline: none;
    flex: 1;
    display: flex;
    justify-content: start;
}

.el-main {
    background-color: var(--main-bg-color);
}

.main-body {
    display: flex;
}

.avatar {
    margin: 24px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.avatar-body {
    width: 80%;
    aspect-ratio: 1 / 1;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.el-calendar {
    flex: 2;
}

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