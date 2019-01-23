<template>
    <v-toolbar color="#EC0747">
        <v-btn flat @click="linkToHome()" color="#FFFFFF">Simplon Open Source</v-btn>
        <v-spacer></v-spacer>
        <a href=https://github.com/ldevernay/sos-vue>
            <v-icon>fab fa-github</v-icon>
        </a>
    </v-toolbar>
</template>

<script>
    import router from "../router";

    export default {
        name: "Nav",
        methods: {
            linkToHome() {
                router.push({name: "projects"});
            }
        }
    };
</script>