<script setup>
import RegisterForm from "@/components/index/register/RegisterForm.vue";
import RegisterAvatar from "@/components/index/register/RegisterAvatar.vue";
import {ref} from "vue";

const formRef = ref(null)
const avatarRef = ref(null)

const getForm = async () => {
    try {
        const [form, avatar] = await Promise.all([
            formRef.value.getForm(),
            avatarRef.value.getForm()
        ]);
        return Object.assign(form, avatar);
    } catch (error) {
        throw new Error();
    }
}

defineExpose({getForm})
</script>

<template>
    <RegisterForm ref="formRef"/>
    <el-divider direction="vertical"/>
    <RegisterAvatar ref="avatarRef"/>
</template>

<style scoped>
.el-divider {
    height: auto;
    border-left: 1px black solid;
}
</style>