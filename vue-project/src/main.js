import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import EN from "./locales/en"
import TH from "./locales/th"

createApp(App).mount('#app')




const i18n = createI18n({
  // something vue-i18n options here ...
  locale:"EN",
  messages:{
    EN:EN,
    TH:TH,
  }
})


app.use(i18n)

app.mount('#app')
