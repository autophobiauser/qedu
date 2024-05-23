<template>
  <div class="video-background">
    <div class="video-foreground">
      <iframe
        src="https://www.youtube.com/embed/Qndz54SGCAs?autoplay=1&mute=1&loop=1&playlist=Qndz54SGCAs&controls=0&showinfo=0&autohide=1&modestbranding=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoBackground",
};
</script>

<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.video-foreground {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw; /* 16:9 aspect ratio */
  transform: translate(-50%, -50%);
}

.video-foreground iframe {
  width: 100%;
  height: 100%;
}
</style>
