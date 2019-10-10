<template>
	<section>
    <Nav @search="filter_by_name" :projects_list="{projects}"></Nav>
		<project-list :projects_list="{projects}"></project-list>
	</section>
</template>

<script>
import ProjectList from "@/components/ProjectList";
import projects from "@/projects.json";
import Nav from "./Nav";

export default {
  components: {
    ProjectList,
    Nav
  },
  data() {
    return {
      projects: projects.sort((a,b)=>{
        let name_a = a.name.toUpperCase();
        let name_b = b.name.toUpperCase();
        return (name_a < name_b) ? -1 : (name_a > name_b) ? 1 : 0;
      })
    };
  },
  methods: {
    filter_by_name(value) {
      if (value === "") {
        return this.projects = projects;
      }
      return this.projects = projects.filter(project => project.name.toUpperCase().indexOf(value.toUpperCase()) != -1);
    }
  }
};
</script>
