<template>
  <section>
    <div class="container-fluid p-0" id="gallery-wrapper">
      <div id="landing-gallery" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#landing-gallery"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#landing-gallery"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#landing-gallery"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/gallery/team1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/gallery/team1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/gallery/team2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#landing-gallery"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#landing-gallery"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
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
  </section>
</template>

<style scoped>
section {
  background-color: #52b69a;
  _background-image: linear-gradient(#1e6091, #d35628);
  _color: #183153;
  color: white;
  margin-top: none;
}

#gallery-wrapper {
  width: 100%;
  background: linear-gradient(#e66465, #9198e5);
  position: relative;
}

#landing-gallery {
  position: relative;
}

#landing-gallery:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0.1rem;
  width: 100%;
  height: 100%;
  _background: linear-gradient(
    to bottom,
    #ffffff00,
    #ffffff00 80%,
    #06d6a03d 90%,
    #06d6a0 100%
  );
}

.stats {
  font-size: 2rem;
  _font-family: "Rubik", sans-serif;
}
</style>
