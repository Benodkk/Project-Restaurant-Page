function homePage(){
    const content = document.querySelector('#content')

    const homeHeader = document.createElement('h1')
    content.appendChild(homeHeader)
    homeHeader.textContent="Pico Bello Ristorante"

    const establish = document.createElement('h3')
    content.appendChild(establish);
    establish.textContent = 'est. in 1969'

    const restaurantImg= document.createElement('img')
    restaurantImg.src = '../src/restaurant.jpg'
    content.appendChild(restaurantImg)

    const photoBy = document.createElement('div')
    content.appendChild(photoBy)
    photoBy.classList.add('photoBy')
    photoBy.textContent=`photo by Cassidy Mills on Unsplash`;

}

export default homePage