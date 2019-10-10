<template>
  <v-toolbar color="#EC0747">
    <v-btn flat @click="linkToHome()" color="#FFFFFF">Simplon Open Source</v-btn>
    <v-spacer></v-spacer>
      <v-text-field
        hide-details
        single-line
        v-show="searchStatus"
        label="Javascript, Php"
        autofocus
        v-model="search_input"
        v-on:keyup="filter_by_name"
      ></v-text-field>
      <v-btn icon @click="toggleSearchBar">
        <v-icon :class="searchStatus ? 'white--text' : 'dark--text lighten-1'">fas fa-search</v-icon>
      </v-btn>
  </v-toolbar>
</template>

<script>
    import router from "../router";

export default {
  name: "Nav",
  data() {
		return {
			searchStatus: false,
			search_input: null,
		};
  },
  methods: {
    linkToHome() {
          router.push({ name: "projects" });
    },
    toggleSearchBar() {
      return !this.searchStatus
        ? (this.searchStatus = true)
        : (this.searchStatus = false);
    },
    filter_by_name(){
			return this.$emit('search', this.search_input);
    },
	}
};
</script>