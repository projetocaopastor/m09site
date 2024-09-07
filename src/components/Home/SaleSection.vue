<script setup lang="ts">
import { mainPack } from "../../utils/packs";
</script>

<template>
  <v-container
    class="mb-3 d-flex justify-center align-center py-16 sale-content"
    id="main-course"
    fluid
  >
    <div class="sale-card">
      <div class="package-icon-content">
        <v-icon :icon="mainPack.icon" size="80" color="yellow-darken-3" />
      </div>
      <div class="text-h6 font-weight-medium">{{ mainPack.title }}</div>
      <div>
        <v-btn
          color="yellow-darken-3"
          text="Saiba mais"
          variant="outlined"
          class="mb-1"
          target="_blank"
          :to="{ name: '/curso/[curso]', params: { curso: mainPack.routeParam } }"
          id="curso-cao-pastor-saiba-mais-btn"
        ></v-btn>
      </div>
      <div class="text-center d-flex align-center ga-1 pt-2">
        De
        <div class="position-relative">
          <span class="text-h5 line-through text-red">{{
            mainPack.originalPrice
          }}</span>
        </div>
        por
      </div>
      <div class="text-center">
        <div class="d-flex align-center ga-1">
          12x
          <span class="text-h4 text-yellow-darken-3">{{
            mainPack.installmentPrice
          }}</span>
        </div>
        à vista {{ mainPack.fullPrice }}
      </div>
      <div>
        <div
          class="d-flex ga-1"
          v-for="(benefit, idx) in mainPack.benefits"
          :key="idx"
        >
          <v-icon icon="mdi-check" color="yellow-darken-3" />
          {{ benefit }}
        </div>
        <hr class="my-3" />
        <div class="d-flex ga-1 font-weight-medium">
          <v-icon icon="mdi-star" color="yellow-darken-3" />
          Acesso a todos os módulos
        </div>
      </div>
      <a
        class="sale-btn"
        :href="mainPack.link"
        target="_blank"
        id="curso-cao-pastor-anchor"
      >
        <span> MATRICULE-SE </span>
        <v-icon icon="mdi-arrow-right-thin-circle-outline" />
      </a>
      <div class="mt-2"><v-icon icon="mdi-lock" /> Ambiente 100% seguro</div>
    </div>
  </v-container>
</template>

<style scoped>
.line-through::after {
  content: "";
  top: 0;
  left: 0;
  border-bottom: 2px solid #a8adb2;
  position: absolute;
  width: 100%;
  height: 50%;
  -webkit-transform: rotate(-10deg);
  transform: rotate(-10deg);
}

.sale-card {
  width: 360px;
  height: 690px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
}

.sale-card::before {
  z-index: -2;
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-color: #f9a82580;
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
  background-color: #041924;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 40px),
    calc(100% - 40px) 100%,
    0 100%
  );
}

.sale-content {
  background-image: url("/src/assets/soldier.jpg");
  background-position-y: 12%;
  height: 800px;
  position: relative;
}

.sale-content::after {
  content: "";
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}

.package-icon-content {
  border: 1px solid #015592;
  padding: 8px;
  border-radius: 50%;
  background-color: #012640;
}

.package-discount {
  font-weight: 500;
  background-color: rgba(0, 255, 0, 0.6);
  padding: 4px 16px;
  border-radius: 2px;
  font-size: 0.8rem;
}

.bottom-icon {
  position: absolute;
  right: 20px;
}
</style>
