## react 课程

### 创建 react 项目的 2 种方式

1. npx create-react-app '项目名称'
2. 全局安装 creat-react-app

- npm install create-react-app -g
- create-react-app '项目名称'

### react 主要包含 2 个包 react react-dom

1. document.createTextNode() 创建文本节点
2. jsx 语法 默认会使用大写 React 这个变量  因为 jsx 语法会自动调用 React.creatElenment 这个方法
3. 用对象来描述元素叫做虚拟dom  creatElement 方法返回的是一个 react元素/虚拟dom (对象)

### jsx 语法以及 jsx 写法特点

1. jsx 语法糖  js + xml(html) jsx 写 js 使用{} <> 表示 html 标签
2. class => className class 关键字
3. label for => htmlFor
4. style => 对象形式 {fontSize:16px;color:red}

```jsx
// style 写法示例 第一个大括号 表示js 第二个大括号表示对象
<h1 className="a" style={{ fontSize: "16px", color: "red" }} />
```

5. innerHtml => dangerouslySetInnerHTML v-html xss 攻击 可以信赖的内容

```jsx
<div dangerouslySetInnerHTML={{ __html: "<span>这是插入的html</span>" }} />
```

6. {} 取值放 js 代码 必须要有返回值
7. 事件 事件名 on 大写开头的名字 后面跟的是方法 驼峰命名

```jsx
function fn() {
  alert(1);
}
let ele = <div onClick={fn}>点击我</div>;
let ele = <div onMouseOver={fn}>点击我</div>;
```

8. jsx 语法里面写注释只能采用 {}

```js
//多行注释
{
  /** 这个是注释 */
}
//单行注释 单行注释必须换行
{
  //这是注释
}
```

9. jsx 元素只能有一个根元素，当不想有父元素生成的时候，可以用空标签进行包裹

```jsx
//例子  <> 和  <React.Fragment> 等价
 <>
   <div>div1</div>
   <div>div2</div>
 <>
```

10. react render 方法可以渲染数组

```jsx
//例子
let ele = [<div onClick={fn}>点击我</div>, <span>这是span元素</span>];
render(ele, container);
```

### csstext 的用法

```html
<div id="root">111</div>
<script>
  root.style.cssText = "color:red;font-size:60px";
</script>
```

### 对象新增的方法

```js
Object.keys({ name: "lili", age: 3 }) //es5
//结果
 [ "name", "age"];

Object.values({ name: "lili", age: 3 })
  //结果
["lili", 3]
;
Object.entries({ name: "lili", age: 3 })
  //结果
[["name", "lili"], ["age", 3]]
```

### 数组转字符串 join 字符串转数组 split

```js
"1,2,3,4".split()[
  //结果  [1,2,3,4]
  (1, 2, 3, 4)
].join();
("1,2,3,4");
```

### 使用展开运算符和 Object.assign 进行对象的拷贝 浅拷贝 for in 一层也是浅拷贝(注意：如果对象只有一层也叫浅拷贝) 
```js
let obj = { name: "lili", a: { b: 1 } };
let obj1 = { ...obj };
console.log(obj.a === obj1.a); //结果true
//object.assign 合并对象 浅拷贝
let obj = { name: "lili", a: { b: 1 } };
let obj1 = Object.assign({}, obj); //完全等价于 {...obj}
console.log(obj1);
//案例2
let obj = { name: "lili", a: { b: 1 } };
let obj1 = { age: 3, name: "lilei" };
//target 目标对象  source  来源对象  如果有相同的key 来源的(后面的)key会覆盖(前面的)目标的key
let obj2 = Object.assign(obj, obj1);
console.log(obj2); //name lilei
```

### 对象的深拷贝(为了不改变原数据结构)

```js
// 方案1 缺点不能拷贝函数、undefined等
let obj = { a: 1, b: { name: "xiaoming" } };
let cloneobj = JSON.parse(JSON.stringify(obj));
//方案2 递归拷贝 
//核心逻辑  for in 循坏对象 如果对象的key 继续是对象的时候需要递归 
function deepClone(obj) {
  //处理特殊情况
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  // 对象或者数组  是数组new 创建数组的实例 是对象new 创建对象的实例
  let cloneobj = new obj.constructor();
  for (let key in obj) {
    //不拷贝原型上的属性
    if (obj.hasOwnProperty(key)) {
      cloneobj[key] = deepClone(obj[key]);
    }
  }
  return cloneobj;
}
```

### 数组新增的方法

```js
 Array.from(arguments)  //把不是数组的内容转成数组
 等价于  [].slice.call(arguments)
 //例子
 Array.from('1,2,3,4')
 //例子 利用new Set 实现数组去重
  let arr = [1, 2, 3, 3, 4, "1", "2"];
  let setary = new Set(arr);
   Array.from(setary)
```
```html
 <!-- dom 类数组转数组 -->
 <div id="app">
      <span></span>
      <span></span>
      <span></span>
    </div>
<script>
      let spans = document.querySelectorAll("span");
      let spanary = Array.from(spans);
      console.log(spanary);
  </script>
```
### 判断数据类型的4种方式（必须会）
1. Object.prototype.toString.call 
2. instanceof 
3. typeof 
4. constructor 
### 面试题
```js 
null instanceof Object //false
typeof null  //object 
```  