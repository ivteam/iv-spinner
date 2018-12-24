

# spinner

## 安装

```shell
npm install iv-spinner -S
```
or

```
<script src="dist/spinner.umd.min.js"></script>
<link rel="stylesheet" href="dist/spinner.css">
```

## 调试

```shell
npm install -g @vue/cli-service-global

vue serve App.vue # 运行调试
```

```shell
vue build -t lib -n spinner App.vue # 构建lib工具
```

```shell
vue build -t wc -n spinner App.vue # 构建web components
```

## 使用

在vue SPA中全局引用
```
import spinner from "iv-spinner";

Vue.use(spinner);
```

or

单组件引用
```
<template>
    <Slider v-model="value" range />
</template>

<script>
import spinner from "iv-spinner";

export default {
    data () {
        return {
            value: [20, 50]
        }
    },
    components: { spinner }
}
</script>
```