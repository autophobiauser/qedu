<template>
  <div class="hello">
    <h1>{{ titulo }}</h1>
    <p>Bienvenido a qEdu, tu plataforma de aprendizaje!</p>
    <h3>Descubre, Aprende y Crece</h3>
    <p>
      qEdu te proporciona las herramientas y recursos para dominar nuevas
      habilidades y conocimientos. ¡Comienza tu viaje de aprendizaje hoy mismo!
    </p>
    <h3>¿Por qué elegir qEdu?</h3>
    <ul>
      <li>Cursos completos diseñados por expertos.</li>
      <li>Experiencias de aprendizaje interactivas y atractivas.</li>
      <li>Recorridos de aprendizaje personalizados.</li>
      <li>Proyectos y evaluaciones del mundo real.</li>
    </ul>
    <h3>Empezar</h3>
    <p>
      Únete a qEdu y lleva tu aprendizaje al siguiente nivel. ¡Ya sea que seas
      principiante o experto, siempre hay algo nuevo por aprender!
    </p>
    <button @click="comenzarAprendizaje">Comenzar Ahora</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    titulo: {
      type: String,
      default: "Bienvenido a qEdu",
    },
  },
  methods: {
    comenzarAprendizaje() {
      // Implementa la lógica para navegar al curso o módulo
      console.log("Redirigiendo al curso...");
    },
  },
};
</script>

<style scoped lang="scss">
.hello {
  text-align: center;
  margin-top: 40px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

h3 {
  margin: 20px 0 10px;
  font-size: 1.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #34a272;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
