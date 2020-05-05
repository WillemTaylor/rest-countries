<template>
  <div>
    <Header />
    <Search />
    <Countries :data="data" />
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
    };
  },
  mounted() {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => (this.data = response.data));
  },
};
</script>
