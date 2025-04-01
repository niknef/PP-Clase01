<script> 
//Dentro de la etiqueta script de los componentes de vue, si usamos la API Options, necesitamos siempre exportar un objeto con la configuracion del componente
import { RouterLink, RouterView } from 'vue-router'


export default {
    //Name permite configurar el nombre del componente
  name: 'App',
    //Data es una funcion que retorna un objeto con los datos del componente
  
}
</script>

<template>
    <nav class="flex p-4 bg-gray-800 text-white gap-4 items-center justify-between">
  
    <a href="#" class="text-xl">Dv Social</a>
    <button>
      <span></span>
    </button>
   
      <ul class="flex gap-4">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="./global-chat">Chat Global</RouterLink>
        </li>
        <li>
          <RouterLink to="./login">Iniciar Sesion</RouterLink>
        </li>
        <li>
          <RouterLink to="./register">Registrarse</RouterLink>
        </li>

      </ul>
   
 
</nav>
<div class="container mx-auto p-4">
    <RouterView />
</div>

<footer class="bg-gray-400/80 text-white p-4 mt-4 flex flex-col items-center">
    <p>Desarrollado por Nicolas Firpo</p>
    <p>Nicolas Firpo &copy; 2025</p>
</footer>
</template>

