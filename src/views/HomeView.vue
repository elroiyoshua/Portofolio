<script setup>
import navbar from '../components/Navbar.vue'
import contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import projects from '../components/Projects.vue'
import about from '../components/About.vue'
</script>

<template>
  <main>
    <navbar />
    <!-- <navbar /> -->
    <section id="about">
      <about />
    </section>
    <section id="projects">
      <projects />
    </section>
    <section id="contact">
      <contact />
    </section>
    <Footer />
  </main>
</template>
