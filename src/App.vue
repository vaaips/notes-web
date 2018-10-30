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

body, h1, h2, h3, h4, h5, h6, p { margin: 0 }

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
  background-color: #efefef;
}
 
::-webkit-scrollbar-thumb {
  background-color: #fbc02d;
}

#app {
  h1, h2, h3, h4, h5, h6, p {
    font-family: Raleway;
  }
}
</style>
