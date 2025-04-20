import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Quasar
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import 'quasar/src/css/index.sass';

// Import our custom styles
import './styles/quasar.scss';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
})
.use(router)
.use(store)
.mount('#app');
