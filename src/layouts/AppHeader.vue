<template>
  <v-app-bar :elevation="2" scroll-behavior="hide" scroll-threshold="1">
    <template v-slot:prepend>
      <v-btn icon :to="{ path: '/' }">
        <v-img
          src="@/assets/logo-matilha.jpg"
          height="40"
          width="40"
          style="border-radius: 50%"
        />
      </v-btn>
    </template>

    <v-app-bar-title>
      <label> </label>
    </v-app-bar-title>

    <template v-slot:append>
      <div>
        <v-btn
          href="https://www.instagram.com/caveiracadar09/"
          target="_blank"
          id="instagram-header-btn"
        >
          <div class="d-flex ga-2 align-center">
            <v-icon
              icon="mdi-instagram"
              size="x-large"
              style="
                background: linear-gradient(
                  45deg,
                  #f09433,
                  #e6683c,
                  #dc2743,
                  #cc2366,
                  #bc1888
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              "
            />
            <span class="text-body-1">Instagram</span>
          </div>
        </v-btn>

        <v-btn
          href="https://www.youtube.com/c/ProjetoMatilhaC%C3%A3oPastor"
          target="_blank"
          id="youtube-header-btn"
        >
          <div class="d-flex ga-2 align-center">
            <v-icon
              color="#c4302b"
              icon="mdi-youtube"
              size="x-large"
              class="youtube-icon"
            />
            <span class="text-body-1">Youtube</span>
          </div>
        </v-btn>
      </div>

      <!-- <v-btn href="https://apoia.se/matilha09" target="_blank">APOIE O PROJETO</v-btn> -->
    </template>
  </v-app-bar>
</template>

<style>
.youtube-icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid white;
  width: 10px;
  height: 10px;
  background-color: white;
  z-index: -1;
}
</style>
