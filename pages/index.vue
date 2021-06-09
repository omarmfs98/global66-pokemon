<template>
  <div class="container">
    <div>
      <img src="/characters/pikachu.svg" alt="Pikachu" />
      <h1 class="typography-h2">Welcome to Pokédex</h1>
      <span class="typography-body1"
        >The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.</span
      >
      <div class="container-btn">
        <ButtonLink variant="primary" to="/dashboard" title="Get started" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  margin: 30px 0;
}
.container-btn {
  margin-top: 50px;
}
</style>
