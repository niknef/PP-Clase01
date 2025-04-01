import './styles.css'
//Importamos la funcion para crear la aplicacion de Vue 
import { createApp } from 'vue'
import router from './router/router.js'
//Importamos el componente de App.vue 
import App from './App.vue'

//Creamos la appliacion con la funcion createApp, que recibe como argumento el componente raiz.
//Nos retorna el objeto de la app
const app = createApp(App);

app.use(router);
//Montamos la app en el elemento con el Id app
app.mount('#app');