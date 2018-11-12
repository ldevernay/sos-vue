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
      projects: projects.sort((a,b)=>{
        let name_a = a.name.toUpperCase();
        let name_b = b.name.toUpperCase();
        return (name_a < name_b) ? -1 : (name_a > name_b) ? 1 : 0;
      })
    };
  }
};
</script>
