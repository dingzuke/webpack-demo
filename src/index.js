import _ from "lodash";
import './style.css';
import Icon from './assets/icon.png';
import {printMe, test} from './print.js';

function component() {
    console.log('环境',process.env.http_env)
    // 显示图片。
    const myIcon = new Image();
    myIcon.src = Icon;
    document.body.appendChild(myIcon);

    // 显示图标 font
    const divDom = document.createElement('div');
    var insertText = `<div><h2>图标</h2><span class="iconfont">&#xe600;</span><span class="iconfont">&#xe791;</span></div>`;
    divDom.innerHTML=(insertText);
    document.body.appendChild(divDom);
    
    // 点击事件
    const btn = document.createElement('button');
    btn.innerHTML = '点我看控制台输出1';
    btn.onclick = printMe;
    document.body.appendChild(btn);

    // lodash创建一个div class="Hello"
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  document.body.appendChild(component());
  