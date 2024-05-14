<script lang="ts" setup>
import AppHeader from './layouts/AppHeader.vue';
import AppFooter from './layouts/AppFooter.vue';

  //
</script>

<template>
  <v-app>

    <AppHeader />

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />

  </v-app>
</template>

<style scoped>

</style>