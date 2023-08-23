<script setup>
import { ref } from "vue";
import teamData from "../assets/data/team.json";

const team = ref(teamData);
</script>

<template>
  <!-- modals are on top level for proper rendering -->
  <div
    v-for="(member, index) in team"
    class="modal fade"
    :id="'modal' + index"
    tabindex="-1"
    aria-labelledby="Ashley Sanders"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close modal-close-button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" class="modal-xmark" />
          </button>
          <div class="row">
            <div class="col-auto">
              <img
                :src="member.realImg"
                :alt="member.name"
                class="photo shadow-lg"
              />
            </div>
            <div class="col-auto">
              <h1 class="modal-title pl-2 pr-2" :id="'modal' + index + index">
                {{ member.name }}
              </h1>
              <p class="text-body-secondary pl-2 pr-2 member-title">
                {{ member.title }}
              </p>
            </div>
          </div>
        </div>
        <div class="modal-content p-4">
          <h2 class="mb-4 text-center">{{ member.headline }}</h2>
          <p>{{ member.text }}</p>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="container-md pt-5 pb-5" id="team">
      <header class="headline-wrapper text-center">
        <h1>Team</h1>
        <p class="lead undertitle-dk">
          <i>The ones who run this laboratory</i>
        </p>
      </header>
      <div class="container-fluid">
        <div class="row row-cols-auto g-3 justify-content-center">
          <div class="col" v-for="(member, index) in team">
            <div class="team-card text-center shadow-sm p-3">
              <button
                data-bs-toggle="modal"
                :data-bs-target="'#' + 'modal' + index"
              >
                <img class="comic-pic" :src="member.comicImg" />
              </button>
              <h3 class="mt-3">{{ member.name }}</h3>
              <p class="text-body-secondary undertitle-dk">
                {{ member.title }}
              </p>
              <p class="text-center mt-3 mb-1">
                <a
                  :href="member.mailAdress"
                  class="p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-if="member.mail"
                  ><font-awesome-icon
                    icon="fa-solid fa-envelope"
                    class="team-contact-icon"
                /></a>
                <a
                  :href="member.orcidLink"
                  class="p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-if="member.orcid"
                  ><font-awesome-icon
                    icon="fa-brands fa-orcid"
                    class="team-contact-icon"
                /></a>
                <a
                  :href="member.linkedInLink"
                  class="p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-if="member.linkedIn"
                  ><font-awesome-icon
                    icon="fa-brands fa-linkedin"
                    class="team-contact-icon"
                /></a>
                <a
                  :href="member.researchGateLink"
                  class="p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-if="member.researchGate"
                  ><font-awesome-icon
                    icon="fa-brands fa-researchgate"
                    class="team-contact-icon"
                /></a>
                <a
                  :href="member.gitHubLink"
                  class="p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-if="member.gitHub"
                  ><font-awesome-icon
                    icon="fa-brands fa-github"
                    class="team-contact-icon"
                /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: rgb(255, 255, 255);
  _background-color: #0f7e9d;
}

button {
  all: unset;
}

.team-card {
  background-color: #fafbfb;
  color: #183153 !important;
  border-radius: 5px;
}

.team-card:hover {
  background-color: #fefef4;
  transform: scale(110%);
  z-index: 100;
}
.team-contact-icon {
  height: 2rem;
  color: #183153;
}
.team-contact-icon:hover {
  color: #f4a460;
}

.member-title {
  color: white !important;
  font-size: 1.3rem;
}

.modal-header {
  background-color: #118ab2;
  color: white;
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.modal-content {
  color: #183153;
  border-radius: 5px;
}

.photo {
  height: 10rem;
  border-radius: 50%;
}

.modal-xmark {
  height: 2rem;
  width: 2rem;
}
.modal-close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.modal-close-button:hover {
  color: #183153;
}
</style>
