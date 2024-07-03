<script setup>
import { ref } from "vue";

const tab = ref(0);

const tabs = ref([
  {
    tabTitle: "Conteúdo",
    icon: "mdi-table-of-contents",
    questions: [
      {
        title: "Como acessar o conteúdo?",
        text: "Você recebe todos os detalhes do acesso por e-mail.",
      },
      {
        title: "Quais os dias das aulas?",
        text: "As aulas são assíncronas. O material pode ser baixado para não consumir dados móveis e pode ser visto no celular, computador, tablet ou espelhado na TV. ",
      },
      {
        title: "Por quanto tempo terei acesso ao treinamento?",
        text: "Durante um ano, o aluno tem acesso a todos os novos módulos que forem inseridos. ",
      },
      {
        title: "Tem certificado?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
      {
        title: "O Treinamento possui alguma comunidade?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
      {
        title: "Posso ler e assistir no celular? É possível baixar o conteúdo?",
        text: "Você pode economizar seus dados móveis e baixar o conteúdo antes de sair de casa, bem como o material em PDF.",
      },
    ],
  },
  {
    tabTitle: "Suporte",
    icon: "mdi-face-agent",
    questions: [
      {
        title: "Onde tiro minhas dúvidas?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
      {
        title:
          "Não estou achando o e-mail com os dados de acesso o que eu faço?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
      {
        title: "Quanto tempo tenho de garantia?",
        text: "O risco é nosso. Garantia irrestrita de 7 dias.",
      },
      {
        title: "Emite alguma nota fiscal?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
      {
        title: "Comprei duas vezes, o que faço?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
      {
        title: "Posso compartilhar o meu acesso?",
        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321",
      },
    ],
  },
  {
    tabTitle: "Pagamento",
    icon: "mdi-credit-card",
    questions: [
      {
        title: "Quais são as formas de pagamento?",
        text: "Você pode fazer a sua inscrição parcelada pelo cartão de crédito ou à vista, utilizando pix ou boleto bancário.",
      },
      {
        title:
          "Posso comprar através do pagamento recorrente, sem comprometer o limite do meu cartão?",
        text: "Infelizmente, não.",
      },
      {
        title:
          "Posso comprar através do pagamento recorrente, sem comprometer o limite do meu cartão?",
        text: "Infelizmente, não.",
      },
      {
        title: "Qual é o investimento para entrar no Projeto Cão Pastor?",
        text: "O valor do treinamento é de 12x sem juros de R$ 274,75. Pagamento à vista possui R$ 300 de desconto, saindo por R$ 2.997,00.",
      },
      {
        title:
          "Comprei o curso por boleto, quanto tempo demora para liberar a compra?",
        text: "Para pagamentos via boleto bancário o acesso é dado em até 3 dias úteis.",
      },
      {
        title: "Posso comprar com dois cartões?",
        text: "Infelizmente, ainda não.",
      },
      {
        title: "Moro em outro País, posso comprar o curso parcelado?",
        text: "O parcelamento está disponível apenas para compras feitas no Brasil. ",
      },
    ],
  },
]);
</script>

<template>
  <v-row justify="center" class="py-16 ma-0 faq-content">
    <v-col cols="12" md="4" class="pt-0">
      <v-container class="py-0">
        <h2 class="urbanist-2 text-red-darken-1">Perguntas frequentes</h2>
        <h2 class="urbanist-1 text-red-darken-1 d-none d-md-block">F.A.Q</h2>
      </v-container>
    </v-col>
    <v-col cols="12" md="5">
      <v-container class="py-0">
        <v-card>
          <v-tabs
            v-model="tab"
            grow
            slider-color="yellow-darken-2"
            color="yellow-darken-2"
          >
            <v-tab
              v-for="(tab, index) in tabs"
              :key="index"
              :value="tab[index]"
              :prepend-icon="tab.icon"
            >
              {{ tab.tabTitle }}
            </v-tab>
          </v-tabs>

          <v-card-text class="pa-0">
            <v-window v-model="tab">
              <v-window-item
                v-for="(tab, index) in tabs"
                :key="index"
                :value="tab[index]"
              >
                <v-expansion-panels variant="accordion">
                  <v-expansion-panel
                    v-for="(item, itemIndex) in tab.questions"
                    :key="itemIndex"
                    :title="item.title"
                  >
                    <template v-slot:text>
                      <span class="text-grey-lighten-2">
                        {{ item.text }}
                      </span>
                    </template>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");

.urbanist-1 {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-size: 3rem;
  font-style: normal;
  letter-spacing: 0.5rem;
  opacity: 0.9;
}

.urbanist-2 {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 3rem;
  font-style: normal;
}
</style>
