<template>
  <v-app>
    <v-app-bar color="error" dark fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-2">Impossible Hotel</v-toolbar-title>
      <v-icon>mdi-home</v-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="red--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/cReg">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
          <hr class="mt-2 mb-2" />
          <v-list-item-subtitle>Admin only</v-list-item-subtitle>
          <v-list-item to="#">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view style="margin-top: 50px" />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false
  })
};
</script>
