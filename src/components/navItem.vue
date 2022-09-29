<template>
	<a :href="url"
		class="lg:w-auto flex items-center justify-center px-5 mx-2 w-full md:h-16 h-14 text-center capitalize duration-75 transition-all ease-linear cursor-pointer hover:text-gray-900 text-gray-500 font-semibold"
		v-html="title">
	</a>
</template>

<script lang="ts">
export default {
	name: 'navItem',
	props: {
		title: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		},
	},
}
</script>

<style>

</style>
