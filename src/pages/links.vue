<script setup lang="ts">
const socialLinks = [
  {
    name: "Youtube",
    icon: "mdi-youtube",
    url: "https://youtube.com/c/ProjetoMatilhaCãoPastor",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #FF0000, #FF4B00, #FF0000)", // Gradiente do YouTube
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Tiktok",
    icon: null,
    url: "https://tiktok.com/@cadarcav",
    type: "tiktok",
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
    name: "Grupo Mentalidade",
    icon: "mdi-whatsapp",
    url: "https://chat.whatsapp.com/K9PBlNrNdOnJFGvufJSJkt",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #25D366, #128C7E, #075E54)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Curso Cão Pastor",
    url: "/",
    icon: "mdi-skull",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #C0C0C0, #B0B0B0, #808080)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Curso Mentalidade",
    url: "/mentalidade",
    icon: "mdi-brain",
    style: {
      background: "linear-gradient(45deg, #F8C8D8, #F1D0C7, #F5B7B1)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Apoia se",
    url: "https://apoia.se/matilha09",
    icon: "mdi-heart-outline",
    style: {
      background: "linear-gradient(45deg, #ED5544, #D84E3E, #C14434)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "SOBRE O INSTRUTOR",
    url: "sobre-nos",
    icon: "mdi-human-male-board",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #F9A825, #FFB300, #FF8F00)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
];
</script>

<template>
  <v-container fluid>
    <v-row justify="center" class="flex-md-column align-md-center">
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center flex-column align-center ga-2"
      >
        <div>
          <v-img src="@/assets/LogoCoPastorCompacta.png" width="120" cover />
        </div>
        <div style="font-size: 1.4rem; font-weight: 400">@caveiracadar09</div>
        <div class="mt-2 text-md-left text-center">
          Este projeto é um convite para a evolução. Se você deseja estar à
          frente, tanto no pensamento quanto na ação, chegou o momento de dar o
          próximo passo rumo ao seu melhor.
        </div>
      </v-col>

      <!-- Botões sociais gerados dinamicamente -->
      <v-col
        v-for="(social, index) in socialLinks"
        :key="index"
        cols="12"
        md="8"
        lg="4"
      >
        <v-btn
          block
          class="social-btn"
          target="_blank"
          :href="social.url"
          height="50"
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

          {{ social.name }}
        </v-btn>
      </v-col>

      <v-col cols="12" md="8" lg="4" class="text-left">
        <div
          class="text-subtitle-1 text-yellow-darken-3 text-md-left text-center"
        >
          "Se quer ir longe, fortaleça o corpo. Se quer ir a qualquer lugar,
          forje a mente."
        </div>
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
  padding-bottom: 24px !important;
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
