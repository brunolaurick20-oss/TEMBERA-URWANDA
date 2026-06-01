<script setup>
import { ref } from "vue";
const videosHero = new URL("../Assets/wp2246293-rwanda-wallpapers.jpg", import.meta.url).href;
const selectedVideo = ref(null);

const videos = [
  {
    id: '5FVO3IHwIzw',
    title: 'Visit Rwanda Official Video',
    desc: 'A cinematic introduction to Rwanda’s landscapes, wildlife, and culture.',
    type: 'youtube'
  },
  {
    id: '2p9Qt60W91Q',
    title: 'Rwanda Travel Highlights',
    desc: 'A clean travel showcase of Rwanda’s major destinations and experiences.',
    type: 'youtube'
  },
  {
    id: 'UZSbm8nf1MI',
    title: 'Visit Rwanda Story',
    desc: 'A polished video tour of Rwanda’s scenic beauty and popular attractions.',
    type: 'youtube'
  }
];

const openVideo = (video) => {
  selectedVideo.value = video;
};

const closeVideo = () => {
  selectedVideo.value = null;
};

const nextVideo = () => {
  const currentIndex = videos.findIndex(v => v.id === selectedVideo.value.id);
  const nextIndex = (currentIndex + 1) % videos.length;
  selectedVideo.value = videos[nextIndex];
};

const prevVideo = () => {
  const currentIndex = videos.findIndex(v => v.id === selectedVideo.value.id);
  const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
  selectedVideo.value = videos[prevIndex];
};

const videoThumbnail = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const videoEmbedUrl = (id) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
</script>
<template>
  <section class="min-h-[50vh] bg-cover bg-center flex items-center text-white" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${videosHero})` }">
    <div class="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 class="text-4xl font-bold">Videos</h1>
      <p class="mt-2 text-green-100">Browse the official Rwanda travel videos and watch them in a clean embedded gallery.</p>
    </div>
  </section>

  <section class="py-16 bg-slate-50 text-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-10 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-green-600">Video Showcase</p>
        <h2 class="text-4xl font-semibold mt-3">Experience Rwanda in motion</h2>
        <p class="mt-4 text-slate-600">Click any card to open the official video in a clean player overlay.</p>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="video in videos" :key="video.id" @click="openVideo(video)" class="rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1 active:translate-y-0">
          <div class="relative">
            <img loading="lazy" :src="videoThumbnail(video.id)" :alt="video.title" class="w-full h-64 object-cover" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition">
              <div class="h-16 w-16 rounded-full border-2 border-white/90 flex items-center justify-center text-white text-3xl">▶</div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">{{ video.title }}</h3>
            <p class="text-slate-600">{{ video.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-if="selectedVideo" @click="closeVideo" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
    <div class="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden" @click.stop>
      <iframe
        class="w-full aspect-video"
        :src="videoEmbedUrl(selectedVideo.id)"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="p-6 bg-slate-900 text-white text-center">
        <h3 class="text-2xl font-semibold">{{ selectedVideo.title }}</h3>
        <p class="mt-2 text-slate-300">{{ selectedVideo.desc }}</p>
      </div>
      <button @click="closeVideo" class="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400 transition">✕</button>
      <button @click="prevVideo" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-400 transition">❮</button>
      <button @click="nextVideo" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-400 transition">❯</button>
    </div>
  </div>
</template>
