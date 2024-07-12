<template>
    <v-container class="mb-3 d-flex justify-center align-center py-16 sale-content" fluid>
        <div class="sale-card">
            <div class="package-icon-content">
                <v-icon icon="mdi-package-variant-closed" size="80" color="yellow-darken-3" />
            </div>
            <div>
                Turma Master
            </div>
            <div class="package-discount text-center">
                20% de desconto por tempo limitado
            </div>
            <div class="text-center d-flex align-center ga-1 pt-2">
                De
                <div class="position-relative">
                    <span class="text-h5 line-through text-red">R$ 1200,00</span>
                </div>
                por
            </div>
            <div class="text-center">
                <div class="d-flex align-center ga-1">
                    12x
                    <span class="text-h4 text-yellow-darken-3">R$ 79,90</span>
                </div>
                à vista R$ 1430,40
            </div>
            <div>
                <div class="d-flex ga-1">
                    <v-icon icon="mdi-check" color="yellow-darken-3" />
                    Grupo exclusivo para alunos
                </div>
                <div class="d-flex ga-1">
                    <v-icon icon="mdi-check" color="yellow-darken-3" />
                    Garantia de 7 dias
                </div>
                <div class="d-flex ga-1">
                    <v-icon icon="mdi-check" color="yellow-darken-3" />
                    Assista pelo celular e computador
                </div>
                <div class="d-flex ga-1">
                    <v-icon icon="mdi-check" color="yellow-darken-3" />
                    Acesso a todos os módulos
                </div>
                <div class="d-flex ga-1">
                    <v-icon icon="mdi-check" color="yellow-darken-3" />
                    Acesso por 1 ano
                </div>
                <div class="d-flex ga-1 mt-4">
                    <v-icon icon="mdi-star" color="yellow-darken-3" />
                    Acesso a todos os módulos
                </div>
            </div>
            <a class="sale-btn" href="http://www.google.com" target="_blank">
                <span>
                    MATRICULE-SE
                </span>
                <v-icon icon="mdi-arrow-right-thin-circle-outline" class="bottom-icon"/>
            </a>
            <div class="mt-2">
                <v-icon icon="mdi-lock" /> Ambiente 100% seguro
            </div>
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
    height: 630px;
    position: relative;
    /* Adicione esta linha */
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
    background-color: #004c83;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
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
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
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

.sale-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #F57F17;
    border-radius: 2px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.3rem;
    box-shadow: 0 0 5px 1px #F57F17;
    margin-top: 20px;
}

.bottom-icon {
    position: absolute;
    right: 20px;
}

</style>