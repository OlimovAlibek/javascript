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




/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.
*/

const jobs = document.querySelector('.jobs')
const card = document.querySelector('.job-card')
const cardClone = card.cloneNode(true);
const cardCloned = "<div class='job-card'><h3>Software Engineer</h3><h4>$50,0000</h4><ul><li>Node.js</li><li>Git</li><li>AWS</li></ul></div>"
jobs.insertAdjacentHTML('beforeEnd', cardCloned)
jobs.insertAdjacentHTML('beforeEnd', cardCloned)
jobs.insertAdjacentHTML('beforeEnd', cardCloned)





/*
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/

const card2 = document.querySelector('.jobs .job-card:nth-child(1) h3')
card2.innerText = 'JS Developer'

const card3 = document.querySelector('.jobs .job-card:nth-child(2) h3')
card3.innerText = 'Java Dev'

const card4 = document.querySelector('.jobs .job-card:nth-child(3) h3')
card4.innerText = 'Python Dev'





/*
  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate how many jobs you have listed in the 'Jobs section'.
*/

document.querySelector('#jobs-listed span').innerText = (Array.from(document.querySelectorAll('.job-card')).length)



/*
  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text that has been provided in the search. Check for the search text in the job title heading.
*/

const input = document.querySelector('#search')
const jobss = Array.from(document.querySelectorAll('.job-card'))

input.addEventListener('keyup', (e) => {
  const letter = e.target.value.toLowerCase()
  
  jobss.forEach(job => {
    const jobTitle = job.querySelector('h3').innerText.toLowerCase()
  if (!jobTitle.includes(letter)) {
    job.style.display = 'none'
  }
    else {
      job.style.display = 'block'
    }
  })
  
} )




/*
  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/

const btn = document.querySelector('button')

btn.addEventListener('click', (event) => {
  event.preventDefault()
  jobss.forEach(job => {job.style.display = 'block'})
  input.value = ''
  
})
