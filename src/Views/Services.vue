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

    <section class="py-16 bg-white text-slate-900">
        <div class="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
            <div class="feature-card rounded-3xl bg-slate-50 p-8 shadow-lg">
                <h3 class="font-semibold text-2xl mb-3">Gorilla Permits & Trekking</h3>
                <p class="text-slate-600">We secure permits, arrange transport, and guide you through Volcanoes National Park.</p>
            </div>
            <div class="feature-card rounded-3xl bg-slate-50 p-8 shadow-lg">
                <h3 class="font-semibold text-2xl mb-3">Safari Planning</h3>
                <p class="text-slate-600">Enjoy Akagera wildlife safaris, boat trips, and birding adventures.</p>
            </div>
            <div class="feature-card rounded-3xl bg-slate-50 p-8 shadow-lg">
                <h3 class="font-semibold text-2xl mb-3">Cultural Travel</h3>
                <p class="text-slate-600">Visit Kigali museums, local markets, and community tours with expert guides.</p>
            </div>
        </div>
    </section>

    <section class="py-16 bg-slate-50 text-slate-900">
        <div class="max-w-6xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-semibold">Ready to book your next Rwanda adventure?</h2>
            <p class="mt-4 text-lg text-slate-600">Talk to us and we will build a custom plan that fits your travel style and dates.</p>
            <router-link to="/contact" class="mt-8 inline-block rounded-full bg-green-800 px-10 py-3 text-white text-base font-semibold hover:bg-green-700 transition">Get in Touch</router-link>
        </div>
    </section>
</template>