<script setup>
import { computed } from 'vue'
import { languageStore, translations } from '../i18n.js'
const southernHero = new URL('../Assets/southern province.jfif', import.meta.url).href;
const southernPhoto1 = new URL('../Assets/waters.jpg', import.meta.url).href;
const southernPhoto2 = new URL('../Assets/lands.jpg', import.meta.url).href;
const southernPhoto3 = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
const lang = computed(() => translations[languageStore.current].destination.south)
</script>
<template>
    <section class="min-h-[60vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${southernHero})` }">
        <div class="max-w-4xl mx-auto px-6 py-24 text-center">
            <p class="text-sm uppercase tracking-[0.35em] text-green-200 mb-4">Destination</p>
            <h1 class="text-4xl md:text-5xl font-bold">{{ lang.title }}</h1>
            <p class="mt-3 text-green-100">{{ lang.subtitle }}</p>
        </div>
    </section>

    <section class="py-16 bg-slate-50 text-slate-900">
        <div class="max-w-5xl mx-auto px-6 space-y-10">
            <div>
                <h2 class="text-3xl font-semibold mb-4">{{ lang.title }}</h2>
                <p class="text-lg text-slate-600 leading-relaxed">{{ lang.description }}</p>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">{{ lang.card1.title }}</h3>
                    <p class="text-slate-600">{{ lang.card1.text }}</p>
                </div>
                <div class="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">{{ lang.card2.title }}</h3>
                    <p class="text-slate-600">{{ lang.card2.text }}</p>
                </div>
                <div class="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">{{ lang.card3.title }}</h3>
                    <p class="text-slate-600">{{ lang.card3.text }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-white text-slate-900">
        <div class="max-w-6xl mx-auto px-6">
            <div class="mb-10 text-center">
                <p class="text-sm uppercase tracking-[0.35em] text-green-600">Gallery</p>
                <h2 class="text-3xl font-semibold mt-3">{{ lang.galleryTitle }}</h2>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                    <img :src="southernPhoto1" alt="Nyungwe Forest" class="h-60 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold">Rainforest Hikes</h3>
                        <p class="text-slate-600">Explore Nyungwe’s canopy walkway and waterfalls.</p>
                    </div>
                </div>
                <div class="rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                    <img :src="southernPhoto2" alt="Lake Kivu" class="h-60 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold">Lake Kivu</h3>
                        <p class="text-slate-600">Relax beside one of Rwanda’s most beautiful lakes.</p>
                    </div>
                </div>
                <div class="rounded-3xl overflow-hidden shadow-lg bg-slate-50">
                    <img :src="southernPhoto3" alt="Tea Estate" class="h-60 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold">Tea Estates</h3>
                        <p class="text-slate-600">Visit peaceful tea farms and local communities.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
