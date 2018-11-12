<template>
<section>
      <v-text-field
        hide-details
        single-line
        v-show="searchStatus"
        label="Javascript, Php"
        autofocus
        v-model="search_input"
        @keyup="filter_by_name"
      ></v-text-field>
      <v-btn icon @click="toggleSearchBar">
        <v-icon :class="searchStatus ? 'primary--text' : 'dark--text lighten-1'">fas fa-search</v-icon>
      </v-btn>
      <section :key="tag" v-for="tag in selected_tags">
              <v-chip @click="remove_filter_tag(tag)"><v-icon>fas fa-times</v-icon>  {{ tag }}</v-chip>
            </section>
	<v-container grid-list-md>
		<v-layout row wrap >
			<v-flex :key="project.id" v-for="project in projects">
        <v-card color="grey lighten-3">
          <v-card-title>
            <v-layout row>
              <v-flex xs1>
                <v-icon x-large>{{project.icon}}</v-icon>
              </v-flex>
              <v-flex xs11 class="text-xs-right">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
              </v-flex>
              <v-btn flat @click="linkToProject(project.id)">Show more</v-btn>
            </v-layout>
          </v-card-title>
          <v-divider darken></v-divider>
          <v-card-actions>
            <section :key="tag" v-for="tag in project.tags">
              <v-chip @click="add_filter_tag(tag)">{{ tag }}</v-chip>
            </section>
            <v-spacer>
              </v-spacer>
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
        <hr/>
			</v-flex>
		</v-layout>
	</v-container>
</section>
</template>

<script>
import router from "../router";

export default {
  props: {
    projects_list: Object
  },
  data() {
    return {
      init_projects: this.projects_list.projects,
      projects: this.projects_list.projects,
      github_data: null,
      searchStatus: false,
      search_input: null,
      selected_tags: []
    };
  },
  methods: {
    toggleSearchBar() {
      return !this.searchStatus
        ? (this.searchStatus = true)
        : (this.searchStatus = false);
    },
    linkToProject(id) {
      router.push({ name: "project", params: { project_id: id } });
    },
    filter_by_name(){
      this.projects = this.init_projects.filter(project => project.name.toUpperCase().indexOf(this.search_input.toUpperCase()) != -1);
      this.selected_tags = [];
    },
    add_filter_tag(tag){
      if (this.selected_tags.indexOf(tag) == -1){
      this.selected_tags.push(tag);
      this.filter_by_tags();
      }
    },
    remove_filter_tag(tag){
      this.selected_tags.splice(this.selected_tags.indexOf(tag), 1);
      this.filter_by_tags();
    },
    filter_by_tags(){
      this.projects = this.init_projects.filter(project => {
        return this.selected_tags.every(
          selected_tag => project.tags.indexOf(selected_tag) != -1
        ) 
      });
      this.search_input = "";
      this.searchStatus = false;
    }
  }
};
</script>

<style scoped>
p {
  width: 80%;
  float: right;
}
</style>
