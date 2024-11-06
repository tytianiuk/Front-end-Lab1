import { addEventListener, addEventListenersForButtons } from './utils.js';

const variantElement = document.getElementById('variant-element');
const nextVariantElement = document.querySelector('.next-variant-element');
const imagesContainer = document.getElementById('container');
const buttons = document.querySelectorAll('button');

addEventListenersForButtons(buttons, imagesContainer);

addEventListener(variantElement);
addEventListener(nextVariantElement);
