<template>
  <div class="tile-container">
    <div class="tile" v-for="tile in data" :key="tile.data">
      <p>{{ tile.name }}</p>
      <p>{{ tile.population }}</p>
      <p>{{ tile.region }}</p>
      <p>{{ tile.capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>
