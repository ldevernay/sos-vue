<template>
  <v-toolbar color="#EC0747">
    <v-btn flat @click="linkToHome()" color="#FFFFFF">Simplon Open Source</v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-text-field
        hide-details
        single-line
        v-show="searchStatus"
        label="Javascript, Php"
        autofocus
      ></v-text-field>
      <v-btn icon @click="toggleSearchBar">
        <v-icon :class="searchStatus ? 'primary--text' : 'white--text lighten-1'">fas fa-search</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
/**
 * @TODO: Create or install search engine ('elasticsearch'??)
 * @TODO: Hide input if user not focus input
 * @TODO: Autofocus input
 */
export default {
  name: "Nav",
  data() {
    return {
      searchStatus: false,
      search: null
    };
  },
  methods: {
    toggleSearchBar() {
      return !this.searchStatus
        ? (this.searchStatus = true)
        : (this.searchStatus = false);
    },
    linkToHome() {
          router.push({ name: "projects" });
        }
  }
};
</script>