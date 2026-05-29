<script setup>
const servicesHero = new URL('../Assets/wp2246292-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
    <section class="min-h-[70vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${servicesHero})` }">
        <div class="max-w-5xl mx-auto px-6 py-24 text-center">
            <h1 class="text-4xl md:text-5xl font-bold">Services</h1>
            <p class="mt-4 text-lg text-green-100">Guided tours, gorilla permits, transport and bespoke itineraries.</p>
        </div>
    </section>

    <section class="py-12 bg-slate-50">
        <div class="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-3">
            <div class="p-6 bg-white rounded-2xl shadow">
                <h3 class="font-semibold text-xl mb-2">Gorilla Trekking</h3>
                <p class="text-slate-600">Expert guides and safe, responsible tracking experiences.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl shadow">
                <h3 class="font-semibold text-xl mb-2">Safari & Wildlife</h3>
                <p class="text-slate-600">Game drives in Akagera and birding tours across the country.</p>
            </div>
            <div class="p-6 bg-white rounded-2xl shadow">
                <h3 class="font-semibold text-xl mb-2">Custom Itineraries</h3>
                <p class="text-slate-600">Tailored trips to match your interests and schedule.</p>
            </div>
        </div>
    </section>
</template>