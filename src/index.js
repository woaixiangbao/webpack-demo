// import {cube} from './math.js';
import _ from 'lodash';

console.log('现在的环境变量是：'+ process.env.NODE_ENV);

function component() {
  var element = document.createElement('pre');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  })
  
  return element;
  
}

document.body.appendChild(component());

