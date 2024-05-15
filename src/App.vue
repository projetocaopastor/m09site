<script lang="ts" setup>
import AppHeader from './layouts/AppHeader.vue';
import AppFooter from './layouts/AppFooter.vue';
import BottomNavigation from './layouts/BottomNavigation.vue';

//
</script>

<template>
  <v-app>

    <AppHeader />

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />

    <BottomNavigation />

  </v-app>
</template>

<style scoped></style>