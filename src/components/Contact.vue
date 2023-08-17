<template>
  <section>
    <div class="container-md pt-5 pb-5" id="contact">
      <div class="headline-wrapper">
        <h1 class="text-center">Contact</h1>
        <p class="lead text-center">
          <i>Send us a message or visit our lab</i>
        </p>
      </div>
      <div id="contact-wrapper">
        <div class="textblock-wrapper std-card-background">
          <div class="contact-card">
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="contact-icon"
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
              class="contact-icon"
            />
            <div class="adress-wrapper"><p>hallo@mdc-berlin.de</p></div>
          </div>

          <div class="contact-card">
            <font-awesome-icon icon="fa-solid fa-phone" class="contact-icon" />
            <div class="adress-wrapper"><p>+49 30 94061593</p></div>
          </div>
        </div>
        <div class="textblock-wrapper std-card-background">
          <!-- <div class="contact-card">
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
          </div> -->
          <iframe
            width="520"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Hannoversche%20Str.%2028%20Berlin+(Max%20Delbr%C3%BCck%20Center)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe
          ><a href="https://maps-generator.com/"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: white;
  color: #183153;
}

.headline-wrapper {
  color: #183153;
}
.contact-icon {
  height: 2rem;
  width: 2rem;
  background-color: #183153;
  padding: 0.5rem;
  border-radius: 30%;
  color: white;
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
  _background-color: #6a4c93;

  border-radius: 5px;
  color: #183153;
  opacity: 0.9;
  display: block;
}
</style>
