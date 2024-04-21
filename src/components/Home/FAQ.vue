<script setup>
import { ref } from 'vue';

const tab = ref(0);

const tabs = ref(
    [
        {
            tabTitle: "Conteúdo",
            icon: "mdi-table-of-contents",
            questions:
                [
                    {
                        title: "Como acessar o conteúdo?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Quais os dias das aulas?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Por quanto tempo terei acesso ao treinamento?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Tem certificado?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "O Treinamento possui alguma comunidade?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                ]
        },
        {
            tabTitle: "Suporte",
            icon: "mdi-face-agent",
            questions:
                [
                    {
                        title: "Onde tiro minhas dúvidas?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Não estou achando o e-mail com os dados de acesso o que eu faço?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Quanto tempo tenho de garantia?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Emite alguma nota fiscal?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Comprei duas vezes, o que faço?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                    {
                        title: "Posso compartilhar o meu acesso?",
                        text: "Qualquer coisa só pra ter o texto!!#@!#@!3232131321"
                    },
                ]
        },
        {
            tabTitle: "Pagamento",
            icon: "mdi-credit-card",
            questions:
                [
                    {
                        title: "Quais são as formas de pagamento?",
                        text: "Pagando com cartão de crédito você recebe acesso imediato à área de membros. Por PIX, o convite será enviado para o seu e-mail alguns minutos após a confirmação do pagamento. Boleto pode levar até 72 horas para ser identificado pelo nosso sistema. (caso seja residente fiscal no Brasil)"
                    },
                    {
                        title: "Qual é o investimento para entrar no Projeto Cão Pastor?",
                        text: "O valor do treinamento é de 12x sem juros de R$ 274,75. Pagamento à vista possui R$ 300 de desconto, saindo por R$ 2.997,00."
                    },
                    {
                        title: "Comprei o curso por boleto, quanto tempo demora para liberar a compra?",
                        text: "Os boletos demoram em média 3 dias úteis para serem compensados. Após a compensação, nosso sistema enviará automaticamente os dados de acesso do curso para o seu e-mail."
                    },
                    {
                        title: "Posso comprar com dois cartões?",
                        text: "Sim, no carrinho de compras essa opção estará habilitada."
                    },
                    {
                        title: "Eu moro fora do país, como efetuo a compra?",
                        text: "O checkout da plataforma de vendas já altera automaticamente a moeda."
                    },
                ]
        },
    ]
);

</script>

<template>
    <v-row justify="center" class="py-16 ma-0 faq-content">
        <v-col cols="12" md="4" class="pt-0">
            <v-container class="py-0">
                <h2 class="urbanist-1 text-red-darken-1">
                    F.A.Q
                </h2>
            </v-container>
        </v-col>
        <v-col cols="12" md="5">
            <v-container class="py-0">
                <v-card>
                    <v-tabs v-model="tab" grow slider-color="red-lighten-1" color="red-lighten-1">
                        <v-tab v-for="tab, index in tabs" :key="index" :value="tab[index]" :prepend-icon="tab.icon">
                            {{ tab.tabTitle }}
                        </v-tab>
                    </v-tabs>

                    <v-card-text class="pa-0">
                        <v-window v-model="tab">
                            <v-window-item v-for="tab, index in tabs" :key="index" :value="tab[index]">
                                <v-expansion-panels variant="accordion">
                                    <v-expansion-panel v-for="item, itemIndex in tab.questions" :key="itemIndex"
                                        :title="item.title">
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
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.urbanist-1 {
    font-family: "Urbanist", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size: 8rem;
    font-style: normal;
    letter-spacing: 0.9rem;
}
</style>