<script setup>
import { ref } from "vue";
let showComicImg = ref(true);
function toggleImg() {
  this.showComicImg = !this.showComicImg;
}
</script>

<template>
  <section>
    <div class="container-md">
      <div class="headline-wrapper">
        <h1>Team</h1>
        <p class="lead"><i>The ones who run this laboratory</i></p>
      </div>
      <div class="textblock-wrapper">
        <div class="accordion" id="accordion-team">
          <div class="accordion-item">
            <div class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                @click="toggleImg()"
              >
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <img
                        v-if="showComicImg"
                        class="comic-pic"
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale"
                      />
                      <img
                        v-else
                        src="https://www.sanders.science/ashley.jpg"
                        class="img-fluid real-pic"
                        alt="Ashley Sanders"
                      />
                    </div>
                    <div class="col-auto pt-2">
                      <h3 class="mb-0">Dr. Ashley Sanders</h3>
                      <p class="text-body-secondary mb-0">
                        Principal Investigator
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion-team"
            >
              <div class="accordion-body">
                <h3 class="text-center mt-2 mb-3">
                  Genomic Instability and Somatic Mosacisim
                </h3>
                <p>
                  Hi and welcome! I’m the Sanders Lab head and an independent
                  group leader at the Berlin Institute for Medical Systems
                  Biology (BIMSB) at the MDC. We apply single cell genomic
                  technologies to biomedical and translational problems. My
                  lab’s research broadly aims to (1) develop new and innovative
                  single cell technologies that combine experimental and
                  computational methods to explore germline and somatic genetic
                  variation with a new lens, and (2) apply these methods to
                  investigate how genetic mutations arise in our cells and
                  tissues, how they impact cell states and functions, and how
                  they contribute to human health and disease. I love finding
                  new applications, building strong collaborations and pushing
                  the edge of discovery. I also love yoga and mountains. Happy
                  research!
                </p>
                <p class="text-center">
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-solid fa-envelope"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-orcid"
                      class="team-contact-icon"
                  /></a>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="heading-two">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-two"
                aria-expanded="false"
                aria-controls="collapse-two"
                @click="toggleImg()"
              >
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <img
                        v-if="showComicImg"
                        class="comic-pic"
                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Squint&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Pale"
                      />
                      <img
                        v-else
                        src="https://www.sanders.science/oliver.jpeg"
                        class="img-fluid real-pic"
                        alt="Ashley Sanders"
                      />
                    </div>
                    <div class="col-auto pt-2">
                      <h3 class="mb-0">Oliver Dyck Dionisi</h3>
                      <p class="text-body-secondary mb-0">
                        Technical Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div
              id="collapse-two"
              class="accordion-collapse collapse"
              aria-labelledby="heading-two"
              data-bs-parent="#accordion-team"
            >
              <div class="accordion-body">
                <h3 class="text-center mt-2 mb-3">Technical Assistant</h3>
                <p>
                  General lab manager and hands-on work, supporting the single
                  cell research area. Happy research!
                </p>
                <p class="text-center">
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-solid fa-envelope"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-orcid"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-linkedin"
                      class="team-contact-icon"
                  /></a>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="heading-three">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-three"
                aria-expanded="false"
                aria-controls="collapse-three"
                @click="toggleImg()"
              >
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <img
                        v-if="showComicImg"
                        class="comic-pic"
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
                      />
                      <img
                        v-else
                        src="https://www.sanders.science/martina1.png"
                        class="img-fluid real-pic"
                        alt="Ashley Sanders"
                      />
                    </div>
                    <div class="col-auto pt-2">
                      <h3 class="mb-0">Martina Macino</h3>
                      <p class="text-body-secondary mb-0">PhD Student</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div
              id="collapse-three"
              class="accordion-collapse collapse"
              aria-labelledby="heading-three"
              data-bs-parent="#accordion-team"
            >
              <div class="accordion-body">
                <h3 class="text-center mt-2 mb-3">
                  Mutational Burden and Somatic Mosaicism in Health and Disease
                </h3>
                <p>
                  I’m a new PhD student and my research interest is in Molecular
                  Biology, Cellular Biology and in particular in the deviation
                  of Cellular Mechanisms from healthy to disease. I’m currently
                  looking at Somatic Mosaicism and Genomic Mutations at a
                  single-cell level in autoinflammatory disease, in
                  collaboration with clinicians. Happy research!
                </p>
                <p class="text-center">
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-solid fa-envelope"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-orcid"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-researchgate"
                      class="team-contact-icon"
                  /></a>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" id="heading-four">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-four"
                aria-expanded="false"
                aria-controls="collapse-four"
                @click="toggleImg()"
              >
                <div class="container-fluid">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <img
                        v-if="showComicImg"
                        class="comic-pic"
                        src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Deer&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                      />
                      <img
                        v-else
                        src="https://www.sanders.science/kiwi.png"
                        class="img-fluid real-pic"
                        alt="Ashley Sanders"
                      />
                    </div>
                    <div class="col-auto pt-2">
                      <h3 class="mb-0">Patrick Weidner</h3>
                      <p class="text-body-secondary mb-0">PhD Student</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div
              id="collapse-four"
              class="accordion-collapse collapse"
              aria-labelledby="heading-four"
              data-bs-parent="#accordion-team"
            >
              <div class="accordion-body">
                <h3 class="text-center mt-2 mb-3">Somatic Mosaicism in IBD</h3>
                <p>
                  Hi there! I'm a young scientist with a general interest in
                  Molecular Biology, Genetics and Autoimmunity. I recently
                  joined the Sanders Lab at the Max-Delbrück-Center for
                  Molecular Medicine (MDC) at the Berlin Institute for Medical
                  Systems Biology (BIMSB) as a PhD student in the "Single cell
                  approaches for personalized medicine" focus group. I
                  investigate how somatic mosaicism contributes to tissue
                  homeostasis and human disease. Happy research!
                </p>
                <p class="text-center">
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-solid fa-envelope"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-orcid"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-linkedin"
                      class="team-contact-icon"
                  /></a>
                  <a href="#" class="p-2"
                    ><font-awesome-icon
                      icon="fa-brands fa-researchgate"
                      class="team-contact-icon"
                  /></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accordion-item {
  border: none;
}
.icon-wrapper {
  position: absolute;
  top: 5.5rem;
  left: 8rem;
}

.accordion-header {
  position: relative;
}
.accordion-header:focus {
  border: none;
  background-color: hotpink;
}

.real-pic {
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
}

.collapse-img {
  border-radius: 5%;
  _color: #1b618d;
  _border: solid 2px grey;
  _box-shadow: 3px 3px #1b618d;
  height: 50%;
}
.accordion-body {
  _background-color: #5bf0d7;
}

.accordion {
  --bs-accordion-active-bg: #5bb8f24d;
}

.accordion-button:focus {
  z-index: 3;
  border-color: #fff !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #fff !important;
}
.team-contact-icon {
  height: 2rem;
  margin: 0.2rem;
  color: #2588c5ed;
}
.team-contact-icon:hover {
  color: #1b618d98;
}
</style>
