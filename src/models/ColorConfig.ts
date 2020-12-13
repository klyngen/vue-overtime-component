
export interface ColorConfig {
  key: string;
  name: string;
  colorValue: string;
  value: number;
  priority: number;
}

export class ConfigHelper {
  public static CloneConfig(config: ColorConfig): ColorConfig {
    return {
      key: config.key,
      name: config.name,
      colorValue: config.colorValue,
      value: config.value,
      priority: config.priority
    }
  }

  // WithDrawFromList does the magic of withdrawing from higest priority first
  public static WithDrawFromList(colorConfigs: ColorConfig[], value: number): ColorConfig[] {
    const newItems: ColorConfig[] = [];
    var sortedConfig = colorConfigs.sort((a, b) => a.priority - b.priority);
    for (var item of sortedConfig) {
      const clone = ConfigHelper.CloneConfig(item);
      if (value > 0) {
        if (clone.value < value) {
          value = value - clone.value;
          clone.value = 0;
        } else {
          clone.value = clone.value - value;
          value = 0;
        }
      } 
      newItems.push(clone);
    }
    return newItems;
  }
}
