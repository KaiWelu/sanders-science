<script setup>
import { onMounted } from "vue";

onMounted(() => {
  for (let i = 0; i < 30; i++) {
    let parentEl = document.createElement("div");
    parentEl.classList.add("strand");
    parentEl.innerHTML = `
    <div class="top" style="animation-delay:${i * -0.2}s"></div>
    <div class="bottom" style="animation-delay:${-1.5 - i * 0.2}s"></div>
  `;
    document.querySelector("#helix-container").appendChild(parentEl);
  }
});
</script>

<template>
  <section class="p-5 min-vh-100">
    <div class="container-fluid">
      <h1 class="text-center" id="loader-h1">WE STRAND-SEQ THE WORLD</h1>
      <div class="container-fluid">
        <div id="helix-container"></div>
      </div>
      <div class="container-md pt-5 pb-5">
        <div class="row">
          <div class="col-md">
            <p class="text-center stats"><b>271</b></p>
            <p class="text-center stats">Days Without Sunlight</p>
          </div>
          <div class="col-md">
            <p class="text-center stats"><b>2371</b></p>
            <p class="text-center stats">Single Cells Sequenced</p>
          </div>
          <div class="col-md">
            <p class="text-center stats"><b>293</b></p>
            <p class="text-center stats">Meetings</p>
          </div>
          <div class="col-md">
            <p class="text-center stats">
              <font-awesome-icon icon="fa-solid fa-star" />
            </p>
            <p class="text-center stats">Current Mood</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
section {
  background-color: #0f7e9d;
}

#loader-h1 {
  color: white;
  font-size: 5rem;
}

.stats {
  font-size: 2rem;
  color: white;
  font-weight: bold;
}

#helix-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin: 0;
}

.strand {
  position: relative;
  _width: 20px;
  width: 2rem;
  height: 40px;
  height: 8rem;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.top,
.bottom {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 12px;
  width: 12px;
  border-radius: 100%;
  animation: 4s move infinite ease-in-out;
}

@keyframes move {
  0% {
    background-color: #fa8d18;
    top: 100%;
    z-index: -3;
  }
  25% {
    height: 8px;
    width: 8px;
    background-color: #ff6600;
    z-index: -3;
  }
  50% {
    background-color: #fa8d18;
    top: 0%;
    z-index: -3;
  }
  75% {
    height: 12px;
    width: 12px;
    background-color: #f5b32f;
    z-index: 3;
  }
  100% {
    top: 100%;
    background-color: #fa8d18;
    z-index: 3;
  }
}
</style>
