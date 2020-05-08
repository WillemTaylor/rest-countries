<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import "./assets/styles.scss";
</style>
