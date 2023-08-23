<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import NavBar from "./components/NavBar.vue";
import TeamView from "./components/TeamView.vue";
import Partners from "./components/Partners.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Publications from "./components/Publications.vue";
import Gallery from "./components/Gallery.vue";
import Loader from "./components/Loader.vue";
</script>

<template>
  <NavBar></NavBar>
  <Loader></Loader>
  <!-- <Gallery></Gallery> -->
  <TeamView></TeamView>
  <About></About>
  <Partners></Partners>
  <Publications></Publications>
  <Contact></Contact>
  <Footer></Footer>
</template>
