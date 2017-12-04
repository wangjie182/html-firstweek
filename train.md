# Document

## 前述
+ 释义（简介部分）
  + `熟悉` -- 通过本阶段培训需要掌握（会使用）的内容
  + `了解` -- 通过本阶段培训需要了解（知道，会部分使用）的内容
  + `熟悉(第二阶段)` -- 将来需要掌握（会使用）的内容，不属于本阶段培训内容，但本阶段培训可能会涉及到部分
  + `了解(第二阶段)` -- 将来需要了解（知道，会部分使用）的内容，不属于本阶段培训内容，但本阶段培训可能会涉及到部分
  + `扩展` -- 根据兴趣自行了解与学习，不属于本阶段培训内容，但本阶段培训可能会涉及到部分
  + 未标注的部分意味着本部分内容细则已贯穿于上述标注之中
+ 主体培训内容为前端，但也会涉及到后端及数据库知识

## 简介
### 基本
+ html -- 内容 ---- **熟悉**
  + 语义化标签
  + html5
+ css -- 样式
  + 基于语法与css布局 ---- **熟悉**
  + css模块化方案 ---- **扩展**
  + [less](http://lesscss.org/) ---- **扩展**
  + [sass](http://sass-lang.com/) ---- **扩展**
+ js -- 逻辑

### javascript
#### 基本构成
+ ECMAScript（核心）-- js语言基础
+ DOM（文档对象模型）-- 规定了访问HTML和XML的接口
+ BOM（浏览器对象模型）-- 提供了独立于内容而在浏览器窗口之间进行交互的对象和方法

#### ECMAScript
+ ES5 ---- **熟悉**
+ ES2015+ ---- **熟悉(第二阶段)**

### tools
+ [npm](https://www.npmjs.com/) -- 包管理工具 ---- **熟悉(第二阶段)**
+ [webpack](https://webpack.js.org/) -- 构建工具 ---- **了解(第二阶段)**
+ [npm scripts](https://docs.npmjs.com/misc/scripts) / [gulp](https://gulpjs.com/) -- 流程工具 ---- **了解(第二阶段)**
+ [git](https://git-scm.com/) / [svn](http://subversion.apache.org/) -- 版本管理 ---- **熟悉**
+ 编辑器 + 插件 ---- **熟悉**

### 框架/库
+ [bootstrap](http://getbootstrap.com/) -- html/css框架 ---- **熟悉**
+ [jquery](https://jquery.com/) ---- **熟悉**
+ [angularjs](https://angularjs.org/) ---- **了解**
+ [angular](https://angular.io/) ---- **熟悉(第二阶段)**
+ [react](https://reactjs.org/) ---- **扩展**
+ [vue](https://vuejs.org/) ---- **扩展**
+ [rdk](https://github.com/rdkmaster/rdk) -- 基于`angularjs`(1.x) ---- **熟悉**
+ [jigsaw](https://github.com/rdkmaster/jigsaw) -- 基于`angular`(4+)的ui组件 ---- **熟悉(第二阶段)**

#### [typescript](http://www.typescriptlang.org/) ---- **熟悉(第二阶段)**
+ js超集
+ 强类型

#### 安全

### [WebAssembly](http://webassembly.org/) ---- **扩展**
+ 面向web的通用二进制和文本格式的项目
+ 除js外另一种可以在浏览器中执行的编程语言
+ 一种新的字节码格式，.wasm为文件后缀名

#### [nodejs](https://nodejs.org/) ---- **扩展**
+ 后端的js
+ [express](http://expressjs.com/) 与 [koa](http://koajs.com/) 框架

#### sql
+ DML入门 ---- **熟悉**
+ 简单优化 ---- **熟悉**

## 基本
### 开发环境搭建
+ [nodejs](https://nodejs.org/)安装
+ [jdk](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html#javasejdk)安装与配置
+ [git](https://git-scm.com/)安装
+ [tortoisesvn](https://tortoisesvn.net/)安装
+ 编辑器 
  + [vscode](https://code.visualstudio.com/) -- 推荐
  + [sublime](http://www.sublimetext.com/)
  + [atom](https://atom.io/)
  + 其他，如[nodepad++](https://notepad-plus-plus.org/)

### 助推器
+ [markdown](https://daringfireball.net/projects/markdown/syntax)基本语法 ---- **熟悉**
+ 善于使用[github](https://github.com/) ---- **熟悉**
+ 善于使用[Stack Overflow](https://stackoverflow.com/) ---- **了解**
+ 善于使用[segmentfault](https://segmentfault.com/) ---- **熟悉**

## Plan
### 自学掌握
+ 搭建开发环境 -- 0.5天
+ [markdown](https://daringfireball.net/projects/markdown/syntax)基本语法 -- 0.5天
+ html/css入门 -- 3.5天
+ git/svn的使用 -- 1天
+ 注册github帐号，并了解基本使用 -- 0.5天

### 边学边实践
+ 实例讲解
+ 目标 -- 打造一个notify组件
+ 技术要求
  + 基于ES5
  + 纯原生js
+ 仓库地址：https://github.com/WatermelonFruit/notify
+ 知识点
  + 布局方案
  + 原型与继承
  + es2015+知识点
  + 组件化