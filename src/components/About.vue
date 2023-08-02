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
});
</script>
<template>
  <section>
    <div class="container-md">
      <div class="headline-wrapper">
        <h1 class="text-center">ABOUT OUR LAB</h1>
        <p class="lead text-center">Key features of our laboratory</p>
      </div>
      <div class="textblock-wrapper">
        <p>
          During normal development and ageing the cells in our body can acquire
          somatic mutations through diverse genome instability processes. These
          mutations are propagated and selected for over time. As consequence,
          we are actually a mosaic of unique somatic cell genomes, where any
          given cell in a tissue may be genetically distinct from another.
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
          profiles, epigenetic programs and transcriptional outputs, and
          directly test the functional outcomes of somatic mutations to
          understand how they contribute to tissue homeostasis and human
          disease.
        </p>
      </div>
    </div>
    <div class="container-md">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <p class="card-title">
            <div class="card-title-wrapper"><font-awesome-icon icon="fa-solid fa-dna" class="card-icon"/> <h2 style="margin-bottom: 0rem;">Science</h2></div>            
          </p>
          <p class="card-text text-center">
            We push the boundaries of whats known through the developement and
            application of single-cell technologies in translational medicine.
            We believe in good scientific practice and enforce open and
            transparent workflows in all aspects of our work.
          </p>
        </div>
      </div>
    </div>

    <div class="container-md">
      <div id="carouselExample" class="carousel carousel-dark slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2 class="text-center">Science</h2>
            <p class="text-center carousel-text">
              We push the boundaries of whats known through the developement and
              application of single-cell technologies in translational medicine.
              We believe in good scientific practice and enforce open and
              transparent workflows in all aspects of our work.
            </p>
          </div>

          <div class="carousel-item">
            <h2 class="text-center">Passion</h2>
            <p class="text-center carousel-text">
              We love what we do and comprise an interdisciplinary team of
              highly motivated young scientists from all around the world. While
              doing great science together is a top priority, it is just as
              important to us to look after each other and create an inclusive
              work environment everybody feels welcomed in.
            </p>
          </div>
          <div class="carousel-item">
            <h2 class="text-center">Computation</h2>
            <p class="text-center carousel-text">
              We enforce transparency and facilitate coorperation by making our
              pipelines and code publicly available through our github
              depository. Visit our resource section to learn more about our
              code depository and usefull links to tutorials to help you get
              started with your single cell analysis! If you have questions
              don't hesitate to contact us!
            </p>
          </div>
          <div class="carousel-item">
            <h2 class="text-center">Communication</h2>
            <p class="text-center carousel-text">
              Communication inside and outside of the scientific community
              nowadays is more important than ever with people questioning the
              scientific method and misinformation on the rise. We aim to
              contribute to a better society by publishing and discussing our
              research through scientific journals as well as social media and
              hope to inspire future generations of scientists. Follow us on our
              Instagram and Twitter!
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
.card {
  background-color: rgb(161, 250, 235);
  opacity: 0.9;
  border: none;
  box-sizing: border-box;
}

.card:hover {
  border: 2px solid blue;
}
.card-title-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon {
  height: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 50%;
  color: #1b618d;
}

h2 {
  font-size: 2.5rem;
  color: #1b618d;
}
</style>
