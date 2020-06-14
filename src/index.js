import * as map from 'lodash/map';
import image from './assets/imgs/main.png'
import './style.css'
import svg from './assets/svgs/sasha.svg'
const myImage = new Image();
myImage.src = image;
const arr = map(['3', '%'], (el)=>`<div class="text">${el}</div>`);
const el = document.createElement('div');
el.innerHTML = arr.join('');
el.prepend(myImage);
document.body.append(el);
document.querySelector('.text').style.background =  `url(${svg}) no-repeat`
