<template>
  <div class="search-filters-container">
    <div class="search-container">
      <input type="search" aria-label="Search for a country" placeholder="Search for a country..." />
    </div>
    <div class="filter-container">
      <select name="regions">
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>
