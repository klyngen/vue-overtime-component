<template>
  <div id="app">
    <input v-model="withdrawl">
    <OvertimeVisualizer :subtract="withdrawl" :colors="colors"></OvertimeVisualizer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OvertimeVisualizer from './components/OvertimeVisualizer.vue';
// eslint-disable-next-line
import {ColorConfig} from './models/ColorConfig';

var colors: ColorConfig[] = [
  {key: 'billable', name: 'Fakturerbar tid', value: 20, colorValue: '#0F0', priority: 1},
  {key: 'internal', name: 'Interntid', value: 10, colorValue: '#FF0', priority: 2},
  {key: 'bench', name: 'Benk', value: 30, colorValue: '#F00', priority: 3},
  {key: 'bench', name: 'Benk', value: 0, colorValue: '#F00', priority: 4}
];

export default Vue.extend({
  name: 'App',
  components: {
    OvertimeVisualizer
  },
  data() {
    return {
      colors: colors,
      withdrawl: 0
    };
  },
  computed: {
    colorConfig(): ColorConfig[] {
      return [];
    }
  }
  
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
