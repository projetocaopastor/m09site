<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <img src="@/assets/logo-matilha.jpg" height="40" style="border-radius: 50%;">
        </template>

        <v-app-bar-title>
            <label>
            </label>
        </v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-instagram" href="https://www.instagram.com/matilhacaopastor/" target="_blank"></v-btn>
            
            <v-btn icon="mdi-youtube" href="https://www.youtube.com/@ProjetoMatilhaCaoPastor" target="_blank"></v-btn>
            
            <v-btn href="https://apoia.se/matilha09" target="_blank">APOIE O PROJETO</v-btn>
        </template>
    </v-app-bar>
</template>