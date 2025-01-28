<script setup lang="ts">
const cards = [
  {
    icon: "mdi-shield-check-outline",
    title: "Segurança pública e privada",
    text: "Defesa pessoal, segurança urbana e gestão de crises",
  },
  {
    icon: "mdi-brain",
    title: "Mentalidade e resiliência",
    text: "Mentalidade impertubável e estratégias contra stresse",
  },
  {
    icon: "mdi-account-star-outline",
    title: "Liderança e gestão",
    text: "Liderança eficaz, gestão de equipes e habilidades de negociação",
  },
  {
    icon: "mdi-shield-account-outline",
    title: "Sobrevivência urbana",
    text: "Sobrevivência, preparação para emergências e autodefesa",
  },
  {
    icon: "mdi-target",
    title: "Treinamento em Tiro",
    text: "Técnicas avançadas de precisão de tiro, manuseio de armas e simulações",
  },
  {
    icon: "mdi-axe-battle",
    title: "Desafios",
    text: "Ferramentas valiosas para enfrentar desafios cotidianos e profissionais",
  },
];
</script>

<template>
  <v-container fluid>
    <v-row justify="center" class="mt-md-0 mt-1">
      <v-col md="10" lg="6" cols="12">
        <div class="text-yellow-darken-3 text-h4 text-md-h3">
          Prof. Ronald Cadar
        </div>

        <v-divider class="my-4 text-yellow-darken-3" />

        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> Major da Polícia Militar do Rio de
          Janeiro
        </div>
        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> Caveira do BOPE-RJ
        </div>
        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> Sniper
        </div>
        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> Instrutor de tiro
        </div>
        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> Trajetória notável em segurança
          pública, liderança e treinamento
        </div>
        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> Carreira militar de 19 anos
        </div>
        <div class="text-md-h5 text-h6">
          <v-icon icon="mdi-circle-small" /> + de 170 mil de seguidores nas
          redes
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col md="10" lg="6" cols="12">
        <div class="d-flex ga-4 flex-wrap justify-space-evenly">
          <v-card class="text-center py-4" max-width="300" v-for="card in cards">
            <v-icon
              size="180px"
              :icon="card.icon"
              color="yellow-darken-3"
            ></v-icon>

            <v-card-title> {{ card.title }} </v-card-title>

            <v-card-text style="font-size: 1rem;">
              {{ card.text }}
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.footer,
footer {
  display: none;
}

.v-main {
  padding-bottom: 24px !important;
}
</style>
