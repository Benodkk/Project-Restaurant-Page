function menuPage(){
    const content = document.querySelector('#content')
    content.classList.add('menuPositions')


    const menuHeader = document.createElement('h1')
    content.appendChild(menuHeader)
    menuHeader.textContent="Menu"

    const startersHeader = document.createElement('h2')
    content.appendChild(startersHeader)
    startersHeader.textContent="Starters"


    const position1 = document.createElement('div')
    content.appendChild(position1)
    position1.classList.add('position')
 
    const meal1 = document.createElement('div')
    position1.appendChild(meal1)
    meal1.textContent='Fries'

    const price1 = document.createElement('div')
    position1.appendChild(price1)
    price1.textContent='15$'


    const position2 = document.createElement('div')
    content.appendChild(position2)
    position2.classList.add('position')
 
    const meal2 = document.createElement('div')
    position2.appendChild(meal2)
    meal2.textContent='Beef Fries'

    const price2 = document.createElement('div')
    position2.appendChild(price2)
    price2.textContent='18$'


    const position3 = document.createElement('div')
    content.appendChild(position3)
    position3.classList.add('position')
 
    const meal3 = document.createElement('div')
    position3.appendChild(meal3)
    meal3.textContent='Veggie Freis'

    const price3 = document.createElement('div')
    position3.appendChild(price3)
    price3.textContent='12$'


    const position4 = document.createElement('div')
    content.appendChild(position4)
    position4.classList.add('position')
 
    const meal4 = document.createElement('div')
    position4.appendChild(meal4)
    meal4.textContent='nuggets'

    const price4 = document.createElement('div')
    position4.appendChild(price4)
    price4.textContent='15$'


    const mainsHeader = document.createElement('h2')
    content.appendChild(mainsHeader)
    mainsHeader.textContent="Mains"


    const position5 = document.createElement('div')
    content.appendChild(position5)
    position5.classList.add('position')
 
    const meal5 = document.createElement('div')
    position5.appendChild(meal5)
    meal5.textContent='Steak and Fries'

    const price5 = document.createElement('div')
    position5.appendChild(price5)
    price5.textContent='50$'


    const position6 = document.createElement('div')
    content.appendChild(position6)
    position6.classList.add('position')
 
    const meal6 = document.createElement('div')
    position6.appendChild(meal6)
    meal6.textContent='Chicken with Apple'

    const price6 = document.createElement('div')
    position6.appendChild(price6)
    price6.textContent='50$'

    
    const position7 = document.createElement('div')
    content.appendChild(position7)
    position7.classList.add('position')
 
    const meal7 = document.createElement('div')
    position7.appendChild(meal7)
    meal7.textContent='Eggs with pork'

    const price7 = document.createElement('div')
    position7.appendChild(price7)
    price7.textContent='20$'


    const position8 = document.createElement('div')
    content.appendChild(position8)
    position8.classList.add('position')
 
    const meal8 = document.createElement('div')
    position8.appendChild(meal8)
    meal8.textContent='Patato with Tomato'

    const price8 = document.createElement('div')
    position8.appendChild(price8)
    price8.textContent='100$'


    const position9 = document.createElement('div')
    content.appendChild(position9)
    position9.classList.add('position')
 
    const meal9 = document.createElement('div')
    position9.appendChild(meal9)
    meal9.textContent='Burger with meat'

    const price9 = document.createElement('div')
    position9.appendChild(price9)
    price9.textContent='120$'


    const dessertHeader = document.createElement('h2')
    content.appendChild(dessertHeader)
    dessertHeader.textContent="Mains"


    const position10 = document.createElement('div')
    content.appendChild(position10)
    position10.classList.add('position')
 
    const meal10 = document.createElement('div')
    position10.appendChild(meal10)
    meal10.textContent='Chocolate with bobo'

    const price10 = document.createElement('div')
    position10.appendChild(price10)
    price10.textContent='20$'


    const position11 = document.createElement('div')
    content.appendChild(position11)
    position11.classList.add('position')
 
    const meal11 = document.createElement('div')
    position11.appendChild(meal11)
    meal11.textContent='Tiramisu with cream'

    const price11 = document.createElement('div')
    position11.appendChild(price11)
    price11.textContent='220$'


    const position12 = document.createElement('div')
    content.appendChild(position12)
    position12.classList.add('position')
 
    const meal12 = document.createElement('div')
    position12.appendChild(meal12)
    meal12.textContent='Apple pie'

    const price12 = document.createElement('div')
    position12.appendChild(price12)
    price12.textContent='30$'
}

export default menuPage