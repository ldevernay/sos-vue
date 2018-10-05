<template>
	<project-list :projects_list="{projects}"></project-list>
</template>

<script>
	import ProjectList from '@/components/ProjectList'
	import projects from '@/projects.json'

	export default {
		components: {
			ProjectList
		},
		data(){
			return {
				projects: projects
			}
		},
	}
</script>