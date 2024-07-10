<script setup>
import { ref } from "vue";

const contents = ref([
  {
    title: "MÓDULO 1",
    text: "Mentalidade",
    icon: "mdi-brain",
    description:
      "Cultivar uma mentalidade de crescimento, trazendo literaturas que contribuem para esse destravamento e aprendizado.",
    professors: [
      {
        name: "Prof. Cap. Alvarez",
        img: "https://i.imgur.com/bP3ymZT.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Mentalidade: O Início" },
      { "Aula 02": "Mentalidade: Evolução" },
      { "Aula 03": "Mentalidade: Conclusão" },
      { "Aula 04": "Aprofundamento da Mente Humana: A Garra" },
      { "Aula 05": "Mindset: Mentalidade Fixa x Mentalidade de Crescimento" },
      { "Aula 06": "Prática" },
      { "Aula 07": "Filosofia Kaizen" },
      { Material: "Módulo Mentalidade - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 2",
    text: "Estudo do Crime",
    icon: "mdi-account-search-outline",
    description:
      "Neste módulo, ensinamos a compreender o crime. Com base em nossa experiência, você aprenderá sobre a mente do criminoso e os fatores que envolvem esse fenômeno. A abordagem é direta, oferecendo uma visão prática de quem pisou no terreno, filtrando a teoria e derrubando mitos sem rodeios.",
    professors: [
      {
        name: "Prof. Maj. Cadar",
        img: "https://i.imgur.com/anotherimage.jpeg",
      },
      {
        name: "Prof. Cap. Prujansky",
        img: "https://i.imgur.com/anotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Negação: O Conceito" },
      { "Aula 02": "Fatores Criminológicos" },
      { "Aula 03": "Origens da Criminologia" },
      { "Aula 04": "Resenha: Criminologia" },
      { "Aula 05": "Construção de Escolhas" },
      { "Aula 06": "Estudo do Crime" },
      { "Aula 07": "Resenha: Estudo do Crime" },
      { "Aula 08": "Conheça o Teu Inimigo" },
      { "Aula 09": "Resenha: Conheça o Teu Inimigo" },
      { "Aula 10": "Dados e Estatísticas" },
      { Material: "Módulo Negação - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 3",
    text: "Proteção Residencial",
    icon: "mdi-shield-home-outline",
    description:
      "Um plano completo de como melhorar a segurança de sua residência, incluindo a gestão da segurança do seu comércio ou casa. O curso cobre a identificação de vulnerabilidades, sistemas de proteção e a elaboração de um plano de ação. O custo do curso é inferior ao que uma empresa cobraria por um plano de segurança.",
    professors: [
      {
        name: "Prof. Maj. Cadar",
        img: "https://i.imgur.com/anotherimage.jpeg",
      },
      {
        name: "Prof. Cap. Prujansky",
        img: "https://i.imgur.com/yetanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução a Proteção" },
      { "Aula 02": "Resenha da Introdução de Proteção" },
      { "Aula 03": "Teoria da Proteção" },
      { "Aula 04": "Resenha da Teoria da Proteção" },
      { "Aula 05": "Proteção Residencial" },
      { "Aula 06": "Resenha da Proteção Residencial" },
      { "Aula 07": "Reforçando as Vulnerabilidades" },
      { "Aula 08": "Resenha: Reforçando as Vulnerabilidades" },
      { "Aula 09": "Reforçando as Vulnerabilidades - Especial para Trancas" },
      { "Aula 10": "Sistema de Alerta" },
      { "Aula 11": "Plano de Ação - Introdução" },
      { "Aula 12": "Plano de Ação" },
      { "Aula 13": "Check-list" },
      { Material: "Proteção Residencial.pdf" },
    ],
  },
  {
    title: "MÓDULO 4",
    text: "Proteção da Informação",
    icon: "mdi-shield-lock-outline",
    description:
      '"Informação é poder". Aprender a protegê-la representa uma vantagem. O curso aborda como se proteger das vulnerabilidades dos sistemas de comunicação tão integrados e expostos, com exemplos práticos e ferramentas úteis.',
    professors: [
      {
        name: "Prof. Oliveira",
        img: "https://i.imgur.com/andanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Ações Preventivas" },
      { "Aula 02": "Formas de Pensar" },
      { "Aula 03": "Engenharia Social" },
      { "Aula 04": "Resenha: Engenharia Social" },
      { "Aula 05": "Golpe do Primo" },
      { "Aula 06": "Clonagem do WhatsApp" },
      { "Aula 07": "'Roubo' do WhatsApp" },
      { "Aula 08": "Golpe do Cartão de Crédito" },
      { "Aula 09": "Sequestro Relâmpago" },
      { "Aula 10": "Phishing ou Pescaria" },
      { Material: "Proteção da Informação - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 5",
    text: "Conduta Defensiva",
    icon: "mdi-security",
    description:
      "Melhore sua postura defensiva, aprendendo a se movimentar e se posicionar de maneira a não se tornar uma presa em situações de risco.",
    professors: [
      {
        name: "Prof. Cap. Alvarez",
        img: "https://i.imgur.com/bP3ymZT.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Postura Defensiva" },
      { "Aula 02": "Comportamento em Situação de Risco" },
      { "Aula 03": "Movimentação Segura" },
      { "Aula 04": "Identificação de Ameaças" },
      { Material: "Conduta Defensiva - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 6",
    text: "Mentalidade de Combate",
    icon: "mdi-fencing",
    description:
      "Baseado em estudos, apresentamos conhecimentos para agir adequadamente em momentos de crise.",
    professors: [
      {
        name: "Prof. Cap. Prujansky",
        img: "https://i.imgur.com/yetanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução à Mentalidade de Combate" },
      { "Aula 02": "Estudo de Caso: Reação em Crises" },
      { "Aula 03": "Princípios da Mentalidade de Combate" },
      { Material: "Mentalidade de Combate - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 7",
    text: "APH",
    icon: "mdi-medical-bag",
    description:
      "Um guia de primeiros socorros que ensina a realizar atendimentos iniciais em situações de emergência, incluindo técnicas para estancar sangramentos, que representam 80% das mortes. Trouxemos um paramédico do BOPE com vasta experiência em crises reais para ensinar essas técnicas.",
    professors: [
      {
        name: "Prof. Pol. Penal Santos",
        img: "https://i.imgur.com/yetanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Primeiros Socorros: Introdução" },
      { "Aula 02": "Controle de Sangramentos" },
      { "Aula 03": "Atendimento em Situações de Emergência" },
      { Material: "APH - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 8",
    text: "Defesa Pessoal",
    icon: "mdi-shield-account-outline",
    description:
      "Um guia básico de técnicas para que você, mesmo sem vivência em artes marciais, possa se defender e se desvencilhar de ameaças.",
    professors: [
      {
        name: "Prof. Maj. Cadar",
        img: "https://i.imgur.com/anotherimage.jpeg",
      },
      {
        name: "Prof. Cap. Prujansky",
        img: "https://i.imgur.com/bP3ymZT.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Técnicas Básicas de Defesa Pessoal" },
      { "Aula 02": "Situações Comuns de Ameaça" },
      { "Aula 03": "Desenvolvendo Confiança para Reagir" },
      { Material: "Defesa Pessoal - Resumo.pdf" },
    ],
  },
  {
    title: "MÓDULO 9",
    text: "Instrução de Armamento e Tiro",
    icon: "mdi-pistol",
    description:
      "Um estudo sobre fundamentos, mitos, armamentos e um cronograma completo para a prática de tiro, com dicas de baixo custo para treinamento.",
    professors: [
      {
        name: "Prof. Maj. Cadar",
        img: "https://i.imgur.com/bP3ymZT.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Fundamentos do Armamento" },
      { "Aula 02": "Prática de Tiro: Introdução" },
      { "Aula 03": "Treinamento de Baixo Custo" },
      { "Aula 04": "Visada" },
      { "Aula 05": "Respiração" },
      { "Aula 06": "Dedo no Gatilho" },
      { "Aula 07": "Anamnese" },
      { "Aula 08": "Considerações Finais" },
      { "Aula 09": "Introdução Balística" },
      { "Aula 10": "Balística" },
      { "Aula 11": "Calibres, Modelos e Mitos" },
      { "Aula 12": "Balística e Mitos" },
      { "Aula 13": "Boas-Vindas ao Módulo - Prática de Tiro" },
      { "Aula 14": "Explicação passo a passo do módulo" },
      { "Aula 15": "Tiro Estático - 7 Metros - Precisão e Fundamento" },
      { "Aula 16": "Tiro Estático - 10 Metros - Precisão e Fundamento" },
      { "Aula 17": "Tiro Estático - 15 Metros" },
      { "Aula 18": "Tiro Estático - 25 Metros - Fundamentos aplicados" },
      { "Aula 19": "Drill Estático - Posição 3" },
      { "Aula 19.1": "Drill Tiro Institutivo - Resenha" },
      { "Aula 20": "Tiro com Recarga" },
      { "Aula 21": "Drill Alvo de Cores" },
      { "Aula 22": "Tiro de Entrevista" },
      { "Aula 23": "Drill de Tiro em Movimento" },
      { "Aula 24": "Tiro e Sai do X" },
      { "Aula 25": "Técnicas: Double Tap, Moçambique, Ziper" },
      { "Aula 26": "Home Defense - Tiro Amarrado" },
    ],
  },
  {
    title: "MÓDULO 10",
    text: "Conduta Armada",
    icon: "mdi-account-arrow-right-outline",
    description:
      "Aprenda a se portar adequadamente quando armado, abordando vestimentas, situações e comportamentos condizentes.",
    professors: [
      {
        name: "Prof. Cap. Prujansky",
        img: "https://i.imgur.com/andanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução" },
      { "Aula 02": "Mudanças Necessárias" },
      { "Aula 03": "Mestres da Adaptabilidade" },
      { "Aula 04": "O Simples Resolve! TREINE!" },
      { "Aula 05": "Coldres para Porte Velado" },
      { "Aula 06": "Vestimenta Básica e Calçados" },
      { "Aula 07": "O Coldre e Suas Vantagens" },
      { "Aula 08": "Bermuda e Calça de Moletom" },
      { "Aula 09": "Tipos de Porte e de Saques" },
      { "Aula 10": "Tipos de Camisas, Cores e Execução dos Movimentos" },
      { "Aula 11": "Introdução - Confronto Armado em Veículo Automotor" },
      { "Aula 12": "Primeiros Passos" },
      { "Aula 13": "Reação Armada - Lado do Motorista" },
      { "Aula 14": "Reação à Frente - Sem Contato" },
      { "Aula 15": "Confronto à Frente - Desembarque com Contato" },
      { "Aula 16": "Combate pelo Carona" },
    ],
  },
]);
</script>

<template>
  <v-container
    class="d-flex align-center justify-center bg-grey-darken-3"
    fluid
  >
    <v-row justify="center">
      <v-col cols="10">
        <div style="width: 100%" class="d-flex justify-center">
          <span class="text-h4">
            Explore o que você vai
            <span class="text-yellow-darken-3">aprender</span> aqui
          </span>
        </div>
      </v-col>

      <v-col cols="12" md="7">
        <v-expansion-panels>
          <v-expansion-panel v-for="module in contents" :key="module.title">
            <template #title>
              <span
                class="text-uppercase"
                style="font-size: 1.2rem; font-weight: 400"
              >
                <v-icon :icon="module.icon" class="mr-1"></v-icon>
                {{ module.title }} - {{ module.text }}
              </span>
            </template>
            <template #text>
              <v-row justify="center">
                <v-col cols="12">
                  <span class="font-weight-medium text-yellow-darken-3">
                    {{
                      module.professors.length > 1
                        ? "Professores:"
                        : "Professor:"
                    }}
                  </span>
                  <div class="d-flex ga-10 mt-4">
                    <div
                      class="d-flex align-center ga-2"
                      v-for="(professor, index) in module.professors"
                      :index="index"
                    >
                      <v-avatar size="45px">
                        <v-img alt="Avatar" :src="professor.img"></v-img>
                      </v-avatar>
                      <span>{{ professor.name }}</span>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12">
                  <span class="font-weight-medium text-yellow-darken-3"
                    >Descrição:
                  </span>
                  {{ module.description }}
                </v-col>

                <v-col cols="12">
                  <div class="d-flex flex-column">
                    <span class="font-weight-medium text-yellow-darken-3">
                      Conteúdo:
                    </span>
                    <div
                      v-for="aula in module.contents"
                      :key="Object.keys(aula)[0]"
                    >
                      <span class="text-yellow-darken-3 font-weight-lig">
                        {{ Object.keys(aula)[0] }} -
                      </span>
                      {{ Object.values(aula)[0] }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.content-card {
  border: 1px solid #ff000080;
}
</style>
