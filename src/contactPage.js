function contactPage(){
    const content = document.querySelector('#content')

    const contactHeader = document.createElement('h1')
    content.appendChild(contactHeader)
    contactHeader.textContent="Contact us!"

    const number = document.createElement('h3')
    content.appendChild(number)
    number.textContent="tel.: +48 690 590 490"

}

export default contactPage