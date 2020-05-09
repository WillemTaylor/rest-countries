<template>
  <div id="app">
    <router-view :key="$route.params.country" />
  </div>
</template>

<style lang="scss">
@import "./assets/styles.scss";
</style>
