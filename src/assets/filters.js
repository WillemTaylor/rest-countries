import Vue from 'vue';

Vue.filter('formatPopulation', (value) => {
  if (value > 0) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
