/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/

const paragraphs = document.querySelectorAll("p")
paragraphs[0].insertAdjacentHTML("beforeEnd", paragraphs[1].innerText)
paragraphs[1].remove()





/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/

const menu = document.querySelector(".menu ul li")
const menuFont = parseInt(window.getComputedStyle(menu).getPropertyValue("font-size"))
document.querySelector('p').style['font-size'] = `${menuFont/2}px`




/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/

const service = document.querySelector('ul li:nth-child(3)')
document.querySelector("ul li:nth-child(1)").insertAdjacentHTML("afterEnd", service.innerText)
service.remove()

/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/

const menuu = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.innerText = 'FAQs'
menuu.appendChild(newLi)




/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/

const hoverEffect = (event) => {
  const element = event.target;
  element.style['font-size'] = "20px"
}

const normal = (e) => {
  const element = event.target;
  element.style['background-color'] = 'blue'
}

Array.from(document.querySelectorAll('li')).forEach(li => {
  li.addEventListener('mouseover', hoverEffect);
  li.addEventListener('mouseleave', normal)
})
