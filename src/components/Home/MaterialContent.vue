<script setup>
const items = [
    {
        icon: "checkbox-marked-circle-outline",
        text: "Como proteger a sua residência e sua família por meio de técnicas comprovadas na prática"
    },
    {
        icon: "checkbox-marked-circle-outline",
        text: "Como fortalecer sua mente e se preparar para as adversidades"
    },
    {
        icon: "checkbox-marked-circle-outline",
        text: "Práticas preventivas de segurança para o seu dia a dia"
    },
    {
        icon: "checkbox-marked-circle-outline",
        text: "Noções básicas de defesa pessoal para o seu cotidiano"
    },
    {
        icon: "checkbox-marked-circle-outline",
        text: "Identificar padrões de possíveis ameaças que possam ocorrer"
    },
]

</script>

<template>
    <section style="margin-bottom: 64px; margin-top: 24px">
        <v-row justify="center">
            <v-col cols="12" class="d-flex justify-center">
                <span class="text-h4 text-red-lighten-1 mt-4">
                    Aqui você aprende:
                </span>
            </v-col>
            <v-col cols="12" md="4" class="px-8" v-for="(item, index) in items" :key="index">
                <v-card class="mx-auto d-flex px-2 py-6 content-card rounded-lg" max-width="450" :prepend-icon="'text-success text-h4 mdi-' + item.icon">
                    <v-card-text class="d-flex align-center font-weight-bold pa-0 text-h6">
                        {{ item.text }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<style scoped>

</style>