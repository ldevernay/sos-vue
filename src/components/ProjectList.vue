<template>
	<v-container grid-list-md>
		<v-layout row wrap >
			<v-flex :key="project.id" xs6 v-for="project in projects">
        <v-card color="grey lighten-3">
          <v-card-title>
            <v-layout row>
              <v-flex xs3>
                <v-img height="200" width="200" src="https://via.placeholder.com/350x350"/>
              </v-flex>
              <v-flex xs9 class="text-xs-right">
                <h3>{{ project.name }}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur facilis fuga iusto laudantium, modi, nihil omnis perspiciatis placeat quasi quia rerum soluta. Alias dolore eaque molestiae quo tempora voluptas.</p>
                <v-btn flat @click="linkToProject(project.id)">Show more</v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider darken></v-divider>
          <v-card-actions>
            <section :key="tag" v-for="tag in project.tags">
              <v-chip>{{ tag }}</v-chip>
            </section>
            <v-spacer></v-spacer>
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
	</v-container>
</template>

<script>
import router from "../router";

export default {
  props: {
    projects_list: Object
  },
  data() {
    return {
      projects: this.projects_list.projects,
      github_data: null
    };
  },
  methods: {
    linkToProject(id) {
      router.push({ name: "project", params: { project_id: id } });
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
