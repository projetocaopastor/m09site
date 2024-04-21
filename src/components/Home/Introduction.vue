<template>
    <v-row class="introduction-bg pt-5 overflow-hidden">
        <v-col lg="6" cols="12" class="d-flex align-center justify-center">
            <v-row justify="center">
                <v-col md="7" cols="11">
                    <img src="@/assets/images/projeto-cao-pastor.png" height="90">
                    <div class="mt-3" style="font-size: 20pt;">
                        <span class="text-grey-darken-4 font-weight-bold">Conteúdo completo</span> sobre mentalidade e
                        segurança, mesmo que hoje você não saiba nada sobre o assunto.
                    </div>
                    <v-btn block class="mt-9" href="https://apoia.se/matilha09" target="_blank">
                        Apoie o projeto
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
        <v-col lg="6" cols="12" class="d-flex justify-center pa-0">
                <img src="@/assets/images/introduction-cadar-matilha-bg.png" id="instructor-img" height="500">
        </v-col>
    </v-row>
</template>

<style scoped>
.introduction-bg {
    background: linear-gradient(#AFAFAF 30%, #713f3f);
}

img {
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.01);
}

@media (max-width: 1280px) {
    #instructor-img {
        height: 350px;
    }
}
</style>