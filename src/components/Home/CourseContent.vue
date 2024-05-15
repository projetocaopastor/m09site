<script setup>
import { ref } from "vue"

const contents = ref(
    [
        {
            title: "MÓDULO 1",
            text: "Mentalidade",
            icon: "mdi-brain",
            description: "Cultivar uma mentalidade de crescimento, trazendo literaturas que contribuem para esse destravamento e aprendizado."
        },
        {
            title: "MÓDULO 2",
            text: "Estudo do Crime",
            icon: "mdi-account-search-outline",
            description: "Neste módulo, ensinamos a compreender o crime. Com base em nossa experiência, você aprenderá sobre a mente do criminoso e os fatores que envolvem esse fenômeno. A abordagem é direta, oferecendo uma visão prática de quem pisou no terreno, filtrando a teoria e derrubando mitos sem rodeios."
        },
        {
            title: "MÓDULO 3",
            text: "Proteção Residencial",
            icon: "mdi-shield-home-outline",
            description: "Um plano completo de como melhorar a segurança de sua residência, incluindo a gestão da segurança do seu comércio ou casa. O curso cobre a identificação de vulnerabilidades, sistemas de proteção e a elaboração de um plano de ação. O custo do curso é inferior ao que uma empresa cobraria por um plano de segurança."
        },
        {
            title: "MÓDULO 4",
            text: "Proteção da Informação",
            icon: "mdi-shield-lock-outline",
            description: "\"Informação é poder\". Aprender a protegê-la representa uma vantagem. O curso aborda como se proteger das vulnerabilidades dos sistemas de comunicação tão integrados e expostos, com exemplos práticos e ferramentas úteis."
        },
        {
            title: "MÓDULO 5",
            text: "Conduta Defensiva",
            icon: "mdi-security",
            description: "Melhore sua postura defensiva, aprendendo a se movimentar e se posicionar de maneira a não se tornar uma presa em situações de risco."
        },
        {
            title: "MÓDULO 6",
            text: "Mentalidade de Combate",
            icon: "mdi-fencing",
            description: "Baseado em estudos, apresentamos conhecimentos para agir adequadamente em momentos de crise."
        },
        {
            title: "MÓDULO 7",
            text: "APH",
            icon: "mdi-medical-bag",
            description: "Um guia de primeiros socorros que ensina a realizar atendimentos iniciais em situações de emergência, incluindo técnicas para estancar sangramentos, que representam 80% das mortes. Trouxemos um paramédico do BOPE com vasta experiência em crises reais para ensinar essas técnicas."
        },
        {
            title: "MÓDULO 8",
            text: "Defesa Pessoal",
            icon: "mdi-shield-account-outline",
            description: "Um guia básico de técnicas para que você, mesmo sem vivência em artes marciais, possa se defender e se desvencilhar de ameaças."
        },
        {
            title: "MÓDULO 9",
            text: "Armamento e Tiro",
            icon: "mdi-pistol",
            description: "Um estudo sobre fundamentos, mitos, armamentos e um cronograma completo para a prática de tiro, com dicas de baixo custo para treinamento."
        },
        {
            title: "MÓDULO 10",
            text: "Conduta Armada",
            icon: "mdi-account-arrow-right-outline",
            description: "Aprenda a se portar adequadamente quando armado, abordando vestimentas, situações e comportamentos condizentes."
        },
        {
            title: "MÓDULO EXTRA",
            text: "Identificação de Ameaça: Aplicação da Neurociência", // (Agente Wesley)
            icon: "mdi-robber",
            description: "Aprenda com este excelente instrutor como se antecipar às crises e desenvolver o raciocínio necessário, além de dezenas de estudos de caso comentados pelo instrutor."
        },
        {
            title: "MÓDULO EXTRA",
            text: "Estudo e Aplicação da Legítima Defesa", // (Delegado Willian Oliveira)
            icon: "mdi-shield-account-variant-outline",
            description: "Aprenda legítima defesa com a percepção de quem atua aplicando o tema na prática. Uma aula que vai desde a teoria até a aplicação, com estudos de caso e ponderações de quem não só estudou o direito, mas o aplica. Uma aula para o aluno dominar o único remédio jurídico que protege uma reação, para que nosso aluno tenha confiança ao utilizá-la, sabendo os riscos e requisitos necessários."
        },
    ]
)

</script>

<template>
    <v-container class="d-flex flex-column align-center justify-center bg-grey-darken-4 pa-md-12 px-4 py-8" fluid>
        <span class="text-h4 text-md-start text-center mb-8">
            Explore o que você vai <span class="text-yellow-darken-3">aprender</span> aqui
        </span>
        <v-row class="d-md-none d-flex">
            <v-col v-for="content, index in contents" :key="index" cols="6">
                <v-card class="mx-auto text-center pa-1 content-card" height="180" variant="tonal">

                    <div class="d-flex flex-wrap justify-center align-stretch" style="height: 100%;">
                        <div class="d-flex flex-column align-center">
                            <span :class="content.title == 'MÓDULO EXTRA' ? 'text-yellow-darken-3' : ''">
                                {{ content.title }}
                            </span>

                            <v-icon :icon="content.icon" size="60"></v-icon>

                            <span class="text-caption d-flex align-center" style="height: 40px;">
                                {{ content.text }}
                            </span>
                        </div>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps" class="" color="yellow-darken-3" text="Ler mais"></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card>
                                    <v-card-title class="text-yellow-darken-3">
                                        {{ content.title }}
                                    </v-card-title>

                                    <v-card-text>
                                        {{ content.description }}
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Fechar" @click="isActive.value = false" variant="outlined" color="yellow-darken-3"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>

                    </div>

                </v-card>
            </v-col>
        </v-row>

        <v-row class="d-md-flex d-none">
            <v-col v-for="content, index in contents" :key="index">
                <v-card class="mx-auto text-center py-8 px-12 content-card" width="330" variant="tonal">

                    <div class="d-flex flex-column align-center ga-2">
                        <span>
                            {{ content.title }}
                        </span>

                        <v-icon :icon="content.icon" size="100"></v-icon>

                        <span>
                            {{ content.text }}
                        </span>

                        <v-dialog max-width="500">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn v-bind="activatorProps" class="mt-4" color="yellow-darken-3"
                                    text="Ler mais"></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                                <v-card :title="content.title">
                                    <v-card-text>
                                        {{ content.description }}
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text="Fechar" @click="isActive.value = false" variant="outlined"></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>

                    </div>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.content-card {
    border: 1px solid #ff000080;
}
</style>