<script setup>
import { ref } from "vue";
let showComicImg = ref(true);
function toggleImg() {
  this.showComicImg = !this.showComicImg;
}
</script>

<template>
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
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
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
                group leader at the Berlin Institute for Medical Systems Biology
                (BIMSB) at the MDC. We apply single cell genomic technologies to
                biomedical and translational problems. My lab’s research broadly
                aims to (1) develop new and innovative single cell technologies
                that combine experimental and computational methods to explore
                germline and somatic genetic variation with a new lens, and (2)
                apply these methods to investigate how genetic mutations arise
                in our cells and tissues, how they impact cell states and
                functions, and how they contribute to human health and disease.
                I love finding new applications, building strong collaborations
                and pushing the edge of discovery. I also love yoga and
                mountains. Happy research!
              </p>
              <p class="text-center">
                <a href="#" class="p-2"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    class="team-contact-icon"
                /></a>
                <a href="#" class="p-2"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    class="team-contact-icon"
                /></a>
                <a href="#" class="p-2"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    class="team-contact-icon"
                /></a>
                <a href="#" class="p-2"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    class="team-contact-icon"
                /></a>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordion-team"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordion-team"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  height: 6rem;
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
  --bs-accordion-active-bg: #bcf6efa1;
}

.accordion-button:focus {
  z-index: 3;
  border-color: #fff !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #fff !important;
}
.team-contact-icon {
  height: 2rem;
  padding: 0.2rem;
  margin: 0.5rem;
  color: #2588c5ed;
}
.team-contact-icon:hover {
  color: #1b618d98;
}
</style>
