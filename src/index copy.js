 import React from "react";
import { render } from "react-dom";
let str = alert('111');
let ele = <div dangerouslySetInnerHTML={{ __html: str }} />;
render(ele, window.root);
 
 

