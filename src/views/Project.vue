	<template>
		<section>
			<h1>Simplon Open-Source</h1>
			<h2>{{this.project.name}}</h2>
			<div>{{this.project}}</div>
			<div>{{this.github_data}}</div>
			<router-link to="/" class="link">Retour à la liste</router-link>
		</section>
	</template>

	<script>
		import projects from '@/projects.json'

		export default {
			components: {},
			data(){
				return {
					project: {},
					projects: projects,
					github_data: {}
				}
			},
			created() {
				// Filtering projects from projects.json to get clicked project
				this.project = this.projects.filter(val => val.id == this.$route.params.project_id)[0];
				// Fetching data from github API for current project
				fetch(`https://api.github.com/repos/${this.project.link}`, {
			method: 'GET'
		})
			.then(response => response.json())
			.then(json => (this.github_data = json));
			}
		}
	</script>