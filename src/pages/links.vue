<script setup lang="ts">
const socialLinks = [
  {
    name: "Youtube",
    icon: "mdi-youtube",
    url: "https://youtube.com/c/ProjetoMatilhaCãoPastor",
    imageSrc: null,
    style: { color: "#c4302b" },
  },
  {
    name: "Tiktok",
    icon: null,
    url: "https://tiktok.com/@cadarcav",
    imageSrc: "/src/assets/icons/tiktok.svg",
  },
  {
    name: "Instagram",
    icon: "mdi-instagram",
    url: "https://instagram.com/caveiracadar09",
    imageSrc: null,
    style: {
      background:
        "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "SOBRE O INSTRUTOR",
    url: "sobre-nos",
    icon: "mdi-human-male-board",
    imageSrc: null,
  },
  {
    name: "Curso Mentalidade",
    url: "/mentalidade",
    icon: "mdi-brain",
  },
  {
    name: "Curso Cão Pastor",
    url: "/",
    icon: "mdi-skull",
    imageSrc: null,
  },
];
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="6" class="d-flex justify-center flex-column align-center">
        <div>
          <v-img src="@/assets/LogoCoPastorCompacta.png" width="120" cover />
        </div>
        <div class="text-h6 mt-2">
            @caveiracadar09
        </div>
      </v-col>

      <!-- Botões sociais gerados dinamicamente -->
      <v-col
        v-for="(social, index) in socialLinks"
        :key="index"
        cols="12"
        md="4"
      >
        <v-btn
          block
          class="social-btn"
          target="_blank"
          :href="social.url"
          height="50"
        >
          <v-img
            v-if="social.imageSrc"
            :src="social.imageSrc"
            class="social-btn-icon-img"
            width="24px"
            height="24px"
            :style="social.style"
          />

          <v-icon
            v-if="social.icon"
            :icon="social.icon"
            class="social-btn-icon"
            size="x-large"
            :style="social.style"
          />

          {{ social.name }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.footer,
.header,
header,
footer {
  display: none;
}

.v-main {
  padding-top: 24px !important;
}

.social-btn {
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-btn-icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
}

.social-btn-icon-img {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
