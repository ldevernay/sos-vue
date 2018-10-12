<template>
  <v-toolbar>
    <v-toolbar-title>Simplon Open Source</v-toolbar-title>
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
        <v-icon :class="searchStatus ? 'primary--text' : 'blue-grey--text lighten-1'">fas fa-search</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  /**
   * @TODO: Create or install search engine ('elasticsearch'??)
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
    }
  }
};
</script>

<style scoped>
</style>
