<template>
  <div :class="mode ? 'dark' : 'light'">
    <Header @clicked="darkModeToggle" />
    <Search @selected="onSelectDropdown" @searched="onSearchType" />
    <Countries :data="data" :dropdown="dropdownValue" :search="searchValue" />
  </div>
</template>

<script>
import axios from 'axios';
import Header from './header';
import Search from './search';
import Countries from './countries';

export default {
  components: {
    Header,
    Search,
    Countries,
  },
  data() {
    return {
      data: [],
      dropdownValue: '',
      searchValue: '',
      mode: '',
    };
  },
  created() {
    localStorage.getItem('darkMode') === 'true' ? (this.mode = true) : (this.mode = false);
  },
  mounted() {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => (this.data = response.data));
  },
  methods: {
    onSelectDropdown(value) {
      this.dropdownValue = value;
    },
    onSearchType(value) {
      this.searchValue = value;
    },
    darkModeToggle(value) {
      this.mode = value;
    },
  },
};
</script>
