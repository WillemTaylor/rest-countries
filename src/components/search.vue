<template>
  <div class="search-filters-container">
    <div class="search-container">
      <input
        type="search"
        aria-label="Search for a country"
        placeholder="Search for a country..."
        @keyup="onChange($event)"
        @click="onChange($event)"
      />
    </div>
    <div class="filter-container">
      <select name="regions" @change="onChange($event)">
        <option value disabled selected hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(event) {
      if (event.type === "keyup") {
        this.$emit("searched", event.target.value);
      } else if (event.type === "click") {
        this.$emit("searched", "");
      } else if (event.type === "change") {
        this.$emit("selected", event.target.value);
      }
    }
  }
};
</script>
