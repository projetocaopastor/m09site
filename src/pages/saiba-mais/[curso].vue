<script lang="ts" setup>

import { modules } from '../../utils/modules-details';

</script>

<template>
  <v-container fluid class="pb-8">
    <v-row justify="center">
      <v-col cols="12" md="7">
        <div class="text-h4 text-center d-flex justify-center ga-2">
          <div class="font-weight-medium text-yellow-darken-3">Curso:</div>
          <div class="font-weight-light">Criminologia</div>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <div class="d-flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/mWGrt7R3MWw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="youtube-frame"
          ></iframe>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="7" class="bg-grey-darken-4">
        <div class="text-h5">Sobre o curso</div>
        <div>
          Um curso voltado para você entender como o crime realmente funciona.
          Pois ele dá gradativamente o tema, nossos instrutores também tratam o
          assunto com a expertise de quem testou as teorias no campo pratico.
          Esse conteúdo é indicado para todos aqueles que querem e precisam
          entender como funciona o crime, bem como a tomada de decisão de um
          criminoso.<br /><br />
          <strong class="text-yellow-darken-3">Módulos:</strong> Negação -
          Criminologia e Mentalidade.
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="7" class="bg-grey-darken-4">
        <div class="text-h5">Módulos</div>
        <div v-for="module in modules.filter(el => ['modulo-mentalidade', 'modulo-negacao'].includes(el.id))">
            <v-row justify="center">
                <v-col cols="12">
                  <span class="font-weight-medium text-yellow-darken-3">
                    {{
                      module.professors.length > 1
                        ? "Professores:"
                        : "Professor:"
                    }}
                  </span>
                  <div class="d-flex ga-10 mt-4">
                    <div
                      class="d-flex align-center ga-2"
                      v-for="(professor, index) in module.professors"
                      :index="index"
                    >
                      <v-avatar size="45px">
                        <!-- <v-img alt="Avatar" :src="professor.img"></v-img> -->
                        <v-icon
                          icon="mdi-human-male-board"
                          :color="`red-lighten-${index * 2 + 1}`"
                        />
                      </v-avatar>
                      <span>{{ professor.name }}</span>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12">
                  <span class="font-weight-medium text-yellow-darken-3"
                    >Descrição:
                  </span>
                  {{ module.description }}
                </v-col>

                <v-col cols="12">
                  <div class="d-flex flex-column">
                    <span class="font-weight-medium text-yellow-darken-3">
                      Conteúdo:
                    </span>
                    <div
                      v-for="aula in module.contents"
                      :key="Object.keys(aula)[0]"
                    >
                      <span class="text-yellow-darken-3 font-weight-lig">
                        {{ Object.keys(aula)[0] }} -
                      </span>
                      {{ Object.values(aula)[0] }}
                    </div>
                  </div>
                </v-col>
              </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.youtube-frame {
  height: 422px;
  width: 100%;
}

@media (max-width: 400px) {
  .youtube-frame {
    height: 200px;
  }
}
</style>
