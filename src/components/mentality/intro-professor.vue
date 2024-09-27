<template>
  <v-container fluid class="bg-surface">
    <v-row>
      <v-col cols="12" md="6">
        <div class="intro-professor">
          <div class="text-md-h3 text-h4 font-weight-bold text-white mb-3 text-center text-md-start">
            Quem é <span class="text-orange-darken-2">Cadar?</span>
          </div>
          <div class="intro-professor-description mb-3">
            Um texto aqui descrevendo quem é o professor, etc. Um dos fundadores
            do instituto cão pastor.
            descriçãodescriçãodescriçãodescriçãodescrição
          </div>
          <div class="intro-professor-description">
            Um texto aqui descrevendo quem é o professor, etc. Um dos fundadores
            do instituto cão pastor.
            descriçãodescriçãodescriçãodescriçãodescrição
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
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

.intro-professor {
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
}

.intro-professor-description {
  font-size: 1.6rem;
  font-weight: 300;
}

@media (max-width: 960px) {
  .intro-professor {
    height: 100%;
    display: block;
    margin-left: 0;
    word-wrap: break-word;
  }

  .intro-professor-image-container {
    margin: 0;
    margin-bottom: 24px;
  }

  .intro-professor-description {
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
