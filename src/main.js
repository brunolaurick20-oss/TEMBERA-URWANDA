import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router  from "./router/index.js"

const app = createApp(App).use(router)
app.mount('#app')

// Mark lazy images as loaded when they finish loading so CSS reveal works
function markLazyImages() {
	document.querySelectorAll('img[loading="lazy"]').forEach(img => {
		if (img.complete) img.classList.add('loaded')
		else img.addEventListener('load', () => img.classList.add('loaded'))
	})
}

window.addEventListener('load', markLazyImages)
new MutationObserver(markLazyImages).observe(document.body, { childList: true, subtree: true })
