import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store/store.js'
import router from './router'


import {initializeApp} from 'firebase/app'
import {getAuth} from "firebase/auth";

loadFonts()

initializeApp({
    apiKey: "AIzaSyCy37-VIORLTw-TYc-SkWgLitI9v95Qods",
    authDomain: "monitorbox-88b5b.firebaseapp.com",
    projectId: "monitorbox-88b5b",
    storageBucket: "monitorbox-88b5b.appspot.com",
    messagingSenderId: "180778580190",
    appId: "1:180778580190:web:757af0ea99b6ca44142a4f",
    measurementId: "G-YEENE3QMDG",
    databaseURL: 'https://monitorbox-88b5b-default-rtdb.europe-west1.firebasedatabase.app'
})


let app

getAuth().onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)
            .use(vuetify)
            .use(router)
            .use(store)
            .mount('#app')
    }
})






//Динамическое изменение заголовка вкладки и бара
router.beforeEach((to, from, next) => {
    if (to.name) {
        document.title = to.name;
        store.state.titleToolBar = to.name
    }
    next();
})