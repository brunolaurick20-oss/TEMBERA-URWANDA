<script setup>
import { RouterView } from 'vue-router';

const appBackground = new URL('./Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
 import navbar from './Components/navbar.vue'
 import Footer from './Components/footer.vue'

</script>
<template>
  <div class="min-h-screen" :style="{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03), rgba(0,0,0,0.03)), url(${appBackground})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }">
    <navbar />
    <main class="min-h-screen">
      <router-view />
    </main>
    <Footer />
  </div>
</template>