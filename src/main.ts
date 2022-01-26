import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'splitpanes/dist/splitpanes.css';

import ace from 'ace-builds';
import 'ace-builds/src-min-noconflict/ace';
import 'ace-builds/src-min-noconflict/theme-tomorrow';
import 'ace-builds/src-min-noconflict/mode-html';
import 'ace-builds/src-min-noconflict/mode-css';
import 'ace-builds/src-min-noconflict/mode-javascript';

import htmlWorker from 'ace-builds/src-min-noconflict/worker-html?url';
import cssWorker from 'ace-builds/src-min-noconflict/worker-css?url';
import javascriptWorker from 'ace-builds/src-min-noconflict/worker-javascript?url';

ace.config.setModuleUrl(`ace/mode/html_worker`, htmlWorker);
ace.config.setModuleUrl(`ace/mode/css_worker`, cssWorker);
ace.config.setModuleUrl(`ace/mode/javascript_worker`, javascriptWorker);

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
