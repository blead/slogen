<template>
  <transition name="slide">
    <div class="container">
      <div class="content">
        <h1>Configure</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facere, dolores expedita?Corporis dolor, numquam a dolorem quos iste itaque,
          nihil vitae debitis excepturi labore fugit est. Veritatis eum quidem ab.
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Configure',
};
</script>

<style scoped>
.slide-enter-active {
  animation: slide-in 1s;
}
.slide-leave-active {
  animation: slide-in 1s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
