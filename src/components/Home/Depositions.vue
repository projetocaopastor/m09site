<script setup>
import { ref } from 'vue';

const isHovering = ref(false);
</script>

<template>
    <v-row justify="center" class="bg-grey-lighten-4 py-md-12 py-2">
        <v-col md="8" cols="12">
            <v-container class="d-flex ga-md-12 ga-6 align-center">
                
                <span class="text-h5 text-md-h4">Depoimentos</span>

                <div class="d-flex flex-column align-center">
                    <h2 class="students-number text-red-darken-3">+100</h2>
                    <h4>alunos</h4>
                </div>

                <div class="d-flex flex-column align-center">
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-icon v-bind="props" :color="isHovering ? 'red-darken-1' : undefined" icon="mdi-earth"
                                size="x-large"></v-icon>
                        </template>
                    </v-hover>
                    <span class="mt-2 text-center">Espalhados pelo Brasil</span>
                </div>

                <v-spacer class="d-md-block d-none" />

                <div class="d-md-block d-none">
                    <v-btn height="50" class="px-8" variant="outlined">Veja mais depoimentos</v-btn>
                </div>
            </v-container>
        </v-col>

        <v-col md="8" cols="12" class="videos mt-md-9 d-flex justify-space-between px-6 px-md-0">
            <v-container class="pa-0">
                <v-row no-gutters>
                    <v-col v-for="n in 3" :key="n" cols="12" sm="4">
                        <v-sheet class="pa-4 ma-1 align-center d-flex flex-column rounded-lg bg-grey-lighten-2">
                            <iframe width="100%" src="https://www.youtube.com/embed/dzhhXGYJnSQ?autoplay=0&amp;rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

                            <div class="video-description my-3">
                                <h3 class="mb-1">
                                    Aluno X
                                </h3>
                                <span>
                                    “Dentro do Projeto Cão Pastor eu aprendi tudo de forma leve, fácil e didático".
                                </span>
                            </div>
                        </v-sheet>

                    </v-col>
                </v-row>
            </v-container>

        </v-col>

        <v-col class="d-md-none">
            <v-container>
                <v-btn block height="50" variant="outlined">Veja mais depoimentos</v-btn>
            </v-container>
        </v-col>
    </v-row>
</template>

<style scoped>
.students-number {
    letter-spacing: 0.2rem;
}
</style>