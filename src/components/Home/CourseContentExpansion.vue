<script setup>
import { ref } from "vue";

const contents = ref([
  {
    title: "MÓDULO 1",
    text: "Mentalidade",
    icon: "mdi-brain",
    description:
      "Cultivar uma mentalidade de crescimento, trazendo literaturas que contribuem para esse destravamento e aprendizado.",
  },
  {
    title: "MÓDULO 2",
    text: "Estudo do Crime",
    icon: "mdi-account-search-outline",
    description:
      "Neste módulo, ensinamos a compreender o crime. Com base em nossa experiência, você aprenderá sobre a mente do criminoso e os fatores que envolvem esse fenômeno. A abordagem é direta, oferecendo uma visão prática de quem pisou no terreno, filtrando a teoria e derrubando mitos sem rodeios.",
  },
  {
    title: "MÓDULO 3",
    text: "Proteção Residencial",
    icon: "mdi-shield-home-outline",
    description:
      "Um plano completo de como melhorar a segurança de sua residência, incluindo a gestão da segurança do seu comércio ou casa. O curso cobre a identificação de vulnerabilidades, sistemas de proteção e a elaboração de um plano de ação. O custo do curso é inferior ao que uma empresa cobraria por um plano de segurança.",
  },
  {
    title: "MÓDULO 4",
    text: "Proteção da Informação",
    icon: "mdi-shield-lock-outline",
    description:
      '"Informação é poder". Aprender a protegê-la representa uma vantagem. O curso aborda como se proteger das vulnerabilidades dos sistemas de comunicação tão integrados e expostos, com exemplos práticos e ferramentas úteis.',
  },
  {
    title: "MÓDULO 5",
    text: "Conduta Defensiva",
    icon: "mdi-security",
    description:
      "Melhore sua postura defensiva, aprendendo a se movimentar e se posicionar de maneira a não se tornar uma presa em situações de risco.",
  },
  {
    title: "MÓDULO 6",
    text: "Mentalidade de Combate",
    icon: "mdi-fencing",
    description:
      "Baseado em estudos, apresentamos conhecimentos para agir adequadamente em momentos de crise.",
  },
  {
    title: "MÓDULO 7",
    text: "APH",
    icon: "mdi-medical-bag",
    description:
      "Um guia de primeiros socorros que ensina a realizar atendimentos iniciais em situações de emergência, incluindo técnicas para estancar sangramentos, que representam 80% das mortes. Trouxemos um paramédico do BOPE com vasta experiência em crises reais para ensinar essas técnicas.",
  },
  {
    title: "MÓDULO 8",
    text: "Defesa Pessoal",
    icon: "mdi-shield-account-outline",
    description:
      "Um guia básico de técnicas para que você, mesmo sem vivência em artes marciais, possa se defender e se desvencilhar de ameaças.",
  },
  {
    title: "MÓDULO 9",
    text: "Armamento e Tiro",
    icon: "mdi-pistol",
    description:
      "Um estudo sobre fundamentos, mitos, armamentos e um cronograma completo para a prática de tiro, com dicas de baixo custo para treinamento.",
  },
  {
    title: "MÓDULO 10",
    text: "Conduta Armada",
    icon: "mdi-account-arrow-right-outline",
    description:
      "Aprenda a se portar adequadamente quando armado, abordando vestimentas, situações e comportamentos condizentes.",
  },
  {
    title: "MÓDULO EXTRA",
    text: "Identificação de Ameaça: Aplicação da Neurociência", // (Agente Wesley)
    icon: "mdi-robber",
    description:
      "Aprenda com este excelente instrutor como se antecipar às crises e desenvolver o raciocínio necessário, além de dezenas de estudos de caso comentados pelo instrutor.",
  },
  {
    title: "MÓDULO EXTRA",
    text: "Estudo e Aplicação da Legítima Defesa", // (Delegado Willian Oliveira)
    icon: "mdi-shield-account-variant-outline",
    description:
      "Aprenda legítima defesa com a percepção de quem atua aplicando o tema na prática. Uma aula que vai desde a teoria até a aplicação, com estudos de caso e ponderações de quem não só estudou o direito, mas o aplica. Uma aula para o aluno dominar o único remédio jurídico que protege uma reação, para que nosso aluno tenha confiança ao utilizá-la, sabendo os riscos e requisitos necessários.",
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

      <v-col cols="12" md="6">
        <v-expansion-panels>
          <v-expansion-panel>
            <template #title>
              <span
                class="text-uppercase"
                style="font-size: 1.3rem; font-weight: 400"
              >
                Módulo 1 - MENTALIDADE
              </span>
            </template>
            <template #text>
              <v-row justify="center">
                <v-col cols="12">
                  <div class="d-flex align-center ga-2">
                    <v-avatar size="45px">
                      <v-img
                        alt="Avatar"
                        src="https://i.imgur.com/tuJ1d3z.jpeg"
                      ></v-img>
                    </v-avatar>
                    <span>Prof. Cap. Alvarez</span>
                  </div>
                </v-col>

                <v-col cols="12">
                  <span class="font-weight-medium text-yellow-darken-3"
                    >Descrição:
                  </span>
                  Cultivar uma mentalidade de crescimento, trazendo literaturas
                  que contribuem para esse destravamento e aprendizado.
                </v-col>

                <v-col cols="12">
                  <div class="d-flex flex-column">
                    <span class="font-weight-medium text-yellow-darken-3">
                      Conteúdo:
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 01 -
                      </span>
                      Mentalidade: O Início
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 02 -
                      </span>
                      Mentalidade: Evolução
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 03 -
                      </span>
                      Mentalidade: Conclusão
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 04 -
                      </span>
                      Aprofundamento da Mente Humana: A Garra
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 05 -
                      </span>
                      Mindset: Mentalidade Fixa x Mentalidade de Crescimento
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 06 -
                      </span>
                      Prática
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Aula 07 -
                      </span>
                      Filosofia Kaizen
                    </span>
                    <span>
                      <span class="text-yellow-darken-3 font-weight-lig">
                        Material - 
                      </span>
                      Módulo Mentalidade - Resumo.pdf
                    </span>
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
