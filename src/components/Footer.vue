<template>
  <footer>
    <div class="container-fluid" id="footer">
      <div class="row">
        <div class="col align-self-center" id="footer-wrapper">
          <p class="text-center">Sanders Lab 2023</p>
          <p class="text-center">Impressum / Datenschutzerklärung</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  height: 10rem;
  _background-color: hotpink;
  _background-color: lightblue;
  background-color: white;
}

#footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.row {
  height: 100%;
}
p {
  _color: #ddf1f3;
  _color: white;
}
</style>
