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
  description: string;
  icon: string;
  redirect: string;
}

const cards = ref<Card[]>([
  {
    title: "Pacote 1 - Anatomia do combate",
    icon: "mdi-skull-crossbones",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 799,00",
    installmentPrice: "R$ 59,78",
    fullPrice: "R$ 599,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit: "Acesso aos módulos Mentalidade e Anatomia do Combate.",
    link: "https://pay.hotmart.com/G93958528U",
    redirect: "https://projetocaopastor.github.io/anatomiadocombate.pdf",
    description: `Como se comportar em uma crise? Como não se desesperar? Como treinar para ser funcional em um conflito. Entenda os impactos legais que uma crise pode gerar, nesse curso, ensino para o aluno sobre legalidades, riscos, analise risco bem como a fisiologia impacta no combatente. Bem como ensinamos o aluno formas de inocular o estresse. Um conhecimento imprescindível para quem trabalha em condição de crise ou deseja trabalhar. Um operador não deveria ficar sem esses conhecimentos. <br><br> <strong class="text-yellow-darken-3">Módulos:</strong> Mentalidade e Anatomia do Combate.`,
  },
  {
    title: "Pacote 2 - Conduta Inteligente",
    icon: "mdi-eye-check",
    discount: "20% de desconto por tempo limitado",
    originalPrice: "R$ 699,00",
    installmentPrice: "R$ 49,80",
    fullPrice: "R$ 499,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Negação - Criminologia, Conduta Defensiva, Escolhi Reagir (Mentalidade em momentos de crise) e Legítima Defesa.",
    link: "https://pay.hotmart.com/H94599252R",
    redirect: "https://projetocaopastor.github.io/condutainteligente.pdf",
    description: `Desenvolva uma mentalidade de segurança proativa com o curso 'Conduta Inteligente'. Através de instruções especializadas, você aprenderá a melhorar sua percepção de risco e a se antecipar a crises de segurança, como assaltos. Explore a criminologia, analise os riscos e compreenda a legislação de legítima defesa para agir de forma preventiva em todas as situações. Busque no Google por palavras-chave como segurança, proteção e caveira para encontrar nosso produto e garantir sua tranquilidade. <br><br> <strong class="text-yellow-darken-3">Módulos:</strong> Negação - Criminologia, Conduta Defensiva, Escolhi Reagir (Mentalidade em momentos de crise) e Legítima Defesa.`,
  },
  {
    title: "Pacote 3 - Operador de crise",
    icon: "mdi-target-account",
    discount: "15% de desconto por tempo limitado",
    originalPrice: "R$ 1299,00",
    installmentPrice: "R$ 99,70",
    fullPrice: "R$ 999,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos APH, Defesa Pessoal, Instrução de Tiro, Conduta Armada, Anatomia do Combate e Legítima Defesa.",
    link: "https://pay.hotmart.com/W93957364R",
    redirect: "https://projetocaopastor.github.io/operadordecrise.pdf",
    description: `Torne-se um OPERADOR com o curso 'Operador de Crise'. Aprenda técnicas avançadas DE DEFESA, atendimento pré-hospitalar, e o uso de armas de fogo com segurança e precisão. Desenvolva habilidades para enfrentar situações de risco e garantir a proteção ativa de sua vida e das pessoas ao seu redor.  <br><br> <strong class="text-yellow-darken-3">Módulos:</strong> APH, Defesa Pessoal, Instrução de Tiro, Conduta Armada, Anatomia do Combate e Legítima Defesa.`,
  },
  {
    title: "Pacote 4 - Protetor",
    icon: "mdi-security",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 1099,00",
    installmentPrice: "R$ 79,54",
    fullPrice: "R$ 797,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Defesa Passiva, Mentalidade, Proteção Residencial, Proteção da Informação e Conduta Defensiva.",
    link: "https://pay.hotmart.com/V94796189N?off=41hagyaa",
    redirect: "https://projetocaopastor.github.io/protetor.pdf",
    description: `Descubra como proteger você e sua família com o curso 'Conduta Defensiva'. Aprenda a desenvolver uma mentalidade de segurança, proteger sua residência e informações pessoais, e adotar uma conduta defensiva eficaz. Ideal para quem busca uma abordagem preventiva e segura para proteger o que mais importa.<br><br> <strong class="text-yellow-darken-3">Módulos:</strong> Defesa Passiva, Mentalidade, Proteção Residencial, Proteção da Informação e Conduta Defensiva.`,
  },
  {
    title: "Pacote 5 - Criminologia",
    icon: "mdi-security",
    discount: "10% de desconto por tempo limitado",
    originalPrice: "R$ 249,00",
    installmentPrice: "R$ 13,97",
    fullPrice: "R$ 140,00",
    benefits: [
      "Garantia de 7 dias",
      "Assista pelo celular e computador",
      "Acesso por 1 ano",
    ],
    extraBenefit:
      "Acesso aos módulos Defesa Passiva, Mentalidade, Proteção Residencial, Proteção da Informação e Conduta Defensiva.",
    link: "https://pay.hotmart.com/X94711258W",
    redirect: "https://projetocaopastor.github.io/criminologia.pdf",
    description: `Um curso voltado para você entender como o crime realmente funciona. Pois ele dá gradativamente o tema, nossos instrutores também tratam o assunto com a expertise de quem testou as teorias no campo pratico. Esse conteúdo é indicado para todos aqueles que querem e precisam entender como funciona o crime, bem como a tomada de decisão de um criminoso.<br><br> <strong class="text-yellow-darken-3">Módulos:</strong> Negação - Criminologia e Mentalidade.`,
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
            <span class="text-yellow-darken-3"> módulos </span>
            separadamente em pacotes
          </span>
        </div>
      </v-col>
      <v-col cols="12" md="3" v-for="(card, index) in cards" :key="index">
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
                :href="card.redirect"
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
