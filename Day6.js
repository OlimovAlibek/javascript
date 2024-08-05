/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const paragraph = document.querySelector('p')
paragraph.innerHTML = paragraph.innerText.split(' ').map(word => word.length > 8 ? `<span style="background-color:red">${word}</span>` : word).join(' ')





/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

const link = document.createElement('a')
link.href = 'https://OlimovAlibek.uz'
link.innerText = 'It is my website'
document.body.appendChild(link)

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const paragraph1 = document.querySelector('p')
paragraph1.innerHTML = paragraph1.innerText.split('.').join('<p></p>')



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const paragraph3 = document.querySelector('p')
const wordCount = paragraph3.innerText.split(' ').length
const wordCountTag = document.createElement('p')
wordCountTag.innerText = wordCount + " words" 
document.body.insertBefore(wordCountTag, paragraph3)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/


Array.from(document.querySelectorAll('p')).forEach(p => {p.innerHTML = p.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲')})
