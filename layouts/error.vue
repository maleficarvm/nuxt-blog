<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper"></div>
      <p class="title">Page Not Found</p>
      <nuxt-link to="/"> Back to main page </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss">
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 40vh;
}
</style>
