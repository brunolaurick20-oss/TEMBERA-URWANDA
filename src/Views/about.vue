<script setup>
import { computed } from 'vue'
import { languageStore, translations } from '../i18n.js'
const aboutHero = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
const aboutImage = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
const lang = computed(() => translations[languageStore.current])
</script>
<template>
    <section class="min-h-[70vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${aboutHero})` }">
        <div class="max-w-5xl mx-auto px-6 py-24 text-center">
            <p class="text-sm uppercase tracking-[0.35em] text-green-200 mb-4">{{ lang.about.heroSmall }}</p>
            <h1 class="text-5xl font-bold">{{ lang.about.heroTitle }}</h1>
            <p class="mt-4 text-lg text-green-100">{{ lang.about.heroText }}</p>
        </div>
    </section>

    <section class="py-16 bg-white text-slate-900">
        <div class="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
            <div>
                <h2 class="text-4xl font-semibold mb-4">{{ lang.about.missionTitle }}</h2>
                <p class="text-lg text-slate-600 leading-relaxed">{{ lang.about.missionText }}</p>
            </div>
            <div class="space-y-6">
                <div class="rounded-3xl bg-slate-50 p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">{{ lang.about.feature1.title }}</h3>
                    <p class="text-slate-600">{{ lang.about.feature1.text }}</p>
                </div>
                <div class="rounded-3xl bg-slate-50 p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">{{ lang.about.feature2.title }}</h3>
                    <p class="text-slate-600">{{ lang.about.feature2.text }}</p>
                </div>
                <div class="rounded-3xl bg-slate-50 p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">{{ lang.about.feature3.title }}</h3>
                    <p class="text-slate-600">{{ lang.about.feature3.text }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-slate-50 text-slate-900">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-12">
                <p class="text-sm uppercase tracking-[0.35em] text-green-600">{{ lang.about.provincesTitle }}</p>
                <h2 class="text-4xl font-semibold mt-3">Discover Every Region</h2>
                <p class="mt-4 text-slate-600">{{ lang.about.provincesText }}</p>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-3xl overflow-hidden bg-white shadow-lg">
                    <img :src="aboutImage" alt="Northern Province" class="h-60 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">Northern Province</h3>
                        <p class="text-slate-600">Volcanoes, gorilla treks, and mountain forest adventures.</p>
                    </div>
                </div>
                <div class="rounded-3xl overflow-hidden bg-white shadow-lg">
                    <img :src="aboutHero" alt="Southern Province" class="h-60 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">Southern Province</h3>
                        <p class="text-slate-600">Nyungwe forest, Lake Kivu shores, and cultural village visits.</p>
                    </div>
                </div>
                <div class="rounded-3xl overflow-hidden bg-white shadow-lg">
                    <img :src="aboutImage" alt="Eastern Province" class="h-60 w-full object-cover" />
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold mb-2">Eastern Province</h3>
                        <p class="text-slate-600">Akagera safari, lake cruises, and wildlife exploration.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>