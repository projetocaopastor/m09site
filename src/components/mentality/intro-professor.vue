<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <div
          style="
            max-width: 600px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 100px;
          "
        >
          <div class="text-h3 font-weight-bold text-white mb-3">
            Quem é <span class="text-orange-darken-2">Cadar?</span>
          </div>
          <span
            style="font-size: 1.6rem; font-weight: 300; margin-bottom: 12px"
          >
            Um texto aqui descrevendo quem é o professor, etc. Um dos fundadores
            do instituto cão pastor.
            descriçãodescriçãodescriçãodescriçãodescrição
          </span>
          <span style="font-size: 1.6rem; font-weight: 300">
            Um texto aqui descrevendo quem é o professor, etc. Um dos fundadores
            do instituto cão pastor.
            descriçãodescriçãodescriçãodescriçãodescrição
          </span>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="intro-professor-image-container">
          <v-img src="@/assets/cadar-aula1.png" class="intro-professor-image" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.intro-professor-image-container {
  margin: 90px;
  box-sizing: content-box;
}

.intro-professor-image {
  border-radius: 32px;
  border: 2px solid #f57f17;
}
</style>
