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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Dv Social</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="./global-chat">Chat Global</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="./login">Iniciar Sesion</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="./register">Registrarse</RouterLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
<div>
    <RouterView />
    

</div>

<footer class="footer">
    <p>Nicolas Firpo &copy; 2025</p>
</footer>
</template>

<style>
    .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f8f9fa;
    color: #495057;
    text-align: center;
    padding: 10px 0;
}
</style>
