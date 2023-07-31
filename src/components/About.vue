<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as bootstrap from "bootstrap";

import { onMounted } from "vue";

onMounted(() => {
  const myCarouselElement = document.querySelector("#carouselExample");

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
  });
  console.log("Is mounted");
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
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p class="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              atque excepturi consectetur hic. Quae odio vel, nostrum ex porro
              quod fuga! Maxime deleniti iure, culpa deserunt laboriosam eaque
              architecto dolore?
            </p>
          </div>

          <div class="carousel-item">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              atque excepturi consectetur hic. Quae odio vel, nostrum ex porro
              quod fuga! Maxime deleniti iure, culpa deserunt laboriosam eaque
              architecto dolore?
            </p>
          </div>

          <div class="carousel-item">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              atque excepturi consectetur hic. Quae odio vel, nostrum ex porro
              quod fuga! Maxime deleniti iure, culpa deserunt laboriosam eaque
              architecto dolore?
            </p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
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
#carouselExample {
  background-color: hotpink;
  height: 500px;
}
</style>
