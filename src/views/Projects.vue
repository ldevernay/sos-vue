<template>
	<section>
		<h1>Simplon Open-Source</h1>
		<project-list :projects_list="{projects}"></project-list>
	</section>
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