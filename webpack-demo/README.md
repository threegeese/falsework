# Webpack Demo

## 初始化项目

```terminal
mkdir webpack-demo

cd webpack-demo

npm init  # 根据需要键入相关信息，或者直接 npm init -y

npm i webpack webpack-cli -D  # 运行 npx webpack -v 检查是否安装成功
```

```fold
// 现在 webpack-demo 目录结构

webpack-demo
  d-- node_modules
  -a- package.json
  -a- package-lock.json
```

## 添加配置文件

- 在 node_modules 下新建 webpack.config.js 文件，webpack 默认配置文件
- 可通过 webpack --config 指定配置文件

```js
// 下面是一个基本的配置文件示例
module.exports = {
  entry: './src/index.js',    // 打包的入口文件（默认为 ./src/index.js）
  output: './dist/main.js',   // 打包的输出（默认为 ./dist/main.js）
  mode: 'production',         // 模式（默认为 production）
  module: {
    rules: [                  // Loader 配置
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [                  // 插件配置
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```

- 在 node_modules 下新建 src/index.js，然后编辑 webpack.config.js 文件
- 运行 node_modules/.bin/webpack，在生成的 dist 下，新建 index.html 并引入 bundle.js

```js
'use strict'

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production'
}
```

## npm script

- 通过 npm script 运行 webpack，打开 package.json 文件，添加 "build": "webpack"
- 运行 npm run build，同 ./node_module/.bin/webpack 是一样的效果

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack"
}
```

## 正题

> 上面我们了解了 webpack 的基本用法，接下来一步一步搭建开发环境

1. 初始化项目

```shell
mkdir webpack-demo

cd webpack-demo

npm init  # 根据需要键入相关信息，或者直接 npm init -y

npm i webpack webpack-cli -D  # 运行 npx webpack -v 检查是否安装成功
```

2. 添加配置文件 webpack.config.js

```js
// webpack 4 如果没有配置文件，那么下面为默认配置

module.exports = {
  entry: './src/index.js',    // 打包的入口文件（默认为 ./src/index.js）
  output: './dist/main.js',   // 打包的输出（默认为 ./dist/main.js）
}
```

3. 这个 demo 的更多信息，[查看](https://www.yuque.com/wanchun/web/mgvq9o)

## 总结

这个配置具有的功能：

- 解析文件
  - 解析 ECMAScript
  - 解析 JSX
  - 解析 css
  - 解析 less
  - 解析图片和字体
- 文件监听（手动构建）
- 热更新（自动构建）
- 文件指纹
- 代码压缩

- [源代码](https://github.com/threegeese/falsework/tree/master/webpack-demo)