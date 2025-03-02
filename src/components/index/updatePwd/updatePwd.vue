<script setup>
import UpdatePwdOld from "@/components/index/updatePwd/UpdatePwdOld.vue";
import UpdatePwdNew from "@/components/index/updatePwd/UpdatePwdNew.vue";
import {ref} from "vue";

const oldFormRef = ref(null);
const newFormRef = ref(null);

const getForm = async () => {
    try {
        const [oldForm, newForm] = await Promise.all([
            oldFormRef.value.getForm(),
            newFormRef.value.getForm()
        ]);
        return Object.assign(oldForm, newForm);
    } catch (error) {
        throw new Error();
    }
};
defineExpose({getForm})
</script>

<template>
    <UpdatePwdOld ref="oldFormRef"/>
    <el-divider direction="vertical"/>
    <UpdatePwdNew ref="newFormRef"/>
</template>

<style scoped>
.el-divider {
    height: auto;
    border-left: 1px black solid;
}
</style>