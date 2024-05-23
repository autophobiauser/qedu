<template>
  <div class="w-full md:w-1/3 p-4">
    <div
      @click="toggle"
      class="cursor-pointer p-6 bg-blue-600 rounded-lg text-white"
    >
      <h2 class="text-lg font-bold mb-4">{{ title }}</h2>
      <transition name="fade">
        <p v-if="isOpen" class="text-gray-200">
          {{ description }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    title: String,
    description: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
