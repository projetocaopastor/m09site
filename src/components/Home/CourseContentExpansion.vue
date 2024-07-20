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
    text: "Negação",
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
        name: "Prof. Maj. Cadar",
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
        name: "Prof. Cap. Prujansky",
        img: "https://i.imgur.com/bP3ymZT.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução a Conduta Defensiva" },
      { "Aula 02": "Conceitos" },
      { "Aula 03": "Consciência Situacional" },
      { "Aula 04": "Sistema de Cores e Ciclo OODA" },
      { "Aula 05": "Capacidade de Adaptação" },
      { "Aula 06": "Teoria da Carga Cognitiva - Live do casamento" },
      { "Aula 07": "Conclusão e Estudos de Caso" },
      { "Aula 08": "Estudo de Casos: Portarias" },
      { Material: "Consciência Situacional (Conduta Defensiva) - Resumo.pdf" },
      { Material: "Código de Cores - Resumo.pdf" },
      { Material: "Capacidade de Adaptação - Conduta Defensiva - Resumo.pdf" },
      { Material: "Teoria da Carga Cognitiva - Conduta Defensiva.pdf" },
    ],
  },
  {
    title: "MÓDULO 6",
    text: "Escolhi reagir",
    icon: "mdi-fencing",
    description:
      "Baseado em estudos, apresentamos conhecimentos para agir adequadamente em momentos de crise.",
    professors: [
      {
        name: "Prof. Cap. Alvarez",
        img: "https://i.imgur.com/yetanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução à Mentalidade de Combate" },
      { "Aula 02": "Mentalidade de combate" },
      { "Aula 03": "O ato de Matar!" },
      { "Aula 04": "A verdadeira Mentalidade de Combate" },
      { Material: "Escolhi Reagir - Mentalidade do Combate.pdf" },
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
        name: "Prof. Oliveira",
        img: "https://i.imgur.com/yetanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução" },
      { "Aula 02": "Mal Súbito - Parte 1" },
      { "Aula 03": "Mal Súbito - Parte 2" },
      { "Aula 04": "Sangramento - Parte 1" },
      { "Aula 05": "Sangramento - Parte 2" },
      { "Aula 06": "Acidente automobilístico" },
      { "Aula 07": "Acidentes domésticos" },
      { "Aula 08": "Montagem de Kit" },
      { Material: "APH - Aula 1.pdf" },
      { Material: "APH - Aula 2.pdf" },
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
      { "Aula 01": "Introdução" },
      { "Aula 02": "" },
      { "Aula 03": "" },
      { "Aula 04": "" },
      { "Aula 05": "" },
      { "Aula 06": "" },
      { "Aula 07": "" },
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
      { "Aula 01": "Introdução e Fundamentos de Tiro" },
      { "Aula 02": "Empunhadura" },
      { "Aula 03": "Visada" },
      { "Aula 04": "Respiração" },
      { "Aula 05": "Dedo no Gatilho" },
      { "Aula 06": "Anamnese" },
      { "Aula 07": "Considerações Finais" },
      { "Aula 08": "Introdução Balística" },
      { "Aula 09": "Balística" },
      { "Aula 10": "Calibres, Modelos e Mitos" },
      { "Aula 11": "Balística e Mitos" },
      { "Aula 12": "Boas-Vindas ao Módulo - Prática de Tiro" },
      { "Aula 13": "Explicação passo a passo do módulo" },
      { "Aula 14": "Tiro Estático - 7 Metros - Precisão e Fundamento" },
      { "Aula 15": "Tiro Estático - 10 Metros - Precisão e Fundamento" },
      { "Aula 16": "Tiro Estático - 15 Metros" },
      { "Aula 17": "Tiro Estático - 25 Metros - Fundamentos aplicados" },
      { "Aula 18": "Drill Estático - Posição 3" },
      { "Aula 19": "Drill Tiro Institivo" },
      { "Aula 19.1": "Resenha do Tiro Institivo" },
      { "Aula 20": "Tiro com recarga" },
      { "Aula 21": "Drill alvo de cores" },
      { "Aula 22": "Tiro de Entrevista" },
      { "Aula 23": "Drill de tiro em movimento" },
      { "Aula 24": "Tiro e sai do X" },
      { "Aula 25": "Técnicas: Double Tap - Moçambique - Ziper" },
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
      { "Aula 02": "Mudanças necessárias" },
      { "Aula 03": "Mestres da Adaptabilidade" },
      { "Aula 04": "O Simples resolve! TREINE!" },
      { "Aula 05": "Coldres para porte velado" },
      { "Aula 06": "Vestimenta básica e calçados" },
      { "Aula 07": "O Coldre e suas vantagens" },
      { "Aula 08": "Bermuda e Calça de Moletom" },
      { "Aula 09": "Tipos de Porte e de Saques" },
      { "Aula 10": "Tipos de Camisas, cores e execução dos movimentos" },
      { "Aula 11": "Introdução - Confronto Armado em Veículo Automotor" },
      { "Aula 12": "Primeiros Passos" },
      { "Aula 13": "Reação Armada - Lado do Motorista" },
      { "Aula 14": "Reação à Frente - Sem Contato" },
      { "Aula 15": "Confronto à Frente - Desembarque com Contato" },
      { "Aula 16": "Combate pelo Carona" },
    ],
  },
  {
    title: "MÓDULO 11",
    text: "Anatomia do Combate",
    icon: "mdi-skull",
    description: "SEM DESCRIÇÃO A FAZER!",
    professors: [
      {
        name: "Prof. Maj. Cadar",
        img: "https://i.imgur.com/andanotherimage.jpeg",
      },
    ],
    contents: [
      { "Módulo 1 | 1": "Apresentação - Anatomia do Combate" },
      { "M1 | 2": "Por que existe o Combate?" },
      { "Módulo 2 | 1": "Regras do Jogo" },
      { "M2 | 2": "Responsabilidades" },
      { "M2 | 3": "Sistema Persecutório" },
      { "M2 | 4": "Legislação, Regras do Jogo" },
      { "Módulo 3 | 1": "Rituais do Conflito (Introdução)" },
      { "M3 | 2": "Rituais de um Conflito (PT1)" },
      { "M3 | 3": "Rituais de Um Conflito (PT2)" },
      { "M3 | 4": "Rituais de Um Conflito (Final)" },
      { "Módulo 4 | 1": "Processo que Gera Efeitos" },
      { "M4 | 2": "Batimentos Cardíacos" },
      { "M4 | 3": "Efeitos Fisiologia - Introdução" },
      { "M4 | 4": "Efeitos Fisiologia – Continuação" },
      { "Módulo 5 | 1": "Condicionamento e Controle Físico" },
      { "M5 | 2": "Condicionamento e Controle Fisiológico" },
      { "M5 | 3": "Ferramentas" },
      { "M5 | 4": "Ensaios Mentais" },
      { "Módulo 6 | 1": "Morte em Combate" },
      { "M6 | 2": "Mortes em Combate" },
      { "M6 | 3": "Onde Ficam Veias e Artérias" },
    ],
  },
  {
    title: "MÓDULO EXTRA",
    text: "Legítima Defesa: Teoria e Prática",
    icon: "mdi-shield-account-variant-outline",
    description: "Aprenda legítima defesa com a percepção de quem atua aplicando o tema na prática. Uma aula que vai desde a teoria até a aplicação, com estudos de caso e ponderações de quem não só estudou o direito, mas o aplica. Uma aula para o aluno dominar o único remédio jurídico que protege uma reação, para que nosso aluno tenha confiança ao utilizá-la, sabendo os riscos e requisitos necessários.",
    professors: [
      {
        name: "Prof. Delegado William Oliveira",
        img: "https://i.imgur.com/andanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 01": "Introdução" },
      { "Aula 02": "Art 25 - Descrição e Explicação" },
      { "Aula 03": "Art 25 - Dissecando o Conceito" },
      { "Aula 04": "Direito Próprio ou Alheio" },
      { "Aula 05": "Meios Necessários" },
      { "Aula 06": "Ônus da Prova - É de Quem Alega" },
      {
        "Aula 07": "Legítima Defesa na Prática | Exemplificações e Explicações",
      },
      { "Aula 08": "Tirando Dúvidas #1" },
      { "Aula 09": "Tirando Dúvidas #2" },
      { "Aula 10": "Tirando Dúvidas #3" },
    ],
  },
  {
    title: "MÓDULO EXTRA",
    text: "Neurociência: Identificação de Ameaças",
    icon: "mdi-robber",
    description: "Aprenda com este excelente instrutor como se antecipar às crises e desenvolver o raciocínio necessário, além de dezenas de estudos de caso comentados pelo instrutor.",
    professors: [
      {
        name: "Prof. Pol. Penal Santos",
        img: "https://i.imgur.com/andanotherimage.jpeg",
      },
    ],
    contents: [
      { "Aula 1": "Consciência Situacional - Primeira Aula" },
      { "Aula 2": "Consciência Situacional - Segunda Aula" },
      { "Aula 3": "Consciência Situacional - Terceira Aula" },
      { "Aula 4": "Indicadores Comportamentais Parte 1" },
      { "Aula 5": "Indicadores Comportamentais Parte 2" },
      { "Aula 6": "Indicadores Comportamentais Parte 3" },
      { "Aula 7": "Indicadores Comportamentais Parte 4" },
      { "Aula 8": "Identificação de Ameaças" },
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
        <div style="width: 100%" class="d-flex justify-center mt-4 mb-2">
          <span class="text-h4">
            Explore o que você vai
            <span class="text-yellow-darken-3">aprender</span> aqui
          </span>
        </div>
      </v-col>

      <v-col cols="12" md="7">
        <v-expansion-panels class="mb-6 mt-2">
          <v-expansion-panel v-for="module in contents" :key="module.title">
            <template #title>
              <span
                class="text-uppercase"
                style="font-size: 1.2rem; font-weight: 400"
              >
                <v-icon :icon="module.icon" class="mr-1" :color="module.title.includes('EXTRA') ? 'yellow-darken-4' : 'yellow-darken-3'"></v-icon>
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
                        <!-- <v-img alt="Avatar" :src="professor.img"></v-img> -->
                        <v-icon icon="mdi-human-male-board" :color="`red-lighten-${(index * 2) + 1}`" />
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
