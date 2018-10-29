<template>
  <div class="home">
    <div class="header">
      <h2 class="heading">Notes</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
  .home {
    .header {
      background: #f2b951;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      .heading {
        font-size: 35px;
        margin: 0;
      }
    }
  }
</style>

