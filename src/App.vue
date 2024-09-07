<script lang="ts" setup>
import AppHeader from './layouts/AppHeader.vue';
import AppFooter from './layouts/AppFooter.vue';
import BottomNavigation from './layouts/BottomNavigation.vue';

//
</script>

<template>
  <v-app id="app">

    <AppHeader />

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />

    <!-- <BottomNavigation /> -->

  </v-app>
</template>

<style>
.v-main {
  padding-top: 60px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.sale-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f57f17;
  border-radius: 2px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  box-shadow: 0 0 5px 1px #f57f17;
  margin-top: 20px;
}

.sale-btn:hover {
  box-shadow: 0 0 10px 2px #f57f17;
}

.sale-btn-bottom {
    height: 40px;
    margin: auto;
}

@media (min-width: 800px) {
    .sale-btn-bottom {
        width: 50%
    }
}
</style>