import restaurantImage from './assets/restaurant-2623071_640.jpg'
function createHomePage () {
    const homePageContent = document.getElementById("content")

    const homePageContainer = document.createElement("div")
    homePageContainer.classList.add("home-container")
    homePageContent.appendChild(homePageContainer)

    const header = document.createElement("h1")
    header.textContent = "Welcome to Roadhouse Restaurant"
    homePageContainer.appendChild(header)

    const paragraoh = document.createElement("p")
    paragraoh.textContent = "Where great food meets a cozy, inviting atmosphere. Whether you're here for a casual meal or a special occasion, our diverse menu and warm service are sure to make your experience memorable. Relax, enjoy, and let us take care of the rest!"
    homePageContainer.appendChild(paragraoh)

    const image = document.createElement("img")
    image.src = restaurantImage
    image.alt = "Restuarant image"
    homePageContainer.appendChild(image)

    
}
export default createHomePage