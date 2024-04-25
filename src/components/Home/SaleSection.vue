<template>
    <v-container class="mb-3 d-flex justify-center align-center py-16 sale-content" fluid>
        <div class="sale-card">
            opa
        </div>
    </v-container>
</template>

<style>
.sale-card {
    width: 330px;
    height: 400px;
    border: 1px solid red;
    z-index: 1;
}

.sale-content {
    background-image: url("/src/assets/soldier.jpg");
    background-position-y: 12%;
    height: 600px;
    position: relative;
}

.sale-content::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
}
</style>