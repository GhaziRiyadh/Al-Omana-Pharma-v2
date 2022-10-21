<template>
    <div data-aos="flip-left" data-aos-duration="1000" class="flex w-96 h-14 items-center shadow-lg rounded-md ">
        <div class="w-32 h-full rounded-l-md bg-primary-700 flex items-center justify-center">
            <img :src="depData.icon" class="h-8 w-8" alt="" />
        </div>
        <p class="h-full flex items-center justify-center bg-white font-semibold text-gray-500 rounded-md p-4 uppercase  text-sm w-full"
            v-html="depData.title"></p>
    </div>
</template>

<script>
export default {
    props: {
        depData: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style>

</style>