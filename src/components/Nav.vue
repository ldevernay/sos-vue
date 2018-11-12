<template>
  <v-toolbar color="#EC0747">
    <v-btn flat @click="linkToHome()" color="#FFFFFF">Simplon Open Source</v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import router from "../router";

export default {
  name: "Nav",
  methods: {
    linkToHome() {
          router.push({ name: "projects" });
        }
}
};
</script>