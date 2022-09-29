<template>
	<Link :href="url"
		:class="` p-1 hover:shadow-lg hover:shadow-green-300 text-green-50 text-sm lg:text-base font-light bg-green-600 hover:text-green-100 text-center hover:bg-green-900 ` + classes">
	{{ title }}
	</Link>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
	name: 'LinkBtn',
	components: {
		Link
	},
	props: {
		url: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		},
		classes: {
			type: String,
			default: ""
		},
	}
}
</script>

<style>
</style>