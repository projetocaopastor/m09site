<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div
          class="d-flex justify-center align-center intro-call flex-column mt-3 ga-2"
        >
          <div class="text-h4">
            Não perca essa
            <span style="text-shadow: 0vw 0vw 1.39vw #f9a82580; color: #f9a825"
              >oportunidade!</span
            >
          </div>
          <div class="text-h5 mb-2 font-weight-light">
            Se está disposto a mudar, vamos lhe apresentar um caminho.
          </div>
          <div class="text-h5 mb-2 font-weight-light">
            Clique no botão abaixo e se
            <span style="text-shadow: 0vw 0vw 1.39vw #f9a82580; color: #f9a825">
              inscreva
            </span>!
          </div>
          <class-mentality-form />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.intro-call {
  background-color: #051e2a;
  border-radius: 30px;
  border: 1px solid #f57f17;
  padding: 42px 0;
}
</style>
