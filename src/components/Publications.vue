<template>
  <div class="container-md" id="publications">
    <section>
      <div class="headline-wrapper">
        <h1>Publications</h1>
        <p class="lead"><i>Explore our peer-reviewed research projects</i></p>
      </div>
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-auto col-md-6 pub-card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 text-center">
                  <h2>Wesley et al. (2020)</h2>
                </div>
                <div class="col-12 text-center">
                  <p>
                    Applying new technology, Warren et al. refined the genome of
                    the rhesus macaque, a model nonhuman primate.
                  </p>
                </div>
                <div class="col-12 text-center">
                  <a
                    href="https://www.science.org/doi/10.1126/science.abc6617"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="read-more"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto col-md-6 pub-card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 text-center">
                  <h2>Porubsky et al. (2020)</h2>
                </div>
                <div class="col-12 text-center">
                  <p>
                    Fully phased human genome assembly without parental data
                    using single-cell strand sequencing and long reads.
                  </p>
                </div>
                <div class="col-12 text-center">
                  <a
                    href="https://www.nature.com/articles/s41587-020-0719-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="read-more"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto col-md-6 pub-card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 text-center">
                  <h2>Maggiolini et al. (2020)</h2>
                </div>
                <div class="col-12 text-center">
                  <p>
                    Single-cell strand sequencing of a macaque genome reveals
                    multiple nested inversions and breakpoint reuse during
                    evolution.
                  </p>
                </div>
                <div class="col-12 text-center">
                  <a
                    href="https://genome.cshlp.org/content/early/2020/10/21/gr.265322.120"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="read-more"
                    >Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto col-md-6 pub-card">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 text-center">
                  <h2>Sanders et al. (2020))</h2>
                </div>
                <div class="col-12 text-center">
                  <p>
                    Single-cell analysis of structural variations and complex
                    rearrangements with tri-channel processing.
                  </p>
                </div>
                <div class="col-12 text-center">
                  <a class="read-more">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-2 mt-5">
          <div class="col text-center">
            <a
              href="https://www.nature.com/articles/s41587-019-0366-x"
              target="_blank"
              rel="noopener noreferrer"
              class="read-more"
              id="read-all"
              >Full Publication List</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  color: #1b618d;
}
.card {
  background-color: white;
  _color: #1b618d;
  _border: 1px solid #1b618d;
  _box-shadow: none;
}

button {
  _background-color: hotpink;
}

.pub-card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  _background-color: aqua;
}

.read-more {
  text-decoration: none;
  color: white;
  background-color: #2588c5ed;
  padding: 0.4rem;
  border-radius: 5px;
  box-shadow: 2px 2px #1b618d;
}

.read-more:hover {
  background-color: #44abeb;
  color: white;
  _border: 2px solid #2588c5ed;
}

#read-all {
  background-color: #f4a460;
  color: #013d62;
  margin-top: 2rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  border: none;
}
</style>
