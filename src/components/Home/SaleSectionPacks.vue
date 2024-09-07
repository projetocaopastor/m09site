<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { cards } from "../../utils/packs";

const router = useRouter();

onMounted(() => {
  console.log(router.getRoutes());
});
</script>

<template>
  <v-container class="pb-16 pt-8" fluid id="packs">
    <v-row justify="center">
      <v-col cols="12">
        <div class="d-flex justify-center mb-2">
          <span class="text-h4 text-md-start text-center">
            Adquira os
            <span class="text-yellow-darken-3"> módulos </span>
            separadamente em pacotes
          </span>
        </div>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="6"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div class="d-flex justify-center">
          <div class="sale-card" :class="`sale-card-${index + 1}`">
            <div class="package-icon-content">
              <!-- <v-badge hide content="" color="yellow-darken-1">
              </v-badge> -->
              <v-icon :icon="card.icon" size="80" color="yellow-darken-3" />
            </div>
            <div class="text-h6 font-weight-medium text-center">
              {{ card.title }}
            </div>

            <div>
              <v-btn
                color="yellow-darken-3"
                text="Saiba mais"
                variant="outlined"
                class="mb-1"
                target="_blank"
                :to="{
                  name: '/curso/[curso]',
                  params: { curso: card.id },
                }"
                :id="`${card.id}-saiba-mais-btn`"
              ></v-btn>
              <!-- <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    v-bind="activatorProps"
                    color="yellow-darken-3"
                    text="Saiba mais"
                    variant="outlined"
                    class="mb-1"
                  ></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-card-title class="text-yellow-darken-3 pb-0">
                      {{ card.title }}
                    </v-card-title>

                    <v-card-text v-html="card.description"> </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Fechar"
                        color="yellow-darken-3"
                        variant="outlined"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog> -->
            </div>
            <!-- 
            <div class="package-discount text-center">
              {{ card.discount }}
            </div> -->
            <div class="text-center d-flex align-center ga-1">
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
              à vista
              <span class="text-yellow-darken-2 font-weight-bold">
                {{ card.fullPrice }}
              </span>
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
              <!-- <hr class="my-3" />
              <div class="d-flex ga-1">
                <v-icon icon="mdi-package" color="yellow-darken-3" />
                <span>
                  {{ card.extraBenefit }}
                </span>
              </div> -->
            </div>
            <a
              class="sale-btn"
              :href="card.link"
              target="_blank"
              :id="`${card.id}-anchor`"
            >
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

.sale-card-1::after {
  background-color: #001a33;
}

.sale-card-2::after {
  background-color: #002b4f;
}

.sale-card-3::after {
  background-color: #00355f;
}

.sale-card-4::after {
  background-color: #004070;
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
