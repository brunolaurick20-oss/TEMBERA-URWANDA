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

    <section class="py-16 bg-slate-50 text-slate-900">
        <div class="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
            <div class="space-y-6">
                <div class="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">Email</h3>
                    <p class="text-slate-600">temberaurwanda@gmail.com</p>
                </div>
                <div class="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">Phone</h3>
                    <p class="text-slate-600">+250 788 234 7789</p>
                </div>
                <div class="rounded-3xl bg-white p-8 shadow-lg">
                    <h3 class="text-2xl font-semibold mb-3">Location</h3>
                    <p class="text-slate-600">Kagugu, Kigali, Rwanda</p>
                </div>
            </div>
            <div class="rounded-3xl bg-white p-8 shadow-lg">
                <form class="grid gap-4">
                    <label class="block text-slate-700">
                        <span class="text-sm font-medium">Your Name</span>
                        <input class="mt-2 w-full border rounded-xl px-4 py-3" placeholder="Enter your name" />
                    </label>
                    <label class="block text-slate-700">
                        <span class="text-sm font-medium">Email</span>
                        <input class="mt-2 w-full border rounded-xl px-4 py-3" placeholder="Enter your email" />
                    </label>
                    <label class="block text-slate-700">
                        <span class="text-sm font-medium">Message</span>
                        <textarea class="mt-2 w-full border rounded-xl px-4 py-3" rows="5" placeholder="Tell us about your trip"></textarea>
                    </label>
                    <button class="rounded-full bg-green-800 text-white px-6 py-3 text-base font-semibold hover:bg-green-700 transition">Send Message</button>
                </form>
            </div>
        </div>
    </section>
</template>