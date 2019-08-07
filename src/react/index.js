//为了不修改传递过来的props属性
/* { ele 就是这个对象  
  type: "h1",
  props: {className: "a",b:"1",chidren:'hello world'}
}**/
function reactElement(type, props) {
  return { type, props };
}
function createElement(type, config = {}, chidren) {
  //把传递过来的对象克隆到props对象上面
  let props = {};
  //config  传递过来的对象
  for (let propname in config) {
    props[propname] = config[propname];
  }
  //Array.from  把不是数组数据转成数组
  //args 就是children的长度
  let args = Array.from(arguments).slice(2);
  if (args.length === 1) {
    props.children = args;
  } else {
    props.children = args;
  }
  return reactElement(type, props);
}
export default {
  createElement
};
