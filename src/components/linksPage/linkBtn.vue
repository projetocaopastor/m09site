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
    target="_blank"
    :href="social.url"
    height="60"
    :style="{
      border: social.type === 'curso' ? '1px solid #F9A82530' : '',
    }"
  >
    <div class="w-100 d-flex align-center">
      <div v-if="social.type === 'tiktok'">
        <v-img
          src="@/assets/icons/tiktok.svg"
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
        size="x-large"
        :style="social.style"
      />
      <div
        style="
          width: 100%;
          text-align: center;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          text-overflow: ellipsis;
          display: block;
          font-size: 0.94rem;
          font-weight: 400;
        "
        v-html="social.name"
      ></div>
    </div>
  </v-btn>
</template>

<style>
.v-btn__content {
  width: 100%;
}
</style>
