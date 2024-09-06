<script setup>

import { modules } from '../../utils/modules-details';

const handleGoogleAnalyticsPanelEvent = (panelStatus, expansionPanelId) => {
  if (panelStatus.value) {
    gtag("event", "expansion_panel_click", {
      event_category: "User Interaction",
      event_label: `${expansionPanelId}-panel`,
      value: 1,
    });
  }
};
</script>

<template>
  <v-container
    class="d-flex align-center justify-center bg-grey-darken-3"
    fluid
  >
    <v-row justify="center">
      <v-col cols="10">
        <div style="width: 100%" class="d-flex justify-center mt-4 mb-2">
          <span class="text-h4">
            Explore o que você vai
            <span class="text-yellow-darken-3">aprender</span> aqui
          </span>
        </div>
      </v-col>

      <v-col cols="12" md="7">
        <v-expansion-panels class="mb-6 mt-2">
          <v-expansion-panel
            v-for="module in modules"
            :key="module.title"
            :id="module.id"
            @group:selected="handleGoogleAnalyticsPanelEvent($event, module.id)"
          >
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
  </v-container>
</template>

<style scoped>
.content-card {
  border: 1px solid #ff000080;
}
</style>
