import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'ace-builds/src-min-noconflict/ace';
import 'ace-builds/src-min-noconflict/theme-tomorrow';
import 'splitpanes/dist/splitpanes.css';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
