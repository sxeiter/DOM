'use strict';
//cloneNode клонирует
//after вставить после списка
//before вставить перед списком
//append вставить в конец списка
//prepend вставить в начало списка
//replaceWith меняет местами
//remove удалить элемент
const ads = document.querySelector('.ads');
const propsItemFour = document.querySelectorAll('.props__item_four');
const items = document.querySelectorAll('.item');
const itemTitles = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');
const content = document.querySelectorAll('.content');
const itemTwoFalse = document.querySelectorAll('.item_six .props__item_two');
const itemTwoTrue = document.querySelectorAll('.item_two .props__item_two');

items[4].before(items[0]);


propsItemFour[2].after(propsItemFour[5]);
itemTwoTrue[7].after(itemTwoFalse[1]);
itemTwoTrue[7].after(itemTwoFalse[0]);

const cloneTitleOne = itemTitles[1].cloneNode(true);
const cloneTitleFour = itemTitles[3].cloneNode(true);
const cloneTitleFive = itemTitles[4].cloneNode(true);
console.log(cloneTitleOne);
console.log(cloneTitleFour);
console.log(cloneTitleFive);

const h2 = document.createElement('h2');
const textTitle = document.createTextNode('This и прототипы объектов');
h2.append(textTitle);
itemTitles[2].replaceWith(h2);


itemTitles[1].remove();
itemTitles[3].remove();
itemTitles[4].remove();
propsList[2].before(cloneTitleFour);
propsList[4].before(cloneTitleFive);
propsList[5].before(cloneTitleOne);


const clone = propsList[3].cloneNode(true);
propsList[3].replaceWith(propsList[4]);
content[4].append(clone);

ads.remove();


