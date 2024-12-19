<script setup lang="ts">
defineProps<{
  social: {
    url?: string;
    name?: string;
    type?: string;
    style?: any;
    icon?: string;
    imageSrc?: any;
    menu?: boolean;
    options?: any[];
  };
}>();
</script>

<template>
  <v-menu v-if="social.menu && social.options?.length">
    <template v-slot:activator="{ props }">
      <v-btn
        block
        target="_blank"
        height="60"
        :style="{
          border: social.type === 'curso' ? '1px solid #F9A82530' : '',
        }"
        v-bind="props"
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
    <v-list>
      <v-list-item
        v-for="(item, index) in social.options"
        :key="index"
        :value="index"
        :href="item.url"
        target="_blank"
      >
        <template #prepend>
          <v-icon :icon="item.icon" :style="item.style" />
        </template>
        <v-list-item-title
          style="
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
            text-overflow: ellipsis;
            display: block;
            font-size: 0.94rem;
            font-weight: 500;
            text-transform: uppercase;
          "
          >{{ item.name }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>

  <v-btn
    block
    target="_blank"
    :href="social.url"
    height="60"
    :style="{
      border: social.type === 'curso' ? '1px solid #F9A82530' : '',
    }"
    v-else
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
