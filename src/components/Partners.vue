<template>
  <section class="pb-3">
    <div class="container-md pt-5 pb-5">
      <div class="headline-wrapper text-center">
        <h1>Partners and Affiliations</h1>
        <p class="lead"><i>Single cell goes clinical!</i></p>
      </div>
      <div class="textblock-wrapper">
        <!-- <p class="lead text-center">Single cell goes clinical!</p> -->
        <p>
          We are part of the "Single Cell Technologies for Personalized
          Medicine" focus group at the
          <a href="https://www.mdc-berlin.de/bimsb"
            >Berlin Institute for Medical Systems Biology (BIMSB)</a
          >
          of the
          <a href="https://www.mdc-berlin.de/"
            >Max-Delbrück-Centre for Molecular Medicine in the Helmholtz
            Association (MDC)</a
          >
          and cooperate with a multitude of great scientific institutes across
          Berlin.
        </p>
        <p>
          The focus group was jointly launched by the
          <a href="">Berlin Institute of Health (BIH)</a>, the BIMSB, as well as
          the
          <a href="https://www.charite.de/"
            >Charité – Universitätsmedizin Berlin</a
          >
          and aims to use innovative single-cell technologies to answer clinical
          research questions. Together with our colleagues in the
          <a
            href="https://www.mdc-berlin.de/de/news/press/vier-neue-gruppen-nutzen-einzelzellmethoden-fuer-die-medizin"
            >AG Ludwig, AG Grosswendt and AG Haas</a
          >, we started our laboratories in January 2021. Through our Institute
          in the heart of Berlin, we have access to the latest single-cell
          methods and can collaborate with excellent systems biologists.
        </p>
      </div>
      <div class="container-md p-4 mb-3" id="partner-img-wrapper">
        <img
          src="https://www.sanders.science/affiliationsquare.png"
          class="img-fluid"
          alt="partners"
          id="partner-img"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
#partner-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  _background-color: #ffd166;
  border-radius: 5px;
}
#partner-img {
  margin: 0.5rem;
}
.headline-wrapper {
  color: #183153;
}

.textblock-wrapper {
  _color: white;
  color: #183153;
}
a {
  color: #4e96fb;
  text-decoration: none;
}

a:hover {
  color: #f4a460;
  text-decoration: underline;
}

section {
  _background-color: #118ab2;
  background-color: white;
}
</style>
