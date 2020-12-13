<template>
  <div ref="cl" class="color-list">
    <div 
      :style="createWidthString(color)" 
       class="color-bar" 
       v-for="color in filteredColors" 
      :key="color.priority" >
      <template v-if="color.value > 0">
        <div class="color-bar-content">
          <div class="color-bar-name">{{color.name}}</div>
          <div :style="createColorString(color)" class="color-bar-value">{{color.value}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line
import {ColorConfig, ConfigHelper} from '../models/ColorConfig';

// TODO: Implentere prop for fratrekk             | X
// TODO: Implementere fratrekks algoritme         | X
// TODO: Lage ghost-bakgrunn                      |
// TODO: Når input > 0 gå over til fast bredde    | X
// TODO: Animate transition                       |
export default Vue.extend({
  props: {
    colors: {
      type: Array,
      required: true,
    },
    subtract: {
      default: ''
    }
  },
  computed: {
    filteredColors(): ColorConfig[] {
      return ConfigHelper.WithDrawFromList((this.colors as ColorConfig[]), Number.parseInt(this.subtract, 10)).reverse();
      //return (this.colors as ColorConfig[]).sort((a, b) => a.priority - b.priority).reverse();
    },
    subtractedColors(): ColorConfig[] {
      return ConfigHelper.WithDrawFromList((this.colors as ColorConfig[]), Number.parseInt(this.subtract, 10));
    }
  },
  methods: {
    createColorString(colorConfig: ColorConfig): string {
      return `background: ${colorConfig.colorValue};`;
    },
    createWidthString(colorConfig: ColorConfig): string {
      //const nr = Number.parseInt(this.subtract, 10) || 0;
      //if (nr == 0)
        //return this.createFlexWidthString(colorConfig.value);

      return this.createCalculatedWidthString(colorConfig.value);
    },
    createFlexWidthString(value: number): string {
      return `flex-grow: ${Math.floor(value / this.getValuePercentage() * 100)};`;
    },
    createCalculatedWidthString(value: number): string {
      const width: number = this.getElementWidth();
      const pixelWidth: number = Math.floor(value / this.getValuePercentage() * width);
      return `width: ${pixelWidth}px;`;
    },
    getValuePercentage(): number {
      let valueSum = 0;
      (this.colors as ColorConfig[]).forEach(item => {
        valueSum += item.value;
      });

      return valueSum;
    },
    getElementWidth(): number {
      if (this.$refs.cl)
        return (this.$refs.cl as HTMLDivElement).clientWidth; 
      else
        return window.innerWidth;
    }
  },
})
</script>

<style scoped>
.color-list {
  display: flex;
  align-content: stretch;
}  

.color-bar {
  transition: width 0.5s;
}

.color-bar-value {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

</style>


