<script lang="ts" setup>
import { useRoute } from "vue-router";
import { modules } from "../../utils/modules-details";
import { onMounted } from "vue";

const route = useRoute();

onMounted(() => {
  console.log(route);
});
</script>

<template>
  <v-container fluid class="">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="7"
        class="bg-grey-darken-4 px-8 mt-2"
        style="border-radius: 4px"
      >
        <div class="text-h4 text-center d-flex justify-center ga-2 mb-3">
          <div class="font-weight-medium text-yellow-darken-3">Curso:</div>
          <div class="font-weight-light">Criminologia</div>
        </div>
        <div class="d-flex justify-center mb-3">
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
      <v-col
        cols="12"
        sm="8"
        md="7"
        class="bg-grey-darken-4 px-12 mt-3"
        style="border-radius: 4px"
      >
        <div class="text-h5 text-yellow-darken-3 mb-2">Sobre o curso</div>
        <div class="mb-1">
          Um curso voltado para você entender como o crime realmente funciona.
          Pois ele dá gradativamente o tema, nossos instrutores também tratam o
          assunto com a expertise de quem testou as teorias no campo pratico.
          Esse conteúdo é indicado para todos aqueles que querem e precisam
          entender como funciona o crime, bem como a tomada de decisão de um
          criminoso.
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="7"
        class="bg-grey-darken-3 px-12 mt-3"
        style="border-radius: 4px"
      >
        <div class="text-h5 text-yellow-darken-3 mb-4">Módulos</div>
        <v-expansion-panels class="mb-3">
          <v-expansion-panel
            v-for="module in modules"
            :key="module.title"
            :id="module.id"
          >
            <!-- @group:selected="handleGoogleAnalyticsPanelEvent($event, module.id)" -->
            <template #title>
              <span
                class="text-uppercase"
                style="font-size: 1.2rem; font-weight: 400"
              >
                <v-icon
                  :icon="module.icon"
                  class="mr-1"
                  :color="
                    module.title.includes('EXTRA')
                      ? 'yellow-darken-4'
                      : 'yellow-darken-3'
                  "
                ></v-icon>
                {{ module.title }} - {{ module.text }}
              </span>
            </template>
            <template #text>
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
            </template>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" sm="8" class="px-0">
        <section
          class="bg-grey-darken-3 d-flex flex-column justify-center align-center pa-8 pt-6 open-sans-font"
          style="border-radius: 12px; border: 1px solid #f9a82580"
        >
          <div
            class="pa-2 text-uppercase text-h6"
            style="border: 2px solid #ababab; border-radius: 8px"
          >
            em até 12x de
          </div>
          <div class="d-flex ga-1 pa-2 align-end text-uppercase">
            <div class="text-yellow-darken-3 text-md-h3 text-h4 font-weight-bold">R$</div>
            <div class="text-md-h1 text-h2 font-weight-black">1000,00</div>
          </div>
          <div class="text-md-h5 text-h6 d-flex ga-2">
            ou à vista por
            <div class="text-yellow-darken-3">R$ 400,00</div>
          </div>
          <div style="width: 100%" class="mt-4">
            <v-btn
              block
              color="yellow-darken-4"
              height="42px"
              style="box-shadow: 0 0 6px #f9a825"
              size="x-large"
              class="font-weight-bold"
            >
              MATRICULAR AGORA
            </v-btn>
          </div>
        </section>
      </v-col>
    </v-row>

    <v-row style="background-color: #161616" class="align-center mt-8">
      <v-col md="6">
        <v-img
          src="/src/assets/7diasgarantia.jpg"
          icon="mdi-check"
          height="300"
        />
      </v-col>
      <v-col cols="12" md="4" class="text-md-left text-center">
        <div class="text-h4 font-weight-medium text-yellow-darken-2 pb-2">
          7 DIAS DE ZERO RISCO
        </div>
        <div>
          Ao adquirir um de nossos cursos, você terá 7 dias para testar o
          material e decidir se é a escolha certa para você.
          <br /><br />
          Se, durante esse período, perceber que o curso não atende às suas
          expectativas ou que não é o momento certo, basta solicitar o reembolso
          total enviando um e-mail para a nossa equipe.
          <br /><br />
          Sem complicações — seu dinheiro de volta, caso decida!
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

.open-sans-font {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
</style>
