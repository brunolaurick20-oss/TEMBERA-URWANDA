<script setup>
const photosHero = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
const gorillasImage = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
const volcanoImage = new URL('../Assets/wp2246292-rwanda-wallpapers.jpg', import.meta.url).href;
const nyungweImage = new URL('../Assets/wp2246293-rwanda-wallpapers.jpg', import.meta.url).href;
const akageraImage = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
const sceneryImage = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
const workImage = new URL('../Assets/wp2246292-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
    <section class="min-h-[40vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${photosHero})` }">
        <div class="max-w-5xl mx-auto px-6 py-20 text-center">
            <h1 class="text-4xl font-bold">Photo Gallery</h1>
            <p class="mt-2 text-green-100">A selection of landscapes and wildlife from across Rwanda.</p>
        </div>
    </section>

    <section class="py-12 bg-slate-50">
        <div class="max-w-6xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <img loading="lazy" :src="gorillasImage" class="w-full h-56 object-cover rounded-lg shadow" alt="gorillas" />
            <img loading="lazy" :src="volcanoImage" class="w-full h-56 object-cover rounded-lg shadow" alt="volcano" />
            <img loading="lazy" :src="nyungweImage" class="w-full h-56 object-cover rounded-lg shadow" alt="nyungwe" />
            <img loading="lazy" :src="akageraImage" class="w-full h-56 object-cover rounded-lg shadow" alt="akagera" />
            <img loading="lazy" :src="sceneryImage" class="w-full h-56 object-cover rounded-lg shadow" alt="scenery" />
            <img loading="lazy" :src="workImage" class="w-full h-56 object-cover rounded-lg shadow" alt="sunset" />
        </div>
    </section>
</template>