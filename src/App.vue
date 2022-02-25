<script setup>
import Header from "./components/layout/Header.vue";
import Hero from "./components/layout/Hero.vue";
import Footer from "./components/layout/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'

</script>

<script>
import { loadScript } from "vue-plugin-load-script";
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  },
  created () {
    loadScript(import.meta.env.BASE_URL+"assets/js/main.js")
    .then(() => {
      console.log("SUCESS")
      console.log(this.$route);
    }).catch(() => {
      console.log("FAILED")
    });
  },
}
</script>

<template>

  <!-- ======= Mobile nav toggle button ======= -->
  <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>


    <Header></Header>

    <!-- ======= Hero Section ======= -->
    <Hero></Hero>
    <!-- End Hero -->

  <RouterView/>

    <!-- ======= Footer ======= -->
    <Footer></Footer>
  <!-- End Footer -->

</template>

<style>


</style>
