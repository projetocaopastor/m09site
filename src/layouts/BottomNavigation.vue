<template>
    <div class="bottom-navigation bg-grey-darken-4">
        <a class="sale-btn sale-btn-bottom" href="http://www.google.com" target="_blank">
            <span>
                MATRICULE-SE
            </span>
            <v-icon icon="mdi-arrow-right-thin-circle-outline" class="bottom-icon"/>
        </a>
    </div>
</template>

<style>
.bottom-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 48px;
    z-index: 3;
    border-top: 2px solid #F57F17;
}

.bottom-icon {
    position: absolute;
    right: 20px;
}
</style>