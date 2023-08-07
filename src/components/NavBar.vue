<template>
  <nav
    class="navbar navbar-expand-lg sticky-top shadow-sm p-3 mb-5 bg-body rounded"
  >
    <a href="#" class="navbar-brand mb-0 h1"
      ><img
        src="../assets/img/logostrandseq.png"
        id="navbar-logo"
        alt="sanders logo"
        class="d-inline-block align-top"
      />
      The Sanders Lab</a
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
      <span class="navbar-toggler-icon"></span>
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
</template>

<style scoped>
#navbar-logo {
  height: 2rem;
}

.nav-icon {
  height: 1.5rem;
}
</style>
