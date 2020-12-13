<template>
  <div class="color-list">
    <div v-for="color in colors" :key="color.priority" >
      {{color.key}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import {ColorConfig} from '../models/ColorConfig';

export default Vue.extend({
  props: {
    colors: {
      type: Array,
      required: true,
    }
  }
})
</script>

<style scoped>

</style>


