<script setup lang="ts">
defineProps<{
  social: {
    url?: string;
    name?: string;
    type?: string;
    style?: any;
    icon?: string;
    imageSrc?: any;
  };
}>();
</script>

<template>
  <v-btn
    block
    class="social-btn"
    target="_blank"
    :href="social.url"
    height="50"
    :style="{
      border: social.type === 'curso' ? '1px solid #F9A82530' : '',
    }"
  >
    <div v-if="social.type === 'tiktok'">
      <v-img
        src="@/assets/icons/tiktok.svg"
        class="social-btn-icon-img"
        width="24px"
        height="24px"
        cover
        :style="social.style"
        tag=""
      />
    </div>

    <v-icon
      v-else-if="social.icon"
      :icon="social.icon"
      class="social-btn-icon"
      size="x-large"
      :style="social.style"
    />
    <div
      style="
        text-align: center;
        max-width: 280px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: normal;
        text-overflow: ellipsis;
        display: block;
      "
      v-html="social.name"
    >
    </div>
  </v-btn>
</template>
