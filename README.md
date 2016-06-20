# flux_example
react flux架构




Flux是一个概念，是一个架构，目前有成型框架
由ReactViews组件发出一个指令或是个DOM事件，然后通过内部方法会创建一个Action对象，然后会这个该对象会加入
Dispatcher调度器中，然后它内部会把这个事件分发到Store

ReactView -》Action -》Dispatcher -》Store -》ReactView





一、准备工作
1、初始化
 npm init
2、安装react
 npm install react react-dom --save
3、安装转码工具
 npm install browserify babelify babel-cli babel-preset-es2015 babel-preset-react --save-dev
4、在项目根目录下创建目录src源文件
5、打开package.json，在scripts中添加以下转码命令
 "compile":"babel --presets react,es2015 src -d dest",
6、在src目录下新建Test.js文件，测试下环境
 执行命令 npm run compile

7、然后在做浏览器的编译，还是在package.json文件中scripts中加入
  "browser":"browserify src/Test.js -o build.js -t [ babelify --presets [react es2015] ]",
  执行命令 npm run browser






