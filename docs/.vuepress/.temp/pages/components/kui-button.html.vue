<template><h1 id="button-按钮组件" tabindex="-1"><a class="header-anchor" href="#button-按钮组件" aria-hidden="true">#</a> Button 按钮组件</h1>
<p>用于展示自定义按钮。</p>
<!-- ## 基本用法

适用广泛的基础单选 -->
<div class="custom-container tip"><p class="custom-container-title">组件名：kui-button</p>
<blockquote>
<p>代码块： <code v-pre>kButton</code></p>
</blockquote>
</div>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p>用于展示自定义按钮。</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="组件属性" tabindex="-1"><a class="header-anchor" href="#组件属性" aria-hidden="true">#</a> 组件属性</h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>String</td>
<td>primary</td>
<td>primary/secondary/dashed/outline/text</td>
</tr>
<tr>
<td>单元格</td>
<td>单元格</td>
<td>单元格</td>
<td>单元格</td>
</tr>
</tbody>
</table>
<h3 id="type-参数说明" tabindex="-1"><a class="header-anchor" href="#type-参数说明" aria-hidden="true">#</a> Type 参数说明</h3>
<table>
<thead>
<tr>
<th>参数值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>primary</td>
<td>主要按钮</td>
</tr>
<tr>
<td>secondary</td>
<td>次要按钮</td>
</tr>
<tr>
<td>dashed</td>
<td>虚线按钮</td>
</tr>
<tr>
<td>outline</td>
<td>线性按钮</td>
</tr>
<tr>
<td>text</td>
<td>文本按钮</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="custom-container tip"><p class="custom-container-title">代码示例</p>
</div>
<CodeGroup>
<CodeGroupItem title="template">
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kui-button</span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kui-button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kui-button</span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>次要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kui-button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kui-button</span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>虚线按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kui-button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>kui-button</span> <span class="token attr-name">:mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>outline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>线形按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>kui-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="javascript">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">效果演示</p>
<blockquote>
<p>等待更新中...</p>
</blockquote>
</div>
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

::: --></template>
