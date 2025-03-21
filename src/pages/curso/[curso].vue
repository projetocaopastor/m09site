<script lang="ts" setup>
import { useRoute } from "vue-router";
import { modules } from "../../utils/modules-details";
import { onMounted, ref } from "vue";
import { cards, mainPack, Pack } from "../../utils/packs";
import { el } from "vuetify/locale";

const route = useRoute();
const courseModules = ref<any[]>([]);
const pack = ref<Pack>({} as Pack);

onMounted(() => {
  var cursoTag = route.params.curso;

  if (cursoTag === "cao-pastor") {
    pack.value = mainPack;
    courseModules.value = modules.value;
  } else {
    pack.value = <Pack>cards.find((el: Pack) => el.routeParam === cursoTag);
    courseModules.value = modules.value?.filter((el) =>
      pack.value.modules?.includes(el.id)
    );
  }
});
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="7"
        class="bg-grey-darken-4 px-md-8 mt-2"
        style="border-radius: 4px"
      >
        <div class="text-h4 text-center d-md-block d-flex ga-2 flex-column mb-3">
          <span class="font-weight-medium text-yellow-darken-3 mr-2">Curso:</span>
          <span class="font-weight-medium">{{ pack.courseName }}</span>
        </div>
        <div class="d-flex justify-center mb-3">
          <iframe
            :src="pack.youtubeIntro"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="youtube-frame"
          ></iframe>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" style="font-size: 1.2rem;">
      <v-col
        cols="12"
        sm="8"
        md="7"
        class="bg-grey-darken-4 px-md-12 mt-3"
        style="border-radius: 4px;"
      >
        <div class="text-h5 text-yellow-darken-3 mb-2">Sobre o curso</div>
        <div class="mb-1" v-html="pack.description">
        </div>
        <div class="d-flex flex-md-row flex-column ga-2 ga-md-0 justify-space-between mt-2 flex-wrap">
          <div v-for="benefit in pack.benefits" style="flex: 0 0 50%;">
            <v-icon v-if="benefit == 'Grupo exclusivo para alunos'" icon="mdi-star" color="yellow-darken-3" />
            <v-icon v-else icon="mdi-check" color="yellow-darken-3" />
            {{ benefit }}
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="7"
        class="bg-grey-darken-3 px-md-12 mt-3"
        style="border-radius: 4px;"
      >
        <div class="text-h5 text-yellow-darken-3 mb-4">Módulos</div>
        <v-expansion-panels class="mb-3">
          <v-expansion-panel
            v-for="module in courseModules"
            :key="module.title"
            :id="module.id"
          >
            <!-- @group:selected="handleGoogleAnalyticsPanelEvent($event, module.id)" -->
            <template #title>
              <span
                class="text-uppercase"
                style="font-weight: 400; font-size: 1.2rem;"
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
                {{ module.text }}
              </span>
            </template>
            <template #text>
              <v-row justify="center" style="font-size: 1.2rem;">
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
          style="border-radius: 12px; border: 1px solid #f9a82590"
        >
          <div
            class="pa-2 text-uppercase text-h6"
            style="border: 2px solid #ababab; border-radius: 8px"
          >
            em até 12x de
          </div>
          <div class="d-flex ga-1 pa-2 align-end text-uppercase">
            <div
              class="text-yellow-darken-3 text-md-h3 text-h4 font-weight-bold"
            >
              R$
            </div>
            <div class="text-md-h1 text-h2 font-weight-black">
              {{ pack.installmentPrice?.replace("R$ ", "") }}
            </div>
          </div>
          <div class="text-md-h5 text-h6 d-flex ga-2">
            ou à vista por
            <div class="text-yellow-darken-3">{{ pack.fullPrice }}</div>
          </div>
          <div style="width: 100%" class="mt-4">
            <v-btn
              block
              color="yellow-darken-4"
              height="42px"
              style="box-shadow: 0 0 6px #f9a825"
              size="x-large"
              class="font-weight-bold"
              :href="pack.link"
              target="_blank"
            >
              MATRICULAR AGORA
            </v-btn>
          </div>
        </section>
      </v-col>
    </v-row>

    <v-row style="background-color: #161616" class="align-center mt-8 py-12">
      <v-col md="6">
        <v-img
          src="/src/assets/7diasgarantia.jpg"
          icon="mdi-check"
          height="300"
        />
      </v-col>
      <v-col cols="12" md="4" class="text-md-left text-center">
        <div class="text-h4 font-weight-medium text-yellow-darken-3 pb-2">
          7 DIAS DE ZERO RISCO
        </div>
        <div>
          Ao adquirir um de nossos cursos, você terá 7 dias para testar o
          material e decidir se é a escolha certa para você.
          <br /><br />
          Se, durante esse período, perceber que o curso não atende às suas
          expectativas ou que não é o momento certo, basta solicitar o reembolso
          total.
          <br /><br />
          Sem complicações — seu dinheiro de volta, caso decida!
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="px-0 pb-0">
        <Depositions />
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
