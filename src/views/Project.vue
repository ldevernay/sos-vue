	<template>
		<section>
			<h1>Simplon Open-Source</h1>
			<h2>{{project.name}}</h2>
			<div>Tags : {{project.tags}}</div>
			<div>Online demo : {{project.demo}}</div>
			<div>URL : {{github_data.html_url}}</div>
			<div>Description : {{github_data.description}}</div>
			<div>Stars : {{github_data.stargazers_count}}</div>
			<div>Watch : {{github_data.watchers_count}}</div>
			<div>Languages : {{github_data.language}}</div>
			<div>Forks : {{github_data.forks_count}}</div>
			<div>Issues : {{github_data.open_issues_count}}</div>
			<div>License : {{github_data.license ? github_data.liscence.name : "none"}}</div>
        <div>Contributeurs : {{contributors_data ? contributors_data.length : "none" }} </div>
        <v-container grid-list-md v-if="contributors_data">
          <v-layout row wrap>
            <div v-for="contributor in contributors_data">
              <v-card>
                <v-card-title>
                  <v-flex xs3>
                    <h3>{{contributor.login}}</h3>
                    <v-img height="200" width="200" :src="contributor.avatar_url"/>
                  </v-flex>
                </v-card-title>
              </v-card>
            </div>
          </v-layout>
        </v-container>
      </div>
			<router-link to="/" class="link">Retour à la liste</router-link>
		</section>
	</template>

	<script>
import projects from "@/projects.json";

export default {
  components: {},
  data() {
    return {
      project: {},
      projects: projects,
      github_data: {},
      contributors_data: {}
    };
  },
  created() {
    // Filtering projects from projects.json to get clicked project
    this.project = this.projects.filter(
      val => val.id === this.$route.params.project_id
    )[0];
    // Fetching data from github API for current project
    fetch(`https://api.github.com/repos/${this.project.link}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => (this.github_data = json));
    // Fetching contributors data from github API for current project
    fetch(`https://api.github.com/repos/${this.project.link}/contributors`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => (this.contributors_data = json));
  }
};
</script>
