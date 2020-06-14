import * as map from 'lodash/map';
import image from './assets/imgs/main.png'
import './style.css'
import svg from './assets/svgs/sasha.svg'
const myImage = new Image();
myImage.src = image;
const arr = map(['','3', '%'], (el)=>`<div class="text">${el}</div>`);
document.querySelector('#root').innerHTML = arr.join('');
document.querySelector('#root').prepend(myImage);
document.querySelector('.text').style.background =  `url(${svg}) no-repeat`
