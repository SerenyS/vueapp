<template>
  <v-app>
    <v-app-bar
      app
      color="#2a435b"
      dark
    >
      <div class="d-flex align-center">
       <h1>Serenys Shop</h1>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
