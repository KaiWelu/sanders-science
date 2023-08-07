<template>
  <div class="container-fluid sticky-top">
    <nav class="navbar navbar-expand-lg shadow-sm p-3 mb-5 rounded">
      <a href="#" class="navbar-brand mb-0"
        ><img
          src="../assets/img/logostrandseq.png"
          id="navbar-logo"
          alt="sanders logo"
          class="d-inline-block align-top rounded-circle"
        />
        <b> The Sanders Lab</b></a
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
                <li class="nav-item"><a href="#" class="nav-link">Team</a></li>
                <li class="nav-item">
                  <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Resources</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Publications</a>
                </li>
                <li class="nav-item">
                  <a href="#contact" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col">
              <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                  <a href="#" class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-instagram"
                      class="nav-icon"
                  /></a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-twitter"
                      class="nav-icon"
                  /></a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link"
                    ><font-awesome-icon
                      icon="fa-brands fa-github"
                      class="nav-icon"
                  /></a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link"
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
.navbar {
  background-color: #1b618d;
}

.nav-link {
  color: white !important;
}

#navbar-logo {
  height: 2rem;
}

.nav-icon {
  height: 1.5rem;
}

.navbar-brand {
  color: white;
}

a:hover {
  color: #a1faebbc !important;
}

button {
  color: white !important;
}

#burger {
  color: white !important;
}
</style>
