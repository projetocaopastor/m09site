<script setup lang="ts">
import { ref } from "vue";

interface Card {
  title: string;
  discount: string;
  originalPrice: string;
  installmentPrice: string;
  fullPrice: string;
  benefits: string[];
  extraBenefit: string;
  link: string;
}

const cards = ref<Card[]>([
  {
    title: "Pacote 1",
    discount: "20% de desconto por tempo limitado",
    originalPrice: "R$ 1200,00",
    installmentPrice: "R$ 79,90",
    fullPrice: "R$ 1430,40",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit: "Acesso aos módulos x, y e z.",
    link: "http://www.google.com",
  },
  {
    title: "Pacote 2",
    discount: "15% de desconto por tempo limitado",
    originalPrice: "R$ 1500,00",
    installmentPrice: "R$ 99,90",
    fullPrice: "R$ 1700,40",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit: "Acesso aos módulos x, y e z.",
    link: "http://www.google.com",
  },
  {
    title: "Pacote 3",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 1000,00",
    installmentPrice: "R$ 69,90",
    fullPrice: "R$ 1200,40",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit: "Acesso aos módulos x, y e z.",
    link: "http://www.google.com",
  },
]);
</script>

<template>
  <v-container class="pb-16 pt-8" fluid>
    <v-row justify="center">
      <v-col cols="12">
        <div class="d-flex justify-center mb-2">
          <span class="text-h4 text-md-start text-center">
            Adquira os 
            <span class="text-yellow-darken-3">
              módulos 
            </span>
            separadamente em pacotes
          </span>
        </div>
      </v-col>
      <v-col cols="12" md="3" v-for="(card, index) in cards" :key="index">
        <div class="d-flex justify-center">
          <div class="sale-card" :class="`sale-card-${index + 1}`">
            <div class="package-icon-content">
              <v-badge :content="index + 1" color="yellow-darken-1">
                <v-icon
                  icon="mdi-package-variant-closed"
                  size="80"
                  color="yellow-darken-3"
                />
              </v-badge>
            </div>
            <div class="text-h6 font-weight-medium">
              {{ card.title }}
            </div>
            <div class="package-discount text-center">
              {{ card.discount }}
            </div>
            <div class="text-center d-flex align-center ga-1 pt-2">
              De
              <div class="position-relative">
                <span class="text-h5 line-through text-red">{{
                  card.originalPrice
                }}</span>
              </div>
              por
            </div>
            <div class="text-center">
              <div class="d-flex align-center ga-1">
                12x
                <span class="text-h4 text-yellow-darken-3">{{
                  card.installmentPrice
                }}</span>
              </div>
              à vista {{ card.fullPrice }}
            </div>
            <div>
              <div
                class="d-flex ga-1"
                v-for="(benefit, idx) in card.benefits"
                :key="idx"
              >
                <v-icon icon="mdi-check" color="yellow-darken-3" />
                {{ benefit }}
              </div>
              <hr class="my-3">
              <div class="d-flex ga-1">
                <v-icon icon="mdi-package" color="yellow-darken-3" />
                <span>
                  {{ card.extraBenefit }}
                </span>
              </div>
            </div>
            <a class="sale-btn" :href="card.link" target="_blank">
              <span> MATRICULE-SE </span>
              <v-icon
                icon="mdi-arrow-right-thin-circle-outline"
                class="bottom-icon"
              />
            </a>
            <div class="mt-2">
              <v-icon icon="mdi-lock" /> Ambiente 100% seguro
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
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
  height: 640px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  margin: 16px;
}

.sale-card::before {
  z-index: -2;
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-color: #004c83;
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
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 40px),
    calc(100% - 40px) 100%,
    0 100%
  );
}

.sale-card-3::after {
  background-color: #002b4f; /* Azul Escuro 1 */
}

.sale-card-2::after {
  background-color: #00355f; /* Azul Escuro 2 */
}

.sale-card-1::after {
  background-color: #004070; /* Azul Escuro 3 */
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

.sale-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f57f17;
  border-radius: 2px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  box-shadow: 0 0 5px 1px #f57f17;
  margin-top: 20px;
}

.bottom-icon {
  position: absolute;
  right: 20px;
}
</style>
