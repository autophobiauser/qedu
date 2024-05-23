import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";

createApp(App).mount("#app");

AOS.init({
  duration: 1200, // Duración de la animación
});
