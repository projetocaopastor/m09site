<script lang="ts" setup>
defineProps<{
  title: string;
  linksBtn: {
    url?: string;
    name?: string;
    type?: string;
    style?: any;
    icon?: string | null;
    imageSrc?: any;
  }[];
}>();
</script>

<template>
  <links-group-title :title="title" />

  <v-col
    v-for="(social, index) in linksBtn"
    :key="index"
    cols="12"
    md="8"
    lg="4"
  >
    <link-btn :social="social" />
  </v-col>
</template>
