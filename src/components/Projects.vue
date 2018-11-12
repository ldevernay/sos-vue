<template>
	<section>
    <Nav></Nav>
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
      projects: projects
    };
  }
};
</script>
