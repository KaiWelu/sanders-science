<template>
  <section>
    <div class="container-md">
      <div class="headline-wrapper">
        <h1 class="text-center">Contact</h1>
      </div>
      <div id="contact-wrapper">
        <div class="textblock-wrapper std-card-background">
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="contact-icon"
              style="color: #1b1b8d"
            />
            <div class="adress-wrapper">
              <p>
                Berlin Institute for Medical Systems Biology<br />
                Hannoversche Str. 28 <br />
                10115 Berlin, Germany
              </p>
            </div>
          </div>
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              style="color: #1b1b8d"
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>hallo@mdc-berlin.de</p></div>
          </div>

          <div class="contact-card">
            <font-awesome-icon
              icon="fa-solid fa-phone"
              style="color: #1b1b8d"
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>+49 30 94061593</p></div>
          </div>
        </div>
        <div class="textblock-wrapper std-card-background">
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>Instagram</p></div>
          </div>
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>Twitter</p></div>
          </div>
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-brands fa-github"
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>GitHub</p></div>
          </div>
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-brands fa-researchgate"
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>Researchgate</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-icon {
  height: 2rem;
  width: 2rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 30%;
  color: #1b1b8d;
}

.contact-card {
  display: flex;
  gap: 1rem;
  padding: 0.75rem;
}

.adress-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

#contact-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.std-card-background {
  background-color: aquamarine;
  opacity: 0.9;
  display: block;
}
</style>
