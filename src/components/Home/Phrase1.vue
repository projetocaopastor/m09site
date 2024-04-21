<template>
    <v-row class="bg-phrase1">
        <v-col class="py-12 elevation-24">
            <span class="text-md-h5 text-red phrase-1">
                Você só faz o que você treina.
            </span>
        </v-col>
    </v-row>
</template>

<style scoped>
.bg-phrase1 {
    /* background-image: radial-gradient(#8b8a8a30, #3e3e3e30), url("src/assets/logo-matilha-bg.jpg"); */
    background-color: black;
    background-image: url("@/assets/matilha-1.jpg");
    background-position: center 70%;
    overflow: hidden;
}

.phrase-1 {
    margin-left: 90px;
    padding: 12px;
    background: #ff000010;
    border-radius: 18px;
    animation: phrase-1-shadow-blink 2s linear infinite alternate;
}

@keyframes phrase-1-shadow-blink {
    from {
        box-shadow: 0 0 12px 6px #ff000030;
    }

    to {
        box-shadow: 0 0 10px 5px #ff000010;
    }
}

@media (max-width: 1280px) {
    .bg-phrase1 {
        background-position-x: 80%;
    }

    .phrase-1 {
        background: rgba(0, 0, 0, 0.83);
    }
}
</style>