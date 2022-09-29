<template>
    <div class="w-full px-5 text-gray-900 h-14 flex items-center justify-between transition-all ease-linear cursor-pointer"
        @click="showDrow = !showDrow">
        <span v-text="title"></span>
        <img src="/Icons/arrow-down.svg"
            :class="`object-contain ${showDrow ? '' : 'rotate-180'} transition-all delay-300 ease-in-out`" alt="" />
    </div>
    <div class="w-full">
        <Link
            :class="`w-full block border-none bg-gray-700 hover:bg-transparent hover:text-gray-900 text-gray-100 px-7 ${!showDrow ? 'h-14 text-base py-2 ' : ' py-0 h-0 [font-size:0pt] '} transition-all delay-300 ease-in-out`"
            v-for="item in subLinks" :key="item.id" :href="url(item.title_en)" v-text="item.title_en">
        </Link>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },

    },
    created() {
        this.getSubLink()
    },
    data() {
        return {
            showDrow: false,
            subLinks: {
                type: Array,
                default: [
                    {
                        url: 'root',
                        title_en: 'root'
                    },
                    {
                        url: 'root',
                        title_en: 'root'
                    }, {
                        url: 'root',
                        title_en: 'root'
                    },
                ]
            },
        }
    },
    methods: {
        url(text) {
            let t = String(text)
            return '/#' + t.split(' ').join('-')
        }
    }

}
</script>

<style>
</style>