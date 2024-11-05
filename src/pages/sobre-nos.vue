<template>
  <div class="pdf-container">
    <object
      data="src/assets/matilha09instrutor.pdf"
      width="100%"
      height="100%"
    >
      <p>
        Seu navegador não suporta visualização de PDFs.
        <a href="src/assets/matilha09instrutor.pdf" target="_blank"
          >Clique aqui para abrir o PDF em uma nova aba.</a
        >
      </p>
    </object>
  </div>
</template>

<style>
.pdf-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.footer,
.header,
header,
footer {
  display: none;
}

.v-main {
  padding-top: 0 !important;
}
</style>
