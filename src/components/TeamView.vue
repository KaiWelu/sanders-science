<script setup>
import { ref } from "vue";
let showComicImg = ref(true);
function toggleImg() {
  this.showComicImg = !this.showComicImg;
  console.log("Hallo");
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
                  <div class="col-auto">
                    <h3 class="mb-0">Dr. Ashley Sanders</h3>
                    <p class="text-body-secondary mb-0">
                      Principal Investigator
                    </p>
                  </div>
                  <!-- <div class="col-auto">
                    <a href="#"
                      ><font-awesome-icon
                        icon="fa-solid fa-envelope"
                        class="nav-icon"
                    /></a>

                  </div> -->
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
              <h3>Genomic Instability and Somatic Mosacisim</h3>
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
              <p></p>
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

    <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <div class="container text-center">
              <img
                class="comic-pic"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
              />
              <h3>Dr. Ashley Sanders</h3>
              <p class="text-body-secondary">Principal Investigator</p>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <h4>Genomic Instability and Somatic Mosacisim</h4>
            <p>
              Hi and welcome! I’m the Sanders Lab head and an independent group
              leader at the Berlin Institute for Medical Systems Biology (BIMSB)
              at the MDC. We apply single cell genomic technologies to
              biomedical and translational problems. My lab’s research broadly
              aims to (1) develop new and innovative single cell technologies
              that combine experimental and computational methods to explore
              germline and somatic genetic variation with a new lens, and (2)
              apply these methods to investigate how genetic mutations arise in
              our cells and tissues, how they impact cell states and functions,
              and how they contribute to human health and disease. I love
              finding new applications, building strong collaborations and
              pushing the edge of discovery. I also love yoga and mountains.
              Happy research!
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <div class="container text-center">
              <img
                class="comic-pic"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
              />
              <h3>Dr. Ashley Sanders</h3>
              <p class="text-body-secondary">Principal Investigator</p>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <h4>Genomic Instability and Somatic Mosacisim</h4>
            <p>
              Hi and welcome! I’m the Sanders Lab head and an independent group
              leader at the Berlin Institute for Medical Systems Biology (BIMSB)
              at the MDC. We apply single cell genomic technologies to
              biomedical and translational problems. My lab’s research broadly
              aims to (1) develop new and innovative single cell technologies
              that combine experimental and computational methods to explore
              germline and somatic genetic variation with a new lens, and (2)
              apply these methods to investigate how genetic mutations arise in
              our cells and tissues, how they impact cell states and functions,
              and how they contribute to human health and disease. I love
              finding new applications, building strong collaborations and
              pushing the edge of discovery. I also love yoga and mountains.
              Happy research!
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <div class="container text-center">
              <img
                class="comic-pic"
                src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light"
              />
              <h3>Dr. Ashley Sanders</h3>
              <p class="text-body-secondary">Principal Investigator</p>
            </div>
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <h4>Genomic Instability and Somatic Mosacisim</h4>
            <p>
              Hi and welcome! I’m the Sanders Lab head and an independent group
              leader at the Berlin Institute for Medical Systems Biology (BIMSB)
              at the MDC. We apply single cell genomic technologies to
              biomedical and translational problems. My lab’s research broadly
              aims to (1) develop new and innovative single cell technologies
              that combine experimental and computational methods to explore
              germline and somatic genetic variation with a new lens, and (2)
              apply these methods to investigate how genetic mutations arise in
              our cells and tissues, how they impact cell states and functions,
              and how they contribute to human health and disease. I love
              finding new applications, building strong collaborations and
              pushing the edge of discovery. I also love yoga and mountains.
              Happy research!
            </p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.accordion-item {
  border: none;
}

.real-pic {
  border-radius: 50%;
  height: 5rem;
}

.collapse-img {
  border-radius: 5%;
  _color: #1b618d;
  _border: solid 2px grey;
  _box-shadow: 3px 3px #1b618d;
  height: 50%;
}
.accordion-body {
}
</style>
