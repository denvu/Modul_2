'use strict';

const banner = document.querySelector('.ads');
banner.remove();

const propsLists = document.querySelectorAll('.props__list');
const propsItems = document.querySelectorAll('.item');
const content = document.querySelectorAll('.content');
const img = document.querySelectorAll('.item__image');
const itemName = document.querySelectorAll('h2');
const itemTwo = document.querySelectorAll('.props__item_two');
const itemFour = document.querySelectorAll('.props__item_four');

itemFour[2].before(itemFour[5]);
itemTwo[7].after(itemTwo[8]);
itemTwo[8].after(itemTwo[9]);

content[3].append(propsLists[4]);
content[4].append(propsLists[3]);
itemName[5].after(itemName[2]);
itemName[4].after(itemName[5]);
img[2].after(itemName[4]);

const itemNameThree = itemName[3];
itemNameThree.textContent = 'This и прототипы объектов';

propsItems[3].after(propsItems[0]);

console.log(propsItems);
