<template>
  <div class="header-container">
    <h3>Where in the World?</h3>
    <div v-if="!darkMode" @click="handleDarkMode">
      <i class="far fa-moon"></i>
      <h4>Dark Mode</h4>
    </div>
    <div v-else @click="handleDarkMode">
      <i class="fas fa-moon"></i>
      <h4>Dark Mode</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    handleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
