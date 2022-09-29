<template>
    <div class="w-full my-10">
        <div class=" flex items-baseline mb-6 justify-center">
            <span class="w-10 h-1 bg-primary-700 rounded-sm"></span>
            <p class="text-primary-700 lg:text-4xl text-2xl mx-2 font-semibold" v-text="title"></p>
            <span class="w-10 h-1 bg-primary-700  rounded-sm"></span>
        </div>
        <div class="w-full">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'PageSection',
    props: {
        title: {
            type: String,
            default: 'AboutUs'
        }
    }
}
</script>

<style>

</style>
