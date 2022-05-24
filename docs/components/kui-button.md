# Button 按钮组件

用于展示自定义按钮。

<!-- ## 基本用法

适用广泛的基础单选 -->

::: tip 组件名：kui-button
> 代码块： `kButton`
:::

## 介绍

### 基本用法
用于展示自定义按钮。

## API

### 组件属性

|  属性名   | 类型  | 默认值 | 说明 |
|  ----  | ----  | ---- | ---- |
| type  | String | primary | primary/secondary/dashed/outline/text |
| 单元格  | 单元格 | 单元格 | 单元格 |

### Type 参数说明
| 参数值 | 说明 |
| ---- | ---- |
| primary | 主要按钮 |
| secondary | 次要按钮 |
| dashed | 虚线按钮 |
| outline | 线性按钮 |
| text | 文本按钮 |


## 示例

::: tip 代码示例
:::

:::: code-group
::: code-group-item template 
```vue
<template>
    <view>
        <kui-button :mode="mode">主要按钮</kui-button>
		<kui-button :mode="mode" type="secondary">次要按钮</kui-button>
		<kui-button :mode="mode" type="dashed">虚线按钮</kui-button>
		<kui-button :mode="mode" type="outline">线形按钮</kui-button>
    </view>
</template>
```

:::
::: code-group-item javascript
```js
<script>
  export default {
    data() {
      return {
        
      }
    },
    components: {
        
    }
  }
</script>
```

:::
::::

::: tip 效果演示
> 等待更新中...
:::

<!-- ::: demo 用于展示自定义按钮
```vue
<template>
    <view>
        <kui-button :mode="mode">主要按钮</kui-button>
		<kui-button :mode="mode" type="secondary">次要按钮</kui-button>
		<kui-button :mode="mode" type="dashed">虚线按钮</kui-button>
		<kui-button :mode="mode" type="outline">线形按钮</kui-button>
    </view>
</template>

<script>
  import kuiButton from '@/node_modules/kviewui-uni/components/kui-button/kui-button';

  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    },
    components: {
        kuiButton
    }
  }
</script>
```

::: -->