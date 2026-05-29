<script setup>
const northernHero = new URL('../Assets/wp2246267-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
    <section class="min-h-[60vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${northernHero})` }">
        <div class="max-w-4xl mx-auto px-6 py-24 text-center">
            <h1 class="text-4xl font-bold">Northern Province</h1>
            <p class="mt-3 text-green-100">Lush hills and scenic viewpoints.</p>
        </div>
    </section>
</template>