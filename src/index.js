console.log ('dupskssssssssssdadadso')
import './style.css';
import homePage from './homePage'
import menuPage from './menuPage'
import contactPage from './contactPage'

menuPage()

const content = document.querySelector('#content')
const buttons= document.querySelector('#buttons')

const homeButton = document.createElement('button')
buttons.appendChild(homeButton)
homeButton.textContent="HOME"
homeButton.classList.add('button')

const menuButton = document.createElement('button')
buttons.appendChild(menuButton)
menuButton.textContent="MENU"
menuButton.classList.add('button')

const contactButton = document.createElement('button')
buttons.appendChild(contactButton)
contactButton.textContent="CONTACT"
contactButton.classList.add('button')

function clearContent(){
    content.textContent=''
}



homeButton.addEventListener('click', () => {
    clearContent()
    homePage()
})

menuButton.addEventListener('click', () => {
    clearContent()
    menuPage()
})

contactButton.addEventListener('click', () => {
    clearContent()
    contactPage()
})



