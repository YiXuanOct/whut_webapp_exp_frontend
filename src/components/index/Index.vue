<script setup>
import router from "@/router/index.js";
import Login from "@/components/index/login/Login.vue";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import Register from "@/components/index/register/Register.vue";
import updatePwd from "@/components/index/updatePwd/updatePwd.vue";
import {ElMessage} from "element-plus";

const route = useRoute();
const currentComponent = ref(null);
const componentMap = {login: Login, register: Register, updatePwd: updatePwd};
const text = ref({
    header: "登录",
    "left-button": {text: "注册用户", type: "/register"},
    "right-button": {text: "修改密码", type: "/updatePwd"},
    alert: ''
});

function loadComponent() {
    const componentName = route.params.sub;
    currentComponent.value = componentMap[componentName] || null;
}

function updateText() {
    if (route.params.sub === "login") {
        text.value = {
            header: "登录",
            "left-button": {text: "注册用户", type: "/register"},
            "right-button": {text: "修改密码", type: "/updatePwd"}
        }
    } else if (route.params.sub === "register") {
        text.value = text.value = {
            header: "注册新用户",
            "left-button": {text: "注册用户", type: "/submit"},
            "right-button": {text: "返回登录", type: "/login"},
            alert: "注册成功"
        }
    } else if (route.params.sub === "updatePwd") {
        text.value = text.value = {
            header: "修改密码",
            "left-button": {text: "修改密码", type: "/submit"},
            "right-button": {text: "返回登录", type: "/login"},
            alert: "修改成功"
        }
    }
}

watch(() => route.params.sub, loadComponent);
watch(() => route.params.sub, updateText);
onMounted(loadComponent);
onMounted(updateText);

async function toggle(type) {
    if (type !== "/submit") {
        router.push(type);
    } else {
        try {
            const form = await formRef.value.getForm();
            console.log(form);
            ElMessage.success(text.value.alert);
        } catch (error) {
            console.log("表单校验失败");
        }
    }
}


const formRef = ref(null);

</script>

<template>
    <el-container>
        <el-main>
            <div class="card">
                <div class="card-header">
                    <h1>{{ text.header }}</h1>
                </div>
                <div class="card-body">
                    <component :is="currentComponent" ref="formRef"/>
                </div>
                <div class="card-footer">
                    <el-button link color="black" @click="toggle(text['left-button'].type)">{{
                            text["left-button"].text
                        }}
                    </el-button>
                    <el-button link color="black" @click="toggle(text['right-button'].type)">{{
                            text["right-button"].text
                        }}
                    </el-button>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100vh;
    background: url("@/assets/loginbg.jpg") center center no-repeat;
    background-size: cover;
}

.el-main {
    display: flex;
    align-items: start;
    justify-content: center;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 0;
    width: 600px;
    margin-top: 20vh;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.card-header h1 {
    margin-top: 0;
}

.card-body {
    width: 100%;
    display: flex;
    justify-content: center;
}


.card-footer {
    margin-top: 24px;
    padding: 16px 24px;
    width: 100%;
    display: flex;
    background: rgba(128, 128, 128, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 0 0 10px 10px;
}

.card-footer .el-button {
    flex: 1;
    font-size: 16px;
}

.el-button + .el-button {
    margin-left: 0;
}


@media (max-width: 800px) {
    .el-container {
        background-position: 75% center;
    }

    .card {
        margin-top: 10vh;
        width: 300px;
    }

    .card-body {
        flex-direction: column;
    }

    .el-divider {
        display: none;
    }

    .card-footer {
        flex-direction: column;
    }

    .el-button + .el-button {
        margin-top: 16px;
    }

    .el-divider {
        display: none;
    }
}
</style>