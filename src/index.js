import { render } from "react-dom";
let React = {
  createElement: function(type,config={},children) {
   /// {className: "a"} config 
    //返回一个描述dom解构的对象
     let props = {}
      props = {...config}
      
     
  }
};
// let  ele1  = <h1>helloworld<span>span</span><span>222</span></h1>
let ele = React.createElement(
  "h1",
  {
    className: "a"
  },
  "hello world",
  React.createElement("span", null, "span")
);

/* { ele 就是这个对象   react元素/虚拟dom 
  type: "h1",
  props: {className: "a",children:'hello world'}
  2个children的时候  ["hello world", {…}]
}**/
console.log(ele);
render(ele, document.getElementById("root"));
