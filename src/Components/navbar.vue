<script setup>
import { ref, computed } from 'vue'
import { languageStore, languageOptions, translations } from '../i18n.js'

const logoImage = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
const galleryOpen = ref(false)
const destinationsOpen = ref(false)
const languageOpen = ref(false)
const lang = computed(() => translations[languageStore.current] || translations['en'])
const currentLangLabel = computed(() => {
  const opt = languageOptions.find(o => o.code === languageStore.current)
  return opt ? opt.label : (lang.value?.nav?.language || 'Language')
})

const toggleGallery = () => {
  galleryOpen.value = !galleryOpen.value
  destinationsOpen.value = false
}

const toggleDestinations = () => {
  destinationsOpen.value = !destinationsOpen.value
  galleryOpen.value = false
}

const setLanguage = (code) => {
  languageStore.current = code
  // force a tiny reactive tick for computed consumers
  languageOpen.value = false
}
</script>
<template>
  <nav class="bg-green-900 text-white shadow-xl sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <router-link to="/" class="flex items-center gap-3">
        <img :src="logoImage" alt="Rwanda Travel" class="h-12 w-12 rounded-full border border-white/30 object-cover" />
        <div>
          <p class="text-lg font-semibold">Rwanda Travel</p>
          <p class="text-sm text-green-200">Explore the heart of East Africa</p>
        </div>
      </router-link>

      <div class="flex flex-wrap items-center gap-4 text-sm font-medium">
        <router-link to="/" class="hover:text-yellow-300 transition">Home</router-link>
        <router-link to="/about" class="hover:text-yellow-300 transition">About</router-link>
        <router-link to="/services" class="hover:text-yellow-300 transition">Services</router-link>

        <div class="relative" @mouseenter="galleryOpen = true" @mouseleave="galleryOpen = false">
          <button @click.prevent="toggleGallery" class="hover:text-yellow-300 transition flex items-center gap-1">{{ lang.nav.gallery }} ▼</button>
          <div v-show="galleryOpen" class="absolute right-0 mt-2 w-44 rounded-2xl bg-white text-green-900 shadow-xl py-2 z-50">
            <router-link to="/photos" @click="galleryOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.photos }}</router-link>
            <router-link to="/videos" @click="galleryOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.videos }}</router-link>
          </div>
        </div>

        <div class="relative" @mouseenter="destinationsOpen = true" @mouseleave="destinationsOpen = false">
          <button @click.prevent="toggleDestinations" class="hover:text-yellow-300 transition flex items-center gap-1">{{ lang.nav.destinations }} ▼</button>
          <div v-show="destinationsOpen" class="absolute right-0 mt-2 w-56 rounded-2xl bg-white text-green-900 shadow-xl py-2 z-50">
            <router-link to="/north" @click="destinationsOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.north }}</router-link>
            <router-link to="/south" @click="destinationsOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.south }}</router-link>
            <router-link to="/east" @click="destinationsOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.east }}</router-link>
            <router-link to="/west" @click="destinationsOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.west }}</router-link>
            <router-link to="/kigali" @click="destinationsOpen = false" class="block px-4 py-2 hover:bg-green-100">{{ lang.nav.kigali }}</router-link>
          </div>
        </div>

        <router-link to="/contact" class="hover:text-yellow-300 transition">{{ lang.nav.contact }}</router-link>
        <div class="relative">
          <button @click.prevent="languageOpen = !languageOpen" class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition">
            {{ currentLangLabel }}
            <span class="text-xs text-yellow-300">▼</span>
          </button>
          <div v-show="languageOpen" class="absolute right-0 mt-2 w-44 rounded-2xl bg-white text-green-900 shadow-xl py-2 z-50">
            <button v-for="option in languageOptions" :key="option.code" @click="setLanguage(option.code)" class="w-full text-left px-4 py-2 hover:bg-green-100">{{ option.label }}</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>