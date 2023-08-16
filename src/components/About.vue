<script setup>
</script>
<template>
  <section class="pb-5">
    <div class="container-md pt-5 pb-5" id="about">
      <div class="headline-wrapper">
        <h1 class="text-center">About our Lab</h1>
        <p class="lead text-center"><i>Key features of our laboratory</i></p>
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
    <div class="container-md pb-5">
      <div class="row justify-content-center gap-5">
        <div class="col-lg-5 shadow-sm" style="padding: 0;"><div class="card">
        <div class="card-body">
          <p class="card-title">
            <div class="card-title-wrapper"><font-awesome-icon icon="fa-solid fa-dna" class="card-icon"/> <h2 style="margin-bottom: 0rem;">Science</h2></div>            
          </p>
          <p class="card-text">
            We push the boundaries of whats known through the developement and
            application of single-cell technologies in translational medicine.
            We believe in good scientific practice and enforce open and
            transparent workflows in all aspects of our work.
          </p>
        </div>
      </div></div>
      <div class="col-lg-5 shadow-sm" style="padding: 0;"><div class="card">
        <div class="card-body">
          <p class="card-title">
            <div class="card-title-wrapper"><font-awesome-icon icon="fa-solid fa-heart" class="card-icon"/><h2 style="margin-bottom: 0rem;">Passion</h2></div>            
          </p>
          <p class="card-text">
            We love what we do and comprise an interdisciplinary team of
              highly motivated young scientists from all around the world. While
              doing great science together is a top priority, it is just as
              important to us to look after each other and create an inclusive
              work environment everybody feels welcomed in.
          </p>
        </div>
      </div></div>  
      <div class="col-lg-5 shadow-sm" style="padding: 0;"><div class="card">
        <div class="card-body">
          <p class="card-title">
            <div class="card-title-wrapper"><font-awesome-icon icon="fa-solid fa-bullhorn" class="card-icon"/> <h2 style="margin-bottom: 0rem;">Communication</h2></div>            
          </p>
          <p class="card-text">
            Communication inside and outside of the scientific community
              nowadays is more important than ever with people questioning the
              scientific method and misinformation on the rise. We aim to
              contribute to a better society by publishing and discussing our
              research through scientific journals as well as social media and
              hope to inspire future generations of scientists. Follow us on our
              Instagram and Twitter!
          </p>
        </div>
      </div></div>
        <div class="col-lg-5 shadow-sm" style="padding: 0;"><div class="card">
        <div class="card-body">
          <p class="card-title">
            <div class="card-title-wrapper"><font-awesome-icon icon="fa-solid fa-microchip" class="card-icon"/> <h2 style="margin-bottom: 0rem;">Computation</h2></div>            
          </p>
          <p class="card-text">
            We enforce transparency and facilitate coorperation by making our
              pipelines and code publicly available through our github
              depository. Visit our resource section to learn more about our
              code depository and usefull links to tutorials to help you get
              started with your single cell analysis! If you have questions
              don't hesitate to contact us!
          </p>
        </div>
      </div>
    </div>
    
            
      </div>          
      </div>

  </section>
</template>
<style scoped>
.card {
  _background-color: rgb(161, 250, 235);
  background-color: #53aecc;
  _opacity: 0.9;
  border: none;
  box-sizing: border-box;
  _box-shadow: 3px 3px #059a72;
  height: 100%;
  width: 100%;
  _padding: 0.2rem;
  _color: #f9fed9;
  color: white;
}

.card:hover {
  _background-color: aquamarine;
  _background-color: rgb(161, 250, 235);
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
  color: #118AB2;
}

.card-text {
  padding: 0.5rem;
}

h2 {
  font-size: 2.5rem;
  color: white;
}

section {
  background-image: linear-gradient( #1a759f, #168AAD);
  }
.headline-wrapper {
  _color: #f9fed9;
color: white;
text-shadow: 2px 2px #345057;
}

.textblock-wrapper {
  _color: #f9fed9;
  color: white;
}

</style>
