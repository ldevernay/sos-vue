<template>
	<v-container grid-list-md text-xs-center>
		<v-layout row wrap >
			<v-flex xs4 v-for="project in projects">
				<v-card :key="project.title" color="blue-grey darken-2" class="white--text">
					<v-card-title primary-title>
						<h3 class="headless">
							<v-icon class="white--text">fas {{ project.icon }}</v-icon>
							{{ project.name }}
						</h3>
					</v-card-title>
					<v-card-actions>
						<section v-for="chip in project.tags">
							<v-chip>{{ chip }}</v-chip>
						</section>
						<v-spacer></v-spacer>
						<v-btn-toggle>
							<v-btn :href="project.demo">
								<v-icon>fas fa-globe</v-icon>
							</v-btn>
							<v-btn :href="`https://github.com/${project.link}`">
								<v-icon>fab fa-github</v-icon>
							</v-btn>
						</v-btn-toggle>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		props: {
			projects_list: Object
		},
		data(){
			return {
				projects: this.projects_list.projects
			}
		}
	}
</script>