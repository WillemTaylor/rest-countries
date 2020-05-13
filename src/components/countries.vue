<template>
  <div class="tile-container">
    <div class="tile" v-for="tile in handleShowTiles" :key="tile.data">
      <img :src="`${tile.flag}`" />
      <h2 @click="onClick(tile.name)">{{ tile.name }}</h2>
      <p>
        <b>Population:</b>
        {{ tile.population | formatPopulation }}
      </p>
      <p>
        <b>Region:</b>
        {{ tile.region }}
      </p>
      <p>
        <b>Capital:</b>
        {{ tile.capital }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    dropdown: String,
    search: String
  },
  computed: {
    handleShowTiles() {
      if (this.dropdown || this.search) {
        return this.data
          .filter(arr =>
            this.dropdown.length > 0 ? arr.region === this.dropdown : arr
          )
          .filter(arr =>
            this.search.length > 0
              ? arr.name.toLowerCase().includes(this.search) ||
                arr.name.toLowerCase() === this.search.toLowerCase()
              : arr
          );
      } else {
        return this.data;
      }
    }
  },
  filters: {
    formatPopulation(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    onClick(countryName) {
      localStorage.setItem("country", countryName);
      this.$router.push({ path: `/countries/${countryName.toLowerCase()}` });
    }
  }
};
</script>
