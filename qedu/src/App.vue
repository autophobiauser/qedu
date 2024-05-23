<template>
  <div id="app" class="min-h-screen flex flex-col relative">
    <VideoBackground />
    <HeaderComponent />
    <main class="flex-grow">
      <section class="flex items-center justify-center h-screen relative z-10">
        <div
          class="container mx-auto px-4 text-center bg-gray-100 bg-opacity-75 p-8 rounded-lg"
        >
          <h1 class="text-5xl font-bold text-gray-800">
            ¿Qué mejor que aprender
            <span class="text-blue-600">experimentando</span>?
          </h1>
          <p class="text-xl text-gray-600 mt-4">
            Sumérgete en el mundo de la Computación Cuántica con qEdu, la
            primera plataforma en español para aprender de forma interactiva.
          </p>
          <div class="mt-8">
            <button
              class="bg-green-500 text-white py-3 px-6 rounded-full text-lg hover:bg-green-600"
            >
              ¡Quiero empezar!
            </button>
          </div>
        </div>
      </section>
      <section class="bg-white py-16">
        <div class="container mx-auto px-4 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full py-16" data-aos="fade-up" data-aos-delay="200">
              <div
                class="mx-auto p-6 bg-black bg-opacity-75 rounded-lg text-white text-center max-w-3xl"
              >
                <h2 class="text-3xl font-bold mb-4">Espera, ¿gratis?</h2>
                <p class="text-lg">
                  Leíste bien, qEdu es completamente gratis! Nuestro objetivo es
                  llevar la computación cuántica a toda persona interesada sin
                  importar su nivel de conocimiento previo ni su situación. No
                  contemplamos cobros por cursos, material extra o uso de
                  herramientas interactivas. sin embargo, te invitamos a
                  realizar una donación si te ha gustado la plataforma y deseas
                  apoyar su desarrollo.
                </p>
              </div>
            </div>
            <div class="w-full py-16" data-aos="fade-up">
              <div
                class="mx-auto p-6 bg-black bg-opacity-75 rounded-lg text-white text-center max-w-3xl"
              >
                <h2 class="text-3xl font-bold mb-4">¿Qué tan interactivo?</h2>
                <p class="text-lg">
                  qEdu incluye animaciones interactivas y simuladores que
                  facilitan la comprensión de algunos conceptos a medida que
                  avances en los cursos. Esto no quiere decir que no haya
                  contenido teórico, pero siempre será acompañado de ejemplos
                  prácticos. En el equilibrio está la clave.
                </p>
              </div>
            </div>

            <div class="w-full py-16" data-aos="fade-up" data-aos-delay="200">
              <div
                class="mx-auto p-6 bg-black bg-opacity-75 rounded-lg text-white text-center max-w-3xl"
              >
                <h2 class="text-3xl font-bold mb-4">Hecho para ti</h2>
                <p class="text-lg">
                  qEdu contiene cursos de computación cuántica diseñados para
                  estudiantes de todos los niveles, desde principiantes hasta
                  expertos. Aprende a tu propio ritmo y profundiza en los temas
                  que más te interesen.
                </p>
              </div>
            </div>
            <div class="w-full py-16" data-aos="fade-up" data-aos-delay="400">
              <div
                class="mx-auto p-6 bg-black bg-opacity-75 rounded-lg text-white text-center max-w-3xl"
              >
                <h2 class="text-3xl font-bold mb-4">Material Confiable</h2>
                <p class="text-lg">
                  El contenido de qEdu ha sido recopilado de fuentes confiables
                  y traducido al español. Te invitamos a validar las fuentes de
                  cada curso en la sección de créditos.
                </p>
              </div>
            </div>
            <div class="w-full py-16" data-aos="fade-up" data-aos-delay="600">
              <div
                class="mx-auto p-6 bg-black bg-opacity-75 rounded-lg text-white text-center max-w-3xl"
              >
                <h2 class="text-3xl font-bold mb-4">Actualización Continua</h2>
                <p class="text-lg">
                  Mantente al día con los últimos avances en computación
                  cuántica con actualizaciones regulares del curso.
                </p>
              </div>
            </div>
          </div>
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
import VideoBackground from "./components/VideoBackground.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainContent,
    FooterComponent,
    VideoBackground,
  },
};
</script>

<style>
/* Aquí puedes agregar estilos globales o importar un framework CSS */
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "./index.css"; /* Importa el archivo Tailwind CSS */
</style>
