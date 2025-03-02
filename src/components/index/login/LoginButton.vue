<script setup>
import QQ from "@/assets/QQ.svg"
import Wechat from "@/assets/Wechat.svg"
import Alipay from "@/assets/Alipay.svg"

const buttons = [
    {"text": "QQ登录", "img": QQ, "type": "primary"},
    {"text": "微信登录", "img": Wechat, "type": "success"},
    {"text": "支付宝登录", "img": Alipay, "type": "default"}
]
</script>
<template>
    <div class="login-button">
        <el-button v-for="button in buttons" :type="button.type">
            <img :src=button.img alt="">
            {{ button.text }}
        </el-button>
    </div>
</template>

<style scoped>
.login-button {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 200px;
}

.el-button {
    height: 40px;
    font-size: 16px;
    justify-content: start;
}

.el-button + .el-button {
    margin-left: 0;
    margin-top: 16px;
}

.el-button img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}
</style>