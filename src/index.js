import {cube} from './math.js';
import _ from 'lodash';

console.log('现在的环境变量是：'+ process.env.NODE_ENV);

function component() {
  console.log(
    _.join('1111', '2222', '3333!', '')
  );
  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!', 
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  return element;
}
document.body.appendChild(component());

