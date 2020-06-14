import * as map from 'lodash/map';

const arr = map(['3', '%'], (el)=>`<div class="text">${el}<div>`);

const COLOR = "red"
document.body.style.background = COLOR;
document.querySelector('#root').innerHTML = arr.join('');