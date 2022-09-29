<template>
    <div data-aos="fade-up" data-aos-duration="3000" class="w-64 h-72 shadow-lg rounded-lg">
        <div class="h-32 w-full rounded-t-lg flex items-center justify-center">
            <img class="h-full object-contain w-10 rounded-full" :src="hrData.icon" alt="">
        </div>
        <div class="h-8 capitalize text-lg text-logo font-semibold flex items-center w-full px-4" v-html="hrData.title">
        </div>
        <div class="h-32 overflow-auto w-full text-sm text-gray-400 flex items-center px-4" v-html="hrData.desc"></div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        hrData: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style>

</style>