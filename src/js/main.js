// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// create and
import { createApp } from "vue";
import App from "../App.vue";

// Font Awesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faDna,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faUserSecret);
library.add(faDna);
library.add(faLocationDot);
library.add(faEnvelope);
library.add(faPhone);
library.add(faInstagram, faTwitter, faGithub, faResearchgate);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
