<template>
    <v-app-bar
    prominent
      color="primary"
    >
      <v-app-bar-nav-icon v-if="isLoggedIn" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-bold">GIT</span>
        <span class="font-weight-light">ANA</span>
        <span class="body-2 font-weight-light"> Analíticas de Github</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        class="mx-4"
        label="Modo Oscuro"
      ></v-switch>
      <github-login v-if="isLoggedIn" />
    </v-app-bar>

    <v-navigation-drawer
      v-if="isLoggedIn"
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :value="item"
          active-color="primary"
          rounded="xl"
          router :to="item.route"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
//import firebaseApp from "../FirebaseApp.js";
import GithubLogin from "@/components/GithubLogin.vue";

export default {
  components: {
    GithubLogin,
  },
  data() {
    return {
      dialog: false,
      drawer: null,
      isLoggedIn: false,
      links: [
        //{ icon: 'home', text: 'Inicio', route: '/' },
        { icon: "mdi-timeline", text: "Pull Request", route: "/pullrequest" },
        { icon: "mdi-clipboard-text", text: "Repositorio", route: "/repositorio" },
        { icon: "mdi-download", text: "RepoDescarga", route: "/repodescarga" },
        { icon: "mdi-help", text: "Acerca de", route: "/acerca" },
      ],
    };
  },
  created() {
    this.isLoggedIn = true;
    //var user = firebaseApp.auth().currentUser;
    //if (user) this.isLoggedIn = true;
    //else this.isLoggedIn = false;
  },
};
</script>
