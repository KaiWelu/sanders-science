<template>
  <section>
    <div class="container-md pt-5 pb-5" id="contact">
      <div class="headline-wrapper">
        <h1 class="text-center">Contact</h1>
        <p class="lead text-center">
          <i>Send us a message or visit our lab</i>
        </p>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-md- gap-3">
          <div class="col-auto">
            <div class="row p-2">
              <div class="col-auto">
                <font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  class="contact-icon"
                />
              </div>
              <div class="col-auto">
                <p>
                  Berlin Institute for Medical Systems Biology<br />
                  Hannoversche Str. 28 <br />
                  10115 Berlin, Germany
                </p>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-auto">
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  class="contact-icon"
                />
              </div>
              <div class="col-auto">
                <p>hallo@mdc-berlin.de</p>
              </div>
            </div>
            <div class="row p-2">
              <div class="col-auto">
                <font-awesome-icon
                  icon="fa-solid fa-phone"
                  class="contact-icon"
                />
              </div>
              <div class="col-auto"><p>+49 30 94061593</p></div>
            </div>
          </div>
          <div class="col-lg p-2">
            <iframe
              width="100%"
              height="500px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Hannoversche%20Str.%2028%20Berlin+(Max%20Delbr%C3%BCck%20Center)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
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

p {
  font-size: 1.3rem;
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

#contact {
  -height: 50rem;
}
</style>
