<template>
	<a :href="url"
		class=" block w-full transition-all ease-linear text-sm p-1 text-gray-500 hover:text-gray-100 cursor-pointer"
		v-html="title">
	</a>
</template>

<script>
export default {
	name: 'footerItem',
	props: {
		title: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		},
	}
}
</script>

<style>
</style>