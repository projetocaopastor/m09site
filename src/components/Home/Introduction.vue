<!-- <template>
    <v-row class="introduction-bg pt-5 overflow-hidden">
        <v-col lg="6" cols="12" class="d-flex align-center justify-center">
            <v-row justify="center">
                <v-col md="7" cols="11">
                    <img src="@/assets/images/projeto-cao-pastor.png" height="90">
                    <div class="mt-3" style="font-size: 20pt;">
                        <span class="text-yellow-darken-1 font-weight-bold">Conteúdo completo</span> sobre mentalidade e
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
</style> -->

<template>
    <section class="introduction-section">
        <div class="intro-bg-image-container">
            <img src="@/assets/cadar-aula1.png" class="intro-bg-image">
        </div>
        <div class="introduction-bg overflow-hidden align-center" justify="center">
            <div class="d-flex justify-center pa-0">
                <img src="@/assets/LogoCoPastorCompacta.png" class="instructor-img" height="150">
            </div>
            <hr>
            <div>
                <v-layout class="d-flex justify-center text-center flex-column">
                    <span>
                        APRENDA A PROTEGER VOCÊ E SUA FAMÍLIA,
                    </span>
                    <span class="text-h6">
                        CONTEÚDO COMPLETO SOBRE MENTALIDADE E SEGURANÇA.
                    </span>
                </v-layout>
            </div>
            <div class="intro-description-text">
                <span class="text-body-1">
                    Aprenda com profissionais experientes como proteger sua família, desenvolver uma mentalidade de
                    combate e dominar procedimentos essenciais de segurança para o seu dia a dia.
                </span>
            </div>
        </div>
    </section>
</template>


<style scoped>
.intro-description-text {
    width: 600px;
}

.introduction-section {
    position: relative;
    min-height: 500px;
    background-color: rgb(17, 17, 17);
}

.intro-bg-image {
    position: absolute;
    right: 0;
    height: 500px;
    z-index: 0;
    opacity: 0.15;
    mask-image: linear-gradient(to left, rgba(9, 9, 9, 1) 40%, rgba(9, 9, 9, 0) 100%);
}

hr {
    border-color: red;
    width: 200px;
    opacity: 0.3;
    margin-bottom: 16px;
}

.instructor-img {
    margin: 16px 0;
    z-index: 1;
}

.introduction-bg {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 22px;
    min-height: 500px;
    box-sizing: border-box;
}

@media (max-width: 1280px) {
    .intro-description-text {
        width: 100%;
        padding: 12px;
    }

    .introduction-bg { 
        gap: 4px;
    }
}
</style>