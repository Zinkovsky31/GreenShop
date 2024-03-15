import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from "@/plugins/router/routes.js";
import '@/styles/index.scss';

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .mount('#app')
