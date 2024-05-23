<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#">
        <img src="@/assets/logo.png" alt="QEdu Logo" class="h-10 w-auto" />
      </a>
      <nav class="flex space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-800">Cursos</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">Iniciar Sesión</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí si es necesario */
</style>
