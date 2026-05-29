<script setup>
const homeHero = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
const gorillasImage = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
const nyungweImage = new URL('../Assets/wp2246292-rwanda-wallpapers.jpg', import.meta.url).href;
const akageraImage = new URL('../Assets/wp2246293-rwanda-wallpapers.jpg', import.meta.url).href;
const volcanoImage = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
  <!-- Hero section -->
  <section class="relative min-h-[90vh] bg-cover bg-center bg-no-repeat text-white flex items-center" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${homeHero})` }">
    <div class="max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
      <p class="text-sm uppercase tracking-[0.35em] text-green-200 mb-4">Explore Rwanda</p>
      <h1 class="text-5xl md:text-6xl font-bold leading-tight">Adventure, Wildlife, and Culture in Every Corner</h1>
      <p class="mt-6 max-w-2xl text-lg text-green-100">Plan your Rwanda getaway with gorilla trekking, lush national parks, and unforgettable scenic views across the land of a thousand hills.</p>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
        <router-link to="/photos" class="rounded-full bg-yellow-400 px-8 py-3 text-green-900 font-semibold shadow-lg hover:bg-yellow-300 transition">View Gallery</router-link>
        <router-link to="/contact" class="rounded-full border border-white/50 px-8 py-3 text-white hover:bg-white/10 transition">Contact Us</router-link>
      </div>
    </div>
  </section>

  <!-- Featured experiences -->
  <section class="py-16 bg-slate-50 text-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-green-600">Featured Experiences</p>
        <h2 class="text-4xl font-semibold mt-3">What makes Rwanda unforgettable</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-3xl overflow-hidden shadow-2xl bg-white hover:-translate-y-2 transition">
          <img loading="lazy" :src="gorillasImage" alt="Mountain gorillas" class="h-72 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Gorilla Safaris</h3>
            <p class="text-slate-600">Track mountain gorillas in Volcanoes National Park and witness one of the world's most powerful wildlife encounters.</p>
          </div>
        </article>
        <article class="rounded-3xl overflow-hidden shadow-2xl bg-white hover:-translate-y-2 transition">
          <img loading="lazy" :src="nyungweImage" alt="Nyungwe rainforest" class="h-72 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Rainforest Trails</h3>
            <p class="text-slate-600">Hike through ancient rainforest paths and discover waterfalls, canopy walks, and rare primates.</p>
          </div>
        </article>
        <article class="rounded-3xl overflow-hidden shadow-2xl bg-white hover:-translate-y-2 transition">
          <img loading="lazy" :src="akageraImage" alt="Akagera park" class="h-72 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Savanna Safari</h3>
            <p class="text-slate-600">Explore Rwanda's eastern wilderness with game drives, lakeside views, and abundant birdlife.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- National parks preview -->
  <section class="py-16 bg-white text-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-green-600">Destinations</p>
        <h2 class="text-4xl font-semibold mt-3">Top national parks to explore</h2>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        <div class="rounded-3xl overflow-hidden shadow-xl bg-slate-50 hover:shadow-2xl transition">
          <img :src="volcanoImage" alt="Volcanoes National Park" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Volcanoes NP</h3>
            <p class="text-slate-600">Home of mountain gorillas and misty volcanic peaks.</p>
          </div>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-xl bg-slate-50 hover:shadow-2xl transition">
          <img :src="nyungweImage" alt="Nyungwe Forest" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Nyungwe Forest</h3>
            <p class="text-slate-600">Lush rainforest hikes and a thrilling canopy walk.</p>
          </div>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-xl bg-slate-50 hover:shadow-2xl transition">
          <img :src="akageraImage" alt="Akagera National Park" class="h-64 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Akagera NP</h3>
            <p class="text-slate-600">Big-game safaris, wetlands, and stunning sunsets.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

