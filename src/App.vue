<template>
  <div id="app">
    <OvertimeVisualizer :colors="colors"></OvertimeVisualizer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OvertimeVisualizer from './components/OvertimeVisualizer.vue';
import {ColorConfig} from './models/ColorConfig';

var colors: ColorConfig[] = [
  {key: 'billable', name: 'Fakturerbar tid', value: 20, colorValue: '#0F0', priority: 1},
  {key: 'internal', name: 'Interntid', value: 10, colorValue: '#0FF', priority: 2},
  {key: 'bench', name: 'Benk', value: 30, colorValue: '#F00', priority: 3}
];

export default Vue.extend({
  name: 'App',
  components: {
    OvertimeVisualizer
  },
  data() {
    return {
      colors: colors
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
