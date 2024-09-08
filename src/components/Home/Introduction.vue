<script>
import { useGoTo } from "vuetify";

export default {
  setup() {
    const goTo = useGoTo();
    return { goTo };
  },
  data() {
    return {
      duration: 300,
      offset: 20,
      easing: "easeInOutCubic",
    };
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        easing: this.easing,
        offset: this.offset,
      };
    },
  },
  methods: {
    onClick() {
      this.goTo("#packs", this.options);
    },
  },
};
</script>

<template>
  <v-container fluid>
    <v-row
      justify="center"
      class="flex-column align-center px-md-0 px-6"
      style="background-color: rgb(3, 3, 3)"
    >
      <v-col cols="12" class="pt-md-10 pt-6 pb-2">
        <section class="d-flex justify-center align-center ga-2">
          <div>
            <v-img
              src="@/assets/LogoCoPastorCompacta.png"
              :width="100"
              aspect-ratio="1/1"
              cover
            />
          </div>
          <div class="container">
            <label
              class="d-flex justify-space-between text-uppercase font-weight-bold"
            >
              <div>I</div>
              <div>N</div>
              <div>S</div>
              <div>T</div>
              <div>I</div>
              <div>T</div>
              <div>U</div>
              <div>T</div>
              <div>O</div>
            </label>

            <label
              class="d-flex justify-space-between text-uppercase font-weight-black"
            >
              <div>C</div>
              <div>ã</div>
              <div>o</div>
              <div></div>
              <div>P</div>
              <div>a</div>
              <div>s</div>
              <div>t</div>
              <div>o</div>
              <div>r</div>
            </label>
          </div>
        </section>
      </v-col>

      <v-col cols="12" md="6" class="px-0">
        <h1 class="text-md-h4 text-h5 text-center">
          <span class="text-yellow-darken-3">Mentalidade</span>,
          <span class="text-yellow-darken-3">proteção residencial</span> e
          <span class="text-yellow-darken-3">segurança</span>: aprenda com a
          melhor metodologia do Brasil.
        </h1>
      </v-col>

      <v-col cols="12" md="6" class="my-4 py-4 alert-courses">
        <div
          class="text-center d-md-flex justify-center align-center text-lg-h4 text-h5"
        >
          Treinamentos a partir de<br class="d-md-none d-block" />
          <span
            class="text-yellow-darken-3 font-weight-black mx-md-2"
            style="
              background-color: #f9a82515;
              border-radius: 9px;
              padding: 4px;
            "
          >
            R$ 13,97
          </span>
          por mês.
        </div>
      </v-col>

      <v-col cols="12" md="6" class="px-0">
        <div class="d-flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/YwKw8UwT1CQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="youtube-frame"
          ></iframe>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="mb-4 px-0">
        <div class="d-flex justify-center">
          <v-btn
            color="yellow-darken-4"
            size="x-large"
            class="py-8"
            block
            @click="onClick"
            style="box-shadow: 0 0 15px #f9a825"
          >
            <span class="text-white text-md-h5 text-h6 font-weight-bold">
              QUERO ME MATRICULAR AGORA
            </span>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="mb-6 px-0">
        <v-row justify="space-between">
          <v-col cols="4" md="3" class="px-0">
            <div class="d-flex flex-column align-center text-center ga-2">
              <v-icon
                icon="mdi-content-copy"
                size="x-large"
                color="yellow-darken-3"
              />
              <div class="text-caption text-md-h6">
                <span class="font-weight-bold">Todos os módulos liberados</span>
                desde o primeiro acesso
              </div>
            </div>
          </v-col>

          <v-col cols="4" md="3" class="px-0">
            <div class="d-flex flex-column align-center text-center ga-2">
              <v-icon
                icon="mdi-account-group"
                size="x-large"
                color="yellow-darken-3"
              />
              <div class="text-caption text-md-h6">
                <span class="font-weight-bold">Grupo de alunos</span>
                exclusivo com os professores
              </div>
            </div>
          </v-col>

          <v-col cols="4" md="3" class="px-0">
            <div class="d-flex flex-column align-center text-center ga-2">
              <v-icon
                icon="mdi-clock-check"
                size="x-large"
                color="yellow-darken-3"
              />
              <div class="text-caption text-md-h6">
                <span class="font-weight-bold">Acesso contínuo garantido</span>
                por 1 ano aos módulos
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 150px;
}

.alert-courses {
  border: 2px solid #f9a825;
  border-radius: 8px;
}

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
