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
  <v-row
    justify="center"
    class="flex-column align-center px-md-0 px-6"
    style="background-color: rgb(3, 3, 3)"
  >
    <v-col cols="12" class="pt-10 pb-2">
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

    <v-col cols="12" md="6">
      <h1 class="text-h4 text-center">
        <span class="text-yellow-darken-3">Mentalidade</span>,
        <span class="text-yellow-darken-3">proteção residencial</span> e
        <span class="text-yellow-darken-3">segurança</span>: aprenda com a
        melhor metodologia do Brasil.
      </h1>
    </v-col>

    <v-col cols="12" md="6">
      <div class="d-flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/YwKw8UwT1CQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          width="100%"
          height="412"
        ></iframe>
      </div>
    </v-col>

    <v-col cols="12" md="6" class="my-4 py-4 alert-courses">
      <h1 class="text-h4 text-center">
        Adquira cursos a partir de
        <span class="text-yellow-darken-3">R$ 13,97</span> por mês.
      </h1>
    </v-col>

    <v-col cols="12" md="6" class="mb-4 px-0">
      <div class="d-flex justify-center">
        <v-btn
          color="yellow-darken-4"
          size="x-large"
          class="font-weight-black"
          block
          @click="onClick"
          style="box-shadow: 0 0 15px #f9a825"
        >
          <span class="text-white"> QUERO ME MATIRCULAR AGORA </span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
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
</style>
