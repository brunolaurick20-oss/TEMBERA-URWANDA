<script setup>
const aboutHero = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
    <!-- About hero -->
    <section class="min-h-[70vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${aboutHero})` }">
        <div class="max-w-5xl mx-auto px-6 py-24 text-center">
            <h1 class="text-5xl font-bold">About Rwanda Travel</h1>
            <p class="mt-4 text-lg text-green-100">We connect travelers to Rwanda's rich wildlife, culture and scenery.</p>
        </div>
    </section>

    <section class="py-16 bg-white text-slate-900">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
            <p class="text-lg text-slate-600">To promote sustainable tourism that benefits local communities and conserves natural habitats.</p>
        </div>
    </section>
</template>