//Archivo de router de nuestra aplicacion
import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import GlobalChat from "../pages/GlobalChat.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/global-chat',
        component: GlobalChat,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,

    },
];

//creamos el router 
//para crearlo necesitamos pasarle dos cosas
//1. las rutas
//la propiedad history, puede ser una instancia de createwebhistory o createhashhistory 

//para esta caso vamos a usar create web history

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//Finalmente exportamos el router
export default router;