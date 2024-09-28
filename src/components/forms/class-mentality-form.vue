<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { VForm } from "vuetify/components/VForm";

const state = ref({
  name: null,
  email: null,
  phone: null,
});

const formSended = ref(false);
const dialogIsVisible = ref(false);
const loading = ref(false);

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
  const formUrl =
    "https://w8mw3p740l.execute-api.us-east-1.amazonaws.com/StageAula/CMAula";
  loading.value = true;

  try {
    const response = await axios.post(
      formUrl,
      {
        name: state.value.name,
        email: state.value.email,
        phone: state.value.phone,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Origin: "https://www.projetocaopastor.com.br",
        },
      }
    );

    if (response.data.result === "success") {
      state.value.name = null;
      state.value.email = null;
      state.value.phone = null;
      formSended.value = true;

      window.location.href = "https://chat.whatsapp.com/GBxoxS9VVfY728NXjkXiM4";
    }
  } catch (error) {
    alert("Houve um erro ao enviar o formulário.");
    console.error(error);
  }
  loading.value = false;
  dialogIsVisible.value = false;
};
</script>

<template>
  <v-dialog max-width="500" v-model="dialogIsVisible">
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
          <VForm @submit.prevent v-if="!formSended">
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
              @click="submitForm()"
              :loading="loading"
            >
              GARANTIR MINHA VAGA
            </v-btn>
          </VForm>
          <div v-else class="d-flex w-100 align-center flex-column">
            <v-icon
              icon="mdi-check-circle-outline"
              size="150"
              color="success"
            />
            <span class="font-weight-light" style="font-size: 1rem"
              >Cadastrado realizado com sucesso</span
            >
            <v-btn
              @click="dialogIsVisible = false"
              class="mt-4"
              block
              color="yellow-darken-4"
              variant="outlined"
              >Fechar</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
