<script setup lang="ts">
import LinksBtnGroup from "../components/linksPage/linksBtnGroup.vue";

const linksStepOne = [
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
  {
    name: "Torne-se um soldado <br> Apoie nosso projeto",
    url: "https://apoia.se/matilha09",
    icon: "mdi-heart-outline",
    style: {
      background: "linear-gradient(45deg, #ED5544, #D84E3E, #C14434)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
];

const linksStepTwo = [
  {
    name: "Canal Mente Impertubável",
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
];

const linksStepThree = [
  {
    name: "Curso Mentalidade MCP",
    url: "https://pay.hotmart.com/M95660570J",
    type: "curso",
    icon: "mdi-brain",
    style: {
      background: "linear-gradient(45deg, #9E5C67, #A6857D, #9E5C4E)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Curso Master de <br> Proteção e Segurança",
    // url: "https://pay.hotmart.com/I77956669P",
    url: "/curso/cao-pastor",
    icon: "mdi-shield-lock-outline",
    type: "curso",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #C0C0C0, #B0B0B0, #808080)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Módulos Curso Cão Pastor",
    url: "/home",
    icon: "mdi-view-module",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #BEBEBE, #8C8C8C, #6E6E6E)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
  {
    name: "Grupo de Promoções e Avisos",
    icon: "mdi-whatsapp",
    url: "https://chat.whatsapp.com/K9PBlNrNdOnJFGvufJSJkt",
    imageSrc: null,
    style: {
      background: "linear-gradient(45deg, #25D366, #128C7E, #075E54)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },
];
</script>

<template>
  <v-container fluid>
    <h1
      style="
        position: absolute;
        color: transparent;
        cursor: default;
        z-index: -5;
      "
    >
      Projeto cão pastor
    </h1>
    <h2
      style="
        position: absolute;
        color: transparent;
        cursor: default;
        z-index: -5;
      "
    >
      Mentalidade
    </h2>
    <h2
      style="
        position: absolute;
        color: transparent;
        cursor: default;
        z-index: -5;
      "
    >
      Cursos
    </h2>
    <v-row justify="center" class="flex-md-column align-md-center">
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center flex-column align-center ga-2"
      >
        <div>
          <v-img src="@/assets/LogoCoPastorCompacta.png" width="120" cover />
        </div>
        <div style="font-size: 1.4rem; font-weight: 400" class="text-red-darken-1">@caveiracadar09</div>
        <div class="mt-2 text-md-left text-center">
          Este projeto é um convite para a evolução. Se você deseja estar à
          frente, tanto no pensamento quanto na ação, chegou o momento de dar o
          próximo passo rumo ao seu melhor.
        </div>
      </v-col>

      <links-btn-group title="Projeto Cão Pastor" :linksBtn="linksStepOne" />

      <links-btn-group title="Siga nossas redes" :linksBtn="linksStepTwo" />

      <links-btn-group title="Cursos" :linksBtn="linksStepThree" />

      <v-col cols="12" md="8" lg="4" class="text-left">
        <div
          class="text-subtitle-1 text-yellow-darken-3 text-md-left text-center"
        >
          "Se quer ir longe, fortaleça o corpo. Se quer ir a qualquer lugar,
          forje a mente." - Cadar, R.
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

/* .social-btn {
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
} */
</style>
