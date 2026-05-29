<script setup>
const logoImage = new URL('../Assets/wp2246268-rwanda-wallpapers.jpg', import.meta.url).href;
</script>
<template>
  <nav class="bg-green-900 text-white shadow-xl sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <router-link to="/" class="flex items-center gap-3">
        <img :src="logoImage" alt="Rwanda Travel" class="h-12 w-12 rounded-full border border-white/30 object-cover" />
        <div>
          <p class="text-lg font-semibold">Rwanda Travel</p>
          <p class="text-sm text-green-200">Explore the heart of East Africa</p>
        </div>
      </router-link>

      <div class="flex flex-wrap items-center gap-4 text-sm font-medium">
        <router-link to="/" class="hover:text-yellow-300 transition">Home</router-link>
        <router-link to="/about" class="hover:text-yellow-300 transition">About</router-link>
        <router-link to="/services" class="hover:text-yellow-300 transition">Services</router-link>

        <div class="relative group">
          <button class="hover:text-yellow-300 transition flex items-center gap-1">Gallery ▼</button>
          <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 absolute right-0 mt-2 w-44 rounded-2xl bg-white text-green-900 shadow-xl py-2">
            <router-link to="/photos" class="block px-4 py-2 hover:bg-green-100">Photos</router-link>
            <router-link to="/videos" class="block px-4 py-2 hover:bg-green-100">Videos</router-link>
          </div>
        </div>

        <div class="relative group">
          <button class="hover:text-yellow-300 transition flex items-center gap-1">Destinations ▼</button>
          <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 absolute right-0 mt-2 w-56 rounded-2xl bg-white text-green-900 shadow-xl py-2">
            <router-link to="/north" class="block px-4 py-2 hover:bg-green-100">Northern Province</router-link>
            <router-link to="/south" class="block px-4 py-2 hover:bg-green-100">Southern Province</router-link>
            <router-link to="/east" class="block px-4 py-2 hover:bg-green-100">Eastern Province</router-link>
            <router-link to="/west" class="block px-4 py-2 hover:bg-green-100">Western Province</router-link>
            <router-link to="/kigali" class="block px-4 py-2 hover:bg-green-100">Kigali City</router-link>
          </div>
        </div>

        <router-link to="/contact" class="hover:text-yellow-300 transition">Contact</router-link>
      </div>
    </div>
  </nav>
</template>