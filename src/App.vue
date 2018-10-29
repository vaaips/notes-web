<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: "Raleway";
  font-weight: 700;
  src: url("./assets/fonts/Raleway-Bold.ttf") format("woff2");
}

@font-face {
  font-family: "Raleway";
  font-weight: 500;
  src: url("./assets/fonts/Raleway-Medium.ttf") format("woff2");
}

body { margin: 0 }

#app {
  h1, h2, h3, h4, h5, h6, p {
    font-family: Raleway;
  }
}
</style>
