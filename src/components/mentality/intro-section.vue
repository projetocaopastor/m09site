<template>
  <v-container fluid class="pa-0 intro-section-container">
    <v-row no-gutters class="d-md-flex d-none">
      <v-col
        cols="12"
        class="d-flex justify-center flex-column align-center ga-2 text-h6 font-weight-light intro-header"
      >
        <div>AULA ABERTA NO DIA</div>
        <div class="text-h5"><v-icon icon="mdi-calendar" /> 12/10</div>
      </v-col>
    </v-row>

    <section class="intro-section">
      <div class="intro-alert">
        <span class="text-md-h5 text-h6 font-weight-medium">
          PARTICIPE NO DIA
          <span
            class="text-md-h4"
            style="text-shadow: 0vw 0vw 1.39vw #f9a82580; color: #f9a825"
            >12/02</span
          >
          DA
        </span>

        <span
          class="text-h4 text-md-h3"
          style="text-shadow: 0vw 0vw 1.39vw #f9a82580; color: #f9a825"
        >
          5ª TURMA DO CURSO DE MENTALIDADE CÃO PASTOR
        </span>

        <span class="font-weight-light mb-4 text-md-h5 text-h6">
          Aprenda a construir um plano de ação prático para redefinir sua vida,
          superar barreiras e alcançar metas que pareciam impossíveis.
        </span>

        <class-mentality-form />
      </div>

      <v-img src="/src/assets/images/mentalidade-capa.jpeg" width="100%" class="d-md-none" />

      <!-- <div class="intro-video">
        <iframe
          src="https://www.youtube.com/embed/mWGrt7R3MWw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="youtube-frame"
        ></iframe>
      </div> -->
    </section>
  </v-container>
</template>

<style lang="scss">
.intro-section-container {
  border-bottom-left-radius: 200px;
}

.v-toolbar {
  display: none;
}

.v-main {
  padding-top: 0px !important;
}

$intro-header-height: 80px;

.intro-header {
  background-image: linear-gradient(#f57c00, #e65100);
  height: $intro-header-height;
}

.intro-section {
  min-height: calc(100vh - $intro-header-height);
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  .intro-alert {
    display: flex;
    flex-direction: column;
    flex: 1 1 45%;
    padding-left: 90px;
    gap: 12px;
  }

  .intro-video {
    flex: 1 1 55%;
    padding: 0 64px;

    .youtube-frame {
      height: 380px;
      width: 100%;
      border-radius: 10px;
      border-bottom: 8px solid #f57c00;
    }
  }
}

@media (max-width: 960px) {
  .intro-section-container {
    border-bottom-left-radius: 0;
  }

  .intro-section {
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    min-height: auto;
    height: auto;
    padding-top: 32px;

    .intro-alert {
      text-align: center;
      padding: 0;
    }

    .intro-video {
      padding: 0;
      width: 100%;
      margin-top: 16px;

      .youtube-frame {
        height: 300px;
        width: 100% !important;
        border-radius: 10px;
        border-bottom: 2px solid #f57c00;
      }
    }
  }
}
</style>
