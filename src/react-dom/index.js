// react-dom/index.js
// render(1, document.getElementById("root"));
//{type:h1}
function render(ele, container) {
  //判断ele是文本节点或者数字
  if (typeof ele === "string" || typeof ele === "number") {
    container.appendChild(document.createTextNode(ele));
  }
  //渲染只有一个chidren的jsx元素
  //type h1  props {className:'a',chilreden:'hello world'}
  //obj:{name:'lili'} obj[name]
  let { type, props } = ele;
  //创建h1标签
  let element = document.createElement(type);
  //插入父节点
  container.appendChild(element);
  //如果children 不是数组 就把它转化成数组
  console.log(props);

  // ['hello word',{type:span,props:{}}]
  //遍历props 处理属性
  for (let key in props) {
    if (/on[A-Z][a-z]/.test(key)) {
      //事件 onClick key =>onClick fn =>props[key] react 使用事件委托到body 进行触发的
      let fn = props[key];
      let eventname = key.slice(2).toLowerCase();
      element.addEventListener(eventname, fn);
    } else if (key === "dangerouslySetInnerHTML") {
      //如果是dangerouslysetinnerhtml
      let htmlobj = props[key];
      //htmlobj {__html: "<span>这是插入的html</span>"}
      element.innerHTML = htmlobj.__html;
    } else if (key === "style") {
      //{fontSize: "16px", color: "red"}
      //fontSize -> font-size
      let styleobj = props[key];
      //第一种写法
      // for (let key in styleobj) {
      //   element.style[key] = styleobj[key];
      // }
      //第二种写法
      let stylestr = Object.keys(styleobj)
        .map(key => {
          let k = key.replace(/([A-Z])/, function() {
            return `-${arguments[1].toLowerCase()}`;
          }); ///["font-size:16px", "color:red"]
          return `${k}:${styleobj[key]}`;
        })
        .join(";");
      element.style.cssText = stylestr;
    } else if (key === "htmlFor") {
      element.setAttribute("for", props[key]);
    } else if (key === "className") {
      element.setAttribute("class", props[key]);
    } else if (key === "children") {
      console.log(props.children);
      props[key].forEach(child => {
        render(child, element);
      });
      //hello world  h1  递归渲染子节点
      // render(props[key], element);
    } else {
      element.setAttribute(key, props[key]);
    }
  }
}
export { render };
