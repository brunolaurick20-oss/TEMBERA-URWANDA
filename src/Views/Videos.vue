<script setup>
const videosHero = new URL('../Assets/wp2246293-rwanda-wallpapers.jpg', import.meta.url).href;
const videoClip1 = new URL('../Assets/wp2246292-rwanda-wallpapers.jpg', import.meta.url).href;
const videoClip2 = new URL('../Assets/wp2246293-rwanda-wallpapers.jpg', import.meta.url).href;
const videoClip3 = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
    <section class="min-h-[50vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${videosHero})` }">
        <div class="max-w-5xl mx-auto px-6 py-20 text-center">
            <h1 class="text-4xl font-bold">Videos</h1>
            <p class="mt-2 text-green-100">Short clips showcasing Rwanda's parks and culture.</p>
        </div>
    </section>

    <section class="py-12 bg-white">
        <div class="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3">
            <div class="rounded overflow-hidden shadow">
                <img loading="lazy" :src="videoClip1" alt="clip1" class="w-full h-64 object-cover" />
            </div>
            <div class="rounded overflow-hidden shadow">
                <img loading="lazy" :src="videoClip2" alt="clip2" class="w-full h-64 object-cover" />
            </div>
            <div class="rounded overflow-hidden shadow">
                <img loading="lazy" :src="videoClip3" alt="clip3" class="w-full h-64 object-cover" />
            </div>
        </div>
    </section>
</template>