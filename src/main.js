import { createApp } from 'vue'
import './style.css'
import Home from './home.vue'
import 'aos/dist/aos.css'

var myApp = createApp(Home)

myApp.mount('#app')
