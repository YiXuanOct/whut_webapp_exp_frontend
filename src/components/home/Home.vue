<script setup>

import Front from "@/components/home/Front.vue";
import {useRoute} from "vue-router";
import {onMounted, provide, ref, watch} from "vue";
import User from "@/components/home/User.vue";
import Menu from "@/components/home/Menu.vue";

const user = ref({
    name: '张三',
    avatarUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
});
const route = useRoute();
const currentComponent = ref(null);
const componentMap = {front: Front, user: User};
const drawer = ref(false);
const isMobile = ref(false);

function loadComponent() {
    const componentName = route.params.sub;
    currentComponent.value = componentMap[componentName] || null;
}

function toggleAside() {
    drawer.value = !drawer.value;
}

function handleResize() {
    isMobile.value = window.innerWidth <= 800;
}

provide('user', user);
provide('toggleAside', toggleAside);
provide('isMobile', isMobile);
watch(() => route.params.sub, loadComponent);
onMounted(loadComponent);
onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
})
</script>

<template>
    <el-container>
        <el-drawer v-model="drawer" :direction="'ltr'" :with-header="false" size="250" v-if="isMobile">
            <Menu/>
        </el-drawer>
        <el-aside v-else>
            <Menu/>
        </el-aside>
        <el-main style="padding:0">
            <component :is="currentComponent"/>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100vh;
}

.el-main .el-container {
    height: 100%;
}

.el-aside {
    width: 250px;
}
</style>
<style>
.el-drawer__body {
    padding: 0 !important;
}
</style>