	<template>
		<section>
      <v-toolbar color="#EC0747">
        <v-toolbar-title class="white--text">Simplon Open Source</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat @click="linkToHome()" color="#FFFFFF">Home</v-btn>
      </v-toolbar>
      <v-layout>


    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{project.name}}</h3>
          </div>
        </v-card-title>
         <v-divider darken></v-divider>
									<v-card-text>
										<dfn>{{github_data.description}}</dfn>
										<div>Stars <span class="counter">{{github_data.stargazers_count}}</span></div>
										<div>Watch <span class="counter">{{github_data.watchers_count}}</span></div>
										<div>Forks <span class="counter">{{github_data.forks_count}}</span></div>
										<div>Issues <span class="counter">{{github_data.open_issues_count}}</span></div>
										<div>License : {{github_data.license ? github_data.license.name : "none"}}</div>
										<div><v-chip>{{github_data.language}}</v-chip></div>
									</v-card-text>
         <v-divider darken></v-divider>
								<v-card-actions>
            <section :key="tag" v-for="tag in project.tags">
              <v-chip>{{ tag }}</v-chip>
            </section>
            <v-spacer>
              </v-spacer>
            <v-btn-toggle>
              <v-btn :href="project.demo">
                <v-icon>fas fa-globe</v-icon>
              </v-btn>
              <v-btn :href="`https://gihtub.com/${project.link}`">
                <v-icon>fab fa-github</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>


		
        <h2>Contributeurs {{contributors_data ? "" : " : none" }} </h2>
        <v-container grid-list-md v-if="contributors_data">
          <v-layout row wrap>
            <div v-for="(contributor, index) in contributors_data" :key=index>
              <v-card :href="`https://github.com/${contributor.login}`">
                <v-card-title>
                  <v-flex xs3>
                    <h3>{{contributor.login}}</h3>
                    <v-img height="200" width="200" :src="contributor.avatar_url" class="contributor_img" />
                  </v-flex>
                </v-card-title>
              </v-card>
            </div>
          </v-layout>
        </v-container>
			<router-link to="/" class="link">Retour à la liste</router-link>
		</section>
	</template>

	<script>
import router from "../router";
import projects from "@/projects.json";
import Nav from "./Nav";

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
  methods: {
    linkToHome() {
      router.push({ name: "projects" });
    }
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

<style scoped>
.contributor_img {
  border-radius: 50%;
}
.counter {

    background-color: rgba(27,31,35,.08);
    border-radius: 20px;
    color: #586069;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    padding: 2px 5px;

}
</style>