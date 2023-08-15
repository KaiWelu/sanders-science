<template>
  <div class="container-fluid sticky-top p-0">
    <nav class="navbar navbar-expand-lg shadow-sm p-3">
      <a href="#" class="navbar-brand mb-0 align-items-center"
        ><img
          src="../assets/img/logostrandseq-alt.png"
          id="navbar-logo"
          alt="sanders logo"
          class="d-inline-block align-top"
        />
        <b id="nav-title" class="align-top h1 mb-0">The Sanders Lab</b></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" id="burger"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col">
              <ul class="navbar-nav justify-content-start">
                <li class="nav-item">
                  <a href="#team" class="nav-link">Team</a>
                </li>
                <li class="nav-item">
                  <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Resources</a>
                </li>
                <li class="nav-item">
                  <a href="#publications" class="nav-link">Publications</a>
                </li>
                <li class="nav-item">
                  <a href="#contact" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <ul class="navbar-nav justify-content-end">
                <li>
                  <a
                    href="https://www.instagram.com/sanders.science/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-instagram"
                      class="nav-icon"
                  /></a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://twitter.com/sanders_lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-twitter"
                      class="nav-icon"
                  /></a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://github.com/Sanders-Lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-github"
                      class="nav-icon"
                  /></a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.researchgate.net/profile/Ashley-Sanders-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-researchgate"
                      class="nav-icon"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#nav-title {
  font-size: 1.5rem;
  padding: 0.5rem;
}

.navbar {
  background-color: #215c88;
}

.nav-icon {
  height: 1.5rem;
}

.nav-link {
  color: white !important;
}

#navbar-logo {
  height: 2rem;
}

.navbar-brand {
  color: white;
}

a:hover {
  _color: #a1faebbc !important;
  color: #f4a460 !important;
}

button {
  color: white !important;
}
</style>
