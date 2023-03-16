import { createApp } from 'vue';
import App from './App.vue';
// import './index.css'
import ThemifyIcon from 'vue-themify-icons';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Countdown from 'vue3-flip-countdown';
import VueFire from 'vuefire'
import { firebaseApp } from './core/myFirebase';

createApp(App)
  .use({
    ThemifyIcon,
    Splide,
    SplideSlide,
    Countdown,
    VueFire,
    firebaseApp
  })
  .mount('#app');
