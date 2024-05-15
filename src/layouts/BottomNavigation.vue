<template>
    <div class="bottom-navigation bg-grey-darken-4">
        <a class="sale-btn-bottom" href="http://www.google.com" target="_blank">
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

.sale-btn-bottom {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #F57F17;
    border-radius: 2px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1.3rem;
    box-shadow: 0 0 8px 1px #F57F17;
}

@media (min-width: 800px) {
    .sale-btn-bottom {
        width: 50%
    }
}

</style>