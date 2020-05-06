<template>
  <div id="country">
    <Header />
    <button class="btn-back" @click="$router.replace('/')">Back</button>
    <div class="country-container" v-for="tile in country" :key="tile.country">
      <div>
        <img :src="`${tile.flag}`" />
      </div>
      <div class="desktop-container">
        <h2>{{ tile.name }}</h2>
        <div class="text-flex">
          <div>
            <p>
              <b>Native Name:</b>
              {{ tile.nativeName }}
            </p>
            <p>
              <b>Population:</b>
              {{ tile.population | formatPopulation }}
            </p>
            <p>
              <b>Region</b>
              {{ tile.region }}
            </p>
            <p>
              <b>Sub Region:</b>
              {{ tile.subregion }}
            </p>
            <p>
              <b>Capital:</b>
              {{ tile.capital }}
            </p>
          </div>
          <div>
            <p>
              <b>Top Level Domain:</b>
              {{ tile.topLevelDomain.toString() }}
            </p>
            <p>
              <b>Currencies:</b>
              {{ tile.currencies.map(x => x.name).toString() }}
            </p>
            <p>
              <b>Languages:</b>
              {{ tile.languages.map(x => x.name).join(", ") }}
            </p>
          </div>
        </div>
        <p>
          <b>Border Countries:</b>
        </p>
        <a
          class="btn-border"
          v-for="border in handleTileBorders"
          :key="border.name"
          @click="onClick($event)"
        >{{ border }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import axios from "axios";

export default {
  components: {
    Header
  },
  data() {
    return {
      country: "",
      data: []
    };
  },
  mounted() {
    let eps = sessionStorage.getItem("country");
    axios
      .get(`https://restcountries.eu/rest/v2/name/${eps}`)
      .then(response => (this.country = response.data));

    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => (this.data = response.data));
  },
  computed: {
    handleTileBorders() {
      let borders = this.country.map(x => x.borders).flat();
      let countries = this.data.filter(x => x.borders);
      let res = [];

      for (let i = 0; i < borders.length; i++) {
        for (let j = 0; j < countries.length; j++) {
          if (borders[i] === countries[j].alpha3Code) {
            res.push(countries[j].name);
          }
        }
      }
      return res;
    }
  },
  filters: {
    formatPopulation(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    onClick(event) {
      sessionStorage.setItem("country", event.target.innerHTML);
      this.$router.push(`/${event.target.innerHTML.toLowerCase()}`);
      location.reload();
    }
  }
};
</script>
