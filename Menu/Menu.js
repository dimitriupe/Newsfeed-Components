/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Step 1

function menuCreator(menuItems) {

  // Step 2

  const menuDiv = document.createElement('div');
  const unorderedlist = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  const menuItem2 = document.createElement('li');
  const menuItem3 = document.createElement('li');
  const menuItem4 = document.createElement('li');
  const menuItem5 = document.createElement('li');
  const menuItem6 = document.createElement('li');

  menuDiv.appendChild(unorderedlist);

  unorderedlist.appendChild(menuItem1);
  unorderedlist.appendChild(menuItem2);
  unorderedlist.appendChild(menuItem3);
  unorderedlist.appendChild(menuItem4);
  unorderedlist.appendChild(menuItem5);
  unorderedlist.appendChild(menuItem6);

  menuDiv.classList.add('menu');

  // Step 3

  const menuBtn = document.querySelector('.menu-button');

  // Step 4

  menuBtn.addEventListener('click', () => {
    const menuDiv1 = document.querySelector('.menu');
    menuDiv1.classList.toggle('menu--open');
  });

  menuItem1.textContent = menuItems[0];
  menuItem2.textContent = menuItems[1];
  menuItem3.textContent = menuItems[2];
  menuItem4.textContent = menuItems[3];
  menuItem5.textContent = menuItems[4];
  menuItem6.textContent = menuItems[5];

  //Step 5

  return menuDiv;
}

// Step 6

const head = document.querySelector('.header');
head.appendChild(menuCreator(menuItems));

