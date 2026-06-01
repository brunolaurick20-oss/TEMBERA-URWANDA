<script setup>
import { computed } from 'vue'
import { languageStore, translations } from '../i18n.js'
const slideA = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
const slideB = new URL('../Assets/wp2246292-rwanda-wallpapers.jpg', import.meta.url).href;
const slideC = new URL('../Assets/wp2246293-rwanda-wallpapers.jpg', import.meta.url).href;
const slideD = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
const lang = computed(() => translations[languageStore.current])
</script>
<template>
  <section class="relative min-h-[90vh] overflow-hidden text-white">
    <div class="absolute inset-0 hero-carousel">
      <div class="hero-slide" :style="{ backgroundImage: `url(${slideA})` }"></div>
      <div class="hero-slide" :style="{ backgroundImage: `url(${slideB})` }"></div>
      <div class="hero-slide" :style="{ backgroundImage: `url(${slideC})` }"></div>
      <div class="hero-slide" :style="{ backgroundImage: `url(${slideD})` }"></div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/85"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center min-h-[90vh]">
      <div class="max-w-3xl">
        <p class="text-sm uppercase tracking-[0.35em] text-green-200 mb-4">{{ lang.home.heroSmall }}</p>
        <h1 class="text-5xl md:text-6xl font-bold leading-tight">{{ lang.home.heroTitle }}</h1>
        <p class="mt-6 text-lg text-green-100 leading-relaxed">{{ lang.home.heroText }}</p>
        <div class="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <router-link to="/photos" class="rounded-full bg-yellow-400 px-8 py-3 text-green-900 font-semibold shadow-lg hover:bg-yellow-300 transition">View Gallery</router-link>
          <router-link to="/contact" class="rounded-full border border-white/40 px-8 py-3 text-white hover:bg-white/10 transition">Contact Us</router-link>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-slate-50 text-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-green-600">{{ lang.home.featuredTitle }}</p>
        <h2 class="text-4xl font-semibold mt-3">{{ lang.home.featuredSubtitle }}</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <router-link to="/north" class="feature-card rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer block no-underline hover:shadow-xl transition">
          <img loading="lazy" :src="slideA" alt="Mountain gorillas" class="h-72 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">{{ lang.home.card1.title }}</h3>
            <p class="text-slate-600">{{ lang.home.card1.text }}</p>
          </div>
        </router-link>
        <router-link to="/south" class="feature-card rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer block no-underline hover:shadow-xl transition">
          <img loading="lazy" :src="slideB" alt="Rainforest walks" class="h-72 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">{{ lang.home.card2.title }}</h3>
            <p class="text-slate-600">{{ lang.home.card2.text }}</p>
          </div>
        </router-link>
        <router-link to="/east" class="feature-card rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer block no-underline hover:shadow-xl transition">
          <img loading="lazy" :src="slideC" alt="Lake safari" class="h-72 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">{{ lang.home.card3.title }}</h3>
            <p class="text-slate-600">{{ lang.home.card3.text }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white text-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.35em] text-green-600">{{ lang.home.supportTitle }}</p>
        <h2 class="text-4xl font-semibold mt-3">Travel support for every part of your journey</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div class="feature-card rounded-3xl bg-slate-50 p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">{{ lang.home.support1.title }}</h3>
          <p class="text-slate-600">{{ lang.home.support1.text }}</p>
        </div>
        <div class="feature-card rounded-3xl bg-slate-50 p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">{{ lang.home.support2.title }}</h3>
          <p class="text-slate-600">{{ lang.home.support2.text }}</p>
        </div>
        <div class="feature-card rounded-3xl bg-slate-50 p-8 shadow-lg">
          <h3 class="text-2xl font-semibold mb-3">{{ lang.home.support3.title }}</h3>
          <p class="text-slate-600">{{ lang.home.support3.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
