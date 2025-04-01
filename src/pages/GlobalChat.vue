<script>
import MainH1 from '../components/MainH1.vue';

export default {
    name: 'GlobalChat',
    components: {
        MainH1
    }
}

</script>
<template>
    <MainH1>Chat global</MainH1>

    <div class="flex gap-4">
        <div class="p-4 border border-gray-300 rounded-lg w-3/4 min-h-100">
            <h2 class="sr-only">Lista de Mensajes</h2>
            <div class="col-3/12 p-4">
                
                
            </div>
        </div>
    </div>

    <form action="#">
        <div class="mb-4">
            <label for="email" class="block mb-2">Email:</label>
            <input type="email" id="email" class="border border-gray-300 rounded-lg p-2 w-full" placeholder="Ingrese su email" required>
        </div>
        <div class="mb-4">
            <label for="message" class="block mb-2">Mensaje:</label>
            <textarea id="message" class="border border-gray-300 rounded-lg p-2 w-full" placeholder="Ingrese su mensaje" required></textarea>
            
        </div>
        <button type="submit" class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:bg-blue-700 transition">Enviar</button>
    </form>
</template>