<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { VForm } from "vuetify/components/VForm";

const state = ref({
  name: null,
  email: null,
  phone: null,
});

const requiredValidator = (val: any) => {
  if (val === null) {
    return "Este campo é obrigatório.";
  }
  return true;
};

const emailValidator = (val: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!val) {
    return "Este campo é obrigatório.";
  } else if (!emailRegex.test(val)) {
    return "Por favor, insira um e-mail válido.";
  }
  return true;
};

const submitForm = async () => {
  const formUrl = "https://docs.google.com/spreadsheets/d/SUA_PLANILHA_ID/edit"; // Substitua pela URL do seu Google Apps Script

  try {
    const response = await axios.post(formUrl, {
      name: state.value.name,
      email: state.value.email,
      phone: state.value.phone,
    });

    if (response.data.result === "success") {
      alert("Formulário enviado com sucesso!");
      // Limpar os campos do formulário
      state.value.name = null;
      state.value.email = null;
      state.value.phone = null;
    }
  } catch (error) {
    alert("Houve um erro ao enviar o formulário.");
    console.error(error);
  }
};
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="yellow-darken-4"
        size="x-large"
        style="box-shadow: 0 0 20px #f57f17"
      >
        ENTRAR NA LISTA DE ESPERA
      </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        title="Preencha seus dados"
        style="border: 1px solid #f57f1780; border-radius: 12px"
      >
        <v-card-text>
          <VForm @submit.prevent>
            <v-text-field
              v-model="state.name"
              label="Nome completo"
              maxlength="50"
              :rules="[requiredValidator]"
              class="mb-1"
            ></v-text-field>

            <v-text-field
              v-model="state.email"
              label="E-mail"
              class="mb-1"
              :rules="[requiredValidator, emailValidator]"
              maxlength="50"
            ></v-text-field>

            <v-text-field
              v-model="state.phone"
              label="Telefone"
              v-mask="'(##) # ####-####'"
              class="mb-2"
              :rules="[requiredValidator]"
            ></v-text-field>

            <v-btn
              color="yellow-darken-4"
              size="x-large"
              style="box-shadow: 0 0 12px #f57f17"
              block
              class="mb-4"
              type="submit"
            >
              GARANTIR MINHA VAGA
            </v-btn>
          </VForm>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
