<script setup>
import { ref, computed } from "vue";
import { languageStore, translations } from '../i18n.js'
const photosHero = new URL("../Assets/wp2246267-rwanda-wallpapers.jpg", import.meta.url).href;
const gorillasImage = new URL("../Assets/wp2246268-rwanda-wallpapers.jpg", import.meta.url).href;
const volcanoImage = new URL("../Assets/volcano.jpg", import.meta.url).href;
const nyungweImage = new URL("../Assets/southern province.jfif", import.meta.url).href;
const akageraImage = new URL("../Assets/eastern province.jfif", import.meta.url).href;
const sceneryImage = new URL("../Assets/western province.jfif", import.meta.url).href;
const workImage = new URL("../Assets/kigali province.jfif", import.meta.url).href;

const selectedImage = ref(null);
const lang = computed(() => translations[languageStore.current])

const images = [
  { src: gorillasImage, title: "Mountain Gorillas" },
  { src: volcanoImage, title: "Volcano Peaks" },
  { src: nyungweImage, title: "Nyungwe Forest" },
  { src: akageraImage, title: "Akagera Savanna" },
  { src: sceneryImage, title: "Rwanda Scenery" },
  { src: workImage, title: "Sunset View" }
];

const openImage = (image) => {
  selectedImage.value = image;
};

const closeImage = () => {
  selectedImage.value = null;
};

const nextImage = () => {
  const currentIndex = images.findIndex(img => img.src === selectedImage.value.src);
  const nextIndex = (currentIndex + 1) % images.length;
  selectedImage.value = images[nextIndex];
};

const prevImage = () => {
  const currentIndex = images.findIndex(img => img.src === selectedImage.value.src);
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  selectedImage.value = images[prevIndex];
};
</script>
<template>
    <section class="min-h-[40vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${photosHero})` }">
        <div class="max-w-5xl mx-auto px-6 py-20 text-center">
            <h1 class="text-4xl font-bold">{{ lang.photos.title }}</h1>
            <p class="mt-2 text-green-100">{{ lang.photos.info }}</p>
        </div>
    </section>

    <section class="py-16 bg-slate-50 text-slate-900">
        <div class="max-w-6xl mx-auto px-6">
            <div class="mb-10 text-center">
                <p class="text-sm uppercase tracking-[0.35em] text-green-600">{{ lang.photos.title }}</p>
                <h2 class="text-4xl font-semibold mt-3">{{ lang.photos.subtitle }}</h2>
                <p class="mt-4 text-slate-600">{{ lang.photos.provinceSection.text }}</p>
            </div>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div v-for="image in images" :key="image.src" @click="openImage(image)" class="relative cursor-pointer rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                    <img loading="lazy" :src="image.src" class="w-full h-56 object-cover" :alt="image.title" />
                    <div class="absolute inset-0 bg-black/0 hover:bg-black/40 transition rounded-3xl flex items-center justify-center">
                        <span class="text-white text-4xl opacity-0 hover:opacity-100 transition">🔍</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-white text-slate-900">
        <div class="max-w-6xl mx-auto px-6">
            <div class="mb-10 text-center">
                <p class="text-sm uppercase tracking-[0.35em] text-green-600">{{ lang.photos.provinceSection.heading }}</p>
                <h2 class="text-4xl font-semibold mt-3">Province Spotlights</h2>
                <p class="mt-4 text-slate-600">{{ lang.photos.provinceSection.text }}</p>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-3xl overflow-hidden bg-slate-50 shadow-lg">
                    <img :src="nyungweImage" alt="Nyungwe" class="h-56 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">Southern Province</h3>
                        <p class="text-slate-600">Lush rainforests, canopy walks, and lakeside relaxation.</p>
                    </div>
                </div>
                <div class="rounded-3xl overflow-hidden bg-slate-50 shadow-lg">
                    <img :src="akageraImage" alt="Akagera" class="h-56 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">Eastern Province</h3>
                        <p class="text-slate-600">Savanna views, wildlife safaris, and lake cruises.</p>
                    </div>
                </div>
                <div class="rounded-3xl overflow-hidden bg-slate-50 shadow-lg">
                    <img :src="sceneryImage" alt="Lake Kivu" class="h-56 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">Western Province</h3>
                        <p class="text-slate-600">Lakeshore sunsets, forest trails, and peaceful retreats.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div v-if="selectedImage" @click="closeImage" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div class="relative max-w-4xl max-h-[90vh] flex flex-col" @click.stop>
            <img :src="selectedImage.src" :alt="selectedImage.title" class="w-full h-full object-contain rounded-lg" />
            <h3 class="text-white text-2xl font-semibold mt-4 text-center">{{ selectedImage.title }}</h3>
            
            <button @click="closeImage" class="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400 transition">✕</button>
            <button @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-400 transition">❮</button>
            <button @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-400 transition">❯</button>
        </div>
    </div>
</template>
