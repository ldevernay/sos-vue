	<template>
		<section>
			<h1>Simplon Open-Source</h1>
			<h2>{{this.project.name}}</h2>
			<div>Tags : {{this.project.tags}}</div>
			<div>Online demo : {{this.project.demo}}</div>
			<div>URL : {{this.github_data.html_url}}</div>
			<div>Description : {{this.github_data.description}}</div>
			<div>Stars : {{this.github_data.stargazers_count}}</div>
			<div>Watch : {{this.github_data.watchers_count}}</div>
			<div>Languages : {{this.github_data.languages}}</div>
			<div>Forks : {{this.github_data.forks_count}}</div>
			<div>Issues : {{this.github_data.open_issues_count}}</div>
			<div>License : {{this.github_data.license}}</div>
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
				// Fetching contributors data from github API for current project
				// fetch(`https://api.github.com/repos/${this.project.link}/contributors`, {
				// method: 'GET'
				// })
				// .then(response => response.json())
				// .then(json => (this.contributors_data = json));
			}
		}
	</script>