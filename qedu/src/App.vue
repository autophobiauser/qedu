<template>
  <div id="app" class="min-h-screen flex flex-col">
    <HeaderComponent />
    <main class="flex-grow">
      <section class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-center text-gray-800">
            ¿Qué mejor que aprender experimentando?
          </h1>
          <p class="text-lg text-center text-gray-600 mt-4">
            Sumergete en el mundo de la Computación Cuántica con qEdu, la
            primera plataforma en español para aprender de forma interactiva.
          </p>
        </div>
      </section>
      <MainContent />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainContent from "./components/MainContent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainContent,
    FooterComponent,
  },
};
</script>

<style>
/* Aquí puedes agregar estilos globales o importar un framework CSS */
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "./index.css"; /* Importa el archivo Tailwind CSS */
</style>
