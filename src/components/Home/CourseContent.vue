<script setup>
import { ref } from "vue"

const contents = ref(
    [
        {
            title: "MÓDULO 1",
            text: "Mentalidade",
            icon: "mdi-brain",
            description: "Cultivar um mindset de crescimento, trazendo literaturas que contribuem para esse destravamento e aprendizado."
        },
        {
            title: "MÓDULO 2",
            text: "Estudo do Crime",
            icon: "mdi-account-search-outline",
            description: "Neste módulo, ensinamos a compreender o crime. Com base em nossa experiência, você aprenderá sobre a mente do criminoso e os fatores que envolvem esse fenômeno. A abordagem é direta, oferecendo uma visão prática de quem pisou no terreno, filtrando a teoria e derrubando mitos \"sem massagem\"."
        },
        {
            title: "MÓDULO 3",
            text: "Proteção Residencial",
            icon: "mdi-shield-home-outline",
            description: " Um mindset completo, de como melhorar a segurança de seu residencia, um plano completo de como gerir a segurança do seu comércio ou residência (aqui, o curso já se paga, porque o custo que uma empresa cobra para fazer uma plano que reforça a segurança de sua casa ou comércio, que identificar vulnerabilidades, raciocinar sobre sistemas de proteção e suas camadas, além de compreender a funcionalidade de um plano de ação... Já paga o curso todo."
        },
        {
            title: "MÓDULO 4",
            text: "Proteção da Informação",
            icon: "mdi-shield-lock-outline",
            description: "\"Informação é poder\". Aprender a protegê-la representa uma vantagem. O curso aborda como se proteger das vulnerabilidades de sistemas de comunicação tão integrados e expostos, com exemplos práticos e ferramentas úteis."
        },
        {
            title: "MÓDULO 5",
            text: "Conduta Defensiva",
            icon: "mdi-security",
            description: "Melhore sua postura defensiva, aprendendo a se movimentar e posicionar de maneira a não se tornar a presa em uma situação de risco."
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
            description: "Um guia de primeiros socorros que ensina a realizar atendimentos iniciais em situações de emergência, incluindo técnicas para estancar sangramentos(stop the blend) que representa 80% das mortes. Uma materia que deveria ser de conhecimento de todos mas que não é difundida nas escolas, aqui fizemos questão, trouxemos um paramédico do bope, com vasta experiência em crises reais com dezenas de salvamentos."
        },
        {
            title: "MÓDULO 8",
            text: "Defesa Pessoal",
            icon: "mdi-shield-account-outline",
            description: "Um guia básico de técnicas para você mesmo sem vivência em artes marciais, possa aplicar e se desvencilhar de ameaças."
        },
        {
            title: "MÓDULO 9",
            text: "Armamento e Tiro",
            icon: "mdi-pistol",
            description: "Um estudo sobre fundamentos, mitos, armamentos e um cronograma completo para prática de tiro, para você aplicar quando for aprimorar seu tiro em um estande, além de dicas de baixo custo para treinamento."
        },
        {
            title: "MÓDULO 10",
            text: "Conduta Armada",
            icon: "mdi-account-arrow-right-outline",
            description: "Aprenda a se portar adequadamente quando armado, abordando desde vestimentas, situações e comportamentos condizentes."
        },
        {
            title: "MÓDULO EXTRA",
            text: "Identificação de Ameaça: Aplicação da neurociência (Agente Wesley)",
            icon: "mdi-robber",
            description: "Aprenda com esse excelente instrutor, como se antecipar as crises, como desenvolver o raciocínio para tal, alem de dezenas de estudo de caso comentado pelo instrutor."
        },
        {
            title: "MÓDULO EXTRA",
            text: "Estudo e Aplicação da Legítima Defesa (Delegado Willian Oliveira)",
            icon: "mdi-shield-account-variant-outline",
            description: "Aprenda legitima defesa com a percepção sobrea de quem atua aplincando o tema na pratica, uma aula que vai desde a teoria, até aplicação, com estudo de caso e ponderações de quem não só estudou o direito, mas o aplica. Uma aula para o aluno ter dominio sobre o único remédio juridico que protege uma reação, para que o nosso aluno tenha confiança no momento de utilizá-la, pois sabera os riscos e requisitos para utiliza-la."
        },
    ]
)
</script>

<template>
    <v-container class="d-flex flex-column align-center justify-center bg-grey-darken-4 pa-12" fluid>
        <span class="text-h4 mb-8">
            Explore o que você vai <span class="text-blue-lighten-1">aprender</span> aqui
        </span>
        <v-row>
            <v-col v-for="content, index in contents" :key="index">
                <v-container>
                    <v-card class="mx-auto text-center py-8 px-12 bg-grey-lighten-2 content-card" width="330">

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
                                    <v-btn v-bind="activatorProps"  class="mt-4" color="blue-darken-4" text="Ler mais"
                                        ></v-btn>
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
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.content-card {
    border: 1px solid #0000ff90;
}
</style>