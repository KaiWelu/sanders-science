<template>
  <section class="shadow-sm">
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
    <div class="container">
      <p class="mt-5">Hallo</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis error deleniti accusantium. Explicabo adipisci voluptate ut
        quisquam ipsam. Architecto nam accusamus odio dignissimos suscipit?
        Dolor quos eius ipsum veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis error deleniti accusantium. Explicabo adipisci voluptate ut
        quisquam ipsam. Architecto nam accusamus odio dignissimos suscipit?
        Dolor quos eius ipsum veritatis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis error deleniti accusantium. Explicabo adipisci voluptate ut
        quisquam ipsam. Architecto nam accusamus odio dignissimos suscipit?
        Dolor quos eius ipsum veritatis.
      </p>
      <p class="mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        reiciendis error deleniti accusantium. Explicabo adipisci voluptate ut
        quisquam ipsam. Architecto nam accusamus odio dignissimos suscipit?
        Dolor quos eius ipsum veritatis.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #ef476f;
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
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #ffffff00,
    #ffffff00 60%,
    #ef476f3d 80%,
    #ef476f 100%
  );
}
</style>
