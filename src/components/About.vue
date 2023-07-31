<script setup>
// import bootstrap from "bootstrap";

const aboutCarousel = document.querySelector("#about-carousel");
const carousel = new bootstrap.Carousel(aboutCarousel, {
  interval: 2000,
  touch: false,
});
</script>
<template>
  <section>
    <div class="container-fluid">
      <h1 class="text-center">ABOUT OUR LAB</h1>
      <p class="lead text-center">Key features of our laboratory</p>
      <p>
        During normal development and ageing the cells in our body can acquire
        somatic mutations through diverse genome instability processes. These
        mutations are propagated and selected for over time. As consequence, we
        are actually a mosaic of unique somatic cell genomes, where any given
        cell in a tissue may be genetically distinct from another.
      </p>
      <p>
        Understanding how somatic mosaicism develops and evolves are central
        questions in the Sanders laboratory. With a focus on the genome, we
        develop and apply innovative single cell methods that explore the
        mechanisms of genome instability to understand how mutations arise and
        change cellular phenotypes in normal human tissues and disease states.
      </p>
      <p>
        By integrating multi-omic experimental and computational readouts, we
        ask how individual cells differ in terms of their unique genomic
        profiles, epigenetic programs and transcriptional outputs, and directly
        test the functional outcomes of somatic mutations to understand how they
        contribute to tissue homeostasis and human disease.
      </p>
    </div>
    <div class="container-fluid">
      <div id="about-carousel" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* h1 {
  text-align: center;
} */
</style>
