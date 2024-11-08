<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <v-col cols="12" md="8" lg="4">
    <div class="d-flex justify-center" style="position: relative">
      <div
        style="
          position: absolute;
          width: 100%;
          top: 12px;
          border: 1px solid;
          border-image: linear-gradient(to right, #212121, #f9a825, #212121) 1
            stretch;
        "
      ></div>
      <div class="bg-background" style="z-index: 1; padding: 0 8px">
        {{ title }}
      </div>
    </div>
  </v-col>
</template>
