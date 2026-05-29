<script setup>
const contactHero = new URL('../Assets/wp2246293-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
    <section class="min-h-[60vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${contactHero})` }">
        <div class="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 class="text-4xl font-bold">Contact Us</h1>
            <p class="mt-3 text-green-100">Questions or bookings? We'd love to hear from you.</p>
        </div>
    </section>

    <section class="py-12 bg-white">
        <div class="max-w-3xl mx-auto px-6">
            <form class="grid gap-4">
                <input class="border rounded px-4 py-3" placeholder="Your name" />
                <input class="border rounded px-4 py-3" placeholder="Your email" />
                <textarea class="border rounded px-4 py-3" rows="5" placeholder="Message"></textarea>
                <button class="bg-green-800 text-white rounded px-6 py-3">Send Message</button>
            </form>
        </div>
    </section>
</template>