<script setup lang="ts">
import LogoMatilha from '@/assets/logo-matilha.jpg'
// import { callWhatsApp } from '@/utils/functions'

const email = "projetomatilhacaopastor@gmail.com"
// const router = useRouter()

function mailTo() {
  window.open(`mailto:${email}?subject=Olá, gostaria de saber mais sobre o seu curso.`)
}

function goToHome() {
  //   router.push("/")
}

</script>

<template>
  <div class="footer">
    <v-footer class="bg-white">
      <v-row justify="space-evenly" class="my-4 flex-md-row flex-column-reverse">

        <v-col cols="12" md="4" class="d-flex flex-column justify-center align-md-start align-center">
          <div>
            <v-img :src="LogoMatilha" :width="200" class="align-end mb-4" />
          </div>

          <!-- <div class="mb-2">
            <router-link to="/orcamento">Solicite um orçamento</router-link> | 
            <router-link to="/sobre-nos">Sobre nós</router-link> | 
            <router-link to="/cursos">Cursos</router-link>
          </div> -->

          <div class="text-subtitle-2">
            Projeto Cão Pastor © 2024 - v1.0
          </div>

        </v-col>

        <v-col cols="12" md="3" class="d-flex flex-column justify-center align-md-start align-center">

          <div class="mb-3 mb-md-6">
            <v-btn variant="text" href="https://www.instagram.com/caveiracadar09/" target="_blank" id="youtube-footer-btn">
              <v-icon icon="mdi-instagram" class="mr-1" />
              <span class="text-lowercase pb-1">
                @caveiracadar09
              </span>
            </v-btn>
          </div>

          <div class="mb-3 mb-md-6">
            <v-btn variant="text" @click="mailTo()" id="email-header-btn">
              <v-icon icon="mdi-email" class="mr-1" />
              <span class="text-lowercase">
                {{ email }}
              </span>
            </v-btn>
          </div>

          <div>
            <v-btn variant="text" @click="goToHome()">
              <v-icon icon="mdi-web" class="mr-1" />
              <span class="text-lowercase">
                www.projetocaopastor.com.br
              </span>
            </v-btn>
          </div>

        </v-col>

        <v-col cols="12" md="3" class="d-flex flex-column justify-center">
          <div class="text-h5 font-weight-medium text-yellow-darken-4 mb-2">
            Sobre nós
          </div>
          <div class="mb-md-4">
            O projeto, que trata da construção de conduta, teve um início despretensioso. Aos poucos, conseguimos reunir
            um grupo de pessoas dedicadas que compartilham os mesmos anseios em relação à mentalidade e segurança.
          </div>
          <div class="mx-md-0 mx-auto">

            <!-- <v-btn @click="goToLinkedin()" class="mr-2">
              <v-icon icon="mdi-linkedin" color="#0E76A8" />
            </v-btn> -->

            <!-- <v-btn @click="goToInstagram()" class="ml-2">
              <v-icon icon="mdi-instagram" color="#E1306C" />
            </v-btn> -->

          </div>
        </v-col>

      </v-row>
    </v-footer>
  </div>
</template>

