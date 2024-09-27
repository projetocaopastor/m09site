<script setup lang="ts">
withDefaults(defineProps<{
  maxCards?: number;
}>(), {
  maxCards: 6
});

const depositions = [
  {
    name: "Ludmilla Milito",
    instagram: "ludmillamilito",
    image: "https://i.imgur.com/tuJ1d3z.jpeg",
    deposition:
      "Sempre digo que o curso mudou a minha vida e de várias outras pessoas para quem procuro passar o que aprendi! Conteúdo absurdo, criado por quem vive e entende o assunto!",
  },
  {
    name: "Eduardo Toledo",
    instagram: "edutoledoradical",
    image: "https://i.imgur.com/QSnbUoR.jpeg",
    deposition:
      "Curso sem mimi direto ao ponto , realidade atual não tem faculdade escolinha para isso ,a experiência é absurda .esse curso vai abrir seus olhos ( civil militar qualquer pessoa)",
  },
  {
    name: "Nado",
    instagram: "donahh",
    image: "https://i.imgur.com/GOpTDGF.jpeg",
    deposition:
      "Sou aluno da primeira turma ( ALFA) trabalho na área de segurança privada a 14 anos, e sempre busquei cursos da área para me manter atualizado. Posso garantir pra vocês que dificilmente um curso vai entregar tanto conteúdo e conhecimento...",
  },
  {
    name: "Alexandre Moreira",
    instagram: "xandi_xms",
    image: "https://i.imgur.com/hNGfIRe.jpeg",
    deposition:
      "Fala pessoal, falar do Curso Cão pastor e uma honra, tive ensinamentos que raramente vimos por aí, é um curso completo, trata de uma peculiar preparação mental, fisica, psicóloga, técnica...",
  },
  {
    name: "Gisele Vianna",
    instagram: "makegivianna",
    image: "https://i.imgur.com/s6KujpK.jpeg",
    deposition:
      "Fui aluna da 1ª turma, um curso para vida e qualquer cidadão civil ou militar. No mesmo aprendemos sobre criminalidade, defesa pessoal, proteção residencial, aph( primeiros socorros), dentre outros muitos módulos disponíveis. São mais de 140 aulas!!!",
  },
  {
    name: "Ana Paula",
    instagram: "aanapaulagarcia",
    image: "https://i.imgur.com/bP3ymZT.jpeg",
    deposition:
      "Sou aluna da penúltima turma e o que fiz foi um investimento. Apesar de ser da PPERJ, a maioria das coisas se aplica a mim como cidadã, como mulher, as questões de proteção residencial, legítima defesa, se “posturar” frente a um possível criminoso…",
  },
];
</script>

<template>
  <v-row justify="center" class="bg-grey-lighten-4 py-md-12 py-2">
    <v-col cols="12">
      <v-container class="d-flex ga-md-12 ga-6 align-center px-md-10">
        <span class="text-h5 text-md-h4">Depoimentos</span>

        <div class="d-flex flex-column align-center">
          <h2 class="students-number text-red-darken-3">+100</h2>
          <h4>alunos</h4>
        </div>

        <div class="d-flex flex-column align-center">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-icon
                v-bind="props"
                :color="isHovering ? 'red-darken-1' : undefined"
                icon="mdi-earth"
                size="x-large"
              ></v-icon>
            </template>
          </v-hover>
          <span class="mt-2 text-center">Espalhados pelo Brasil</span>
        </div>

        <v-spacer class="d-md-block d-none" />

        <div class="d-md-block d-none">
          <v-btn
            height="50"
            class="px-8"
            variant="outlined"
            href="https://www.instagram.com/p/C8pB5jzMnqf/"
            target="_blank"
            id="ver-mais-depoimentos-btn"
            >Veja mais depoimentos</v-btn
          >
        </div>
      </v-container>
    </v-col>

    <v-col cols="12">
      <v-container grow>
        <v-row no-gutters>
          <template v-for="(deposition, index) in depositions" :key="index">
            <v-col cols="12" md="6" lg="4" v-if="index < maxCards">
              <div class="sale-card">
                <v-row>
                  <v-col style="height: 60px">
                    <div class="d-flex align-center ga-2">
                      <v-avatar size="45px">
                        <v-img alt="Avatar" :src="deposition.image"></v-img>
                      </v-avatar>
                      <div class="d-flex flex-column text-grey-lighten-5">
                        <span>
                          <v-icon icon="mdi-account" size="small" />
                          {{ deposition.name }}
                        </span>
                        <span>
                          <v-icon icon="mdi-instagram" size="small" />
                          @{{ deposition.instagram }}
                        </span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-0" style="height: 150px">
                    <span class="text-grey-lighten-5">
                      {{ deposition.deposition }}
                    </span>
                  </v-col>
                  <v-col cols="12" style="height: 40px">
                    <a
                      class="text-yellow-darken-3 text-decoration-underline"
                      href="https://www.instagram.com/p/C8pB5jzMnqf/"
                      target="_blank"
                      id="ver-mais-depoimentos-card-anchor"
                    >
                      Ver depoimentos completos no instagram
                    </a>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-col>

    <v-col class="d-md-none">
      <v-container>
        <v-btn
          block
          height="50"
          variant="outlined"
          href="https://www.instagram.com/p/C8pB5jzMnqf/"
          id="ver-mais-depoimentos-btn"
          >Veja mais depoimentos</v-btn
        >
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped>
.students-number {
  letter-spacing: 0.2rem;
}

.sale-card {
  width: 360px;
  height: 320px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  margin: 0 auto;
  margin-bottom: 24px;
  transform: translateY(0);
  transition: transform 0.6s ease;
}

.sale-card:hover {
  transform: translateY(-10px);
}

.sale-card::before {
  z-index: -2;
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-color: #f9a825;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 40px),
    calc(100% - 40px) 100%,
    0 100%
  );
}

.sale-card::after {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #021017;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 40px),
    calc(100% - 40px) 100%,
    0 100%
  );
}
</style>
