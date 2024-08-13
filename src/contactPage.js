function createContactPage() {
    const content = document.getElementById("content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "123 Gourmet Lane, Food City, FC 45678";

    const phone = document.createElement("p");
    phone.textContent = "Phone: (555) 123-4567";

    const email = document.createElement("p");
    email.textContent = "Email: contact@roadhouserestaurant.com";

    const hours = document.createElement("p");
    hours.textContent = "Hours: Mon-Sun, 11:00 AM - 10:00 PM";

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(address);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);
    contactContainer.appendChild(hours);

    content.appendChild(contactContainer);

    
}

export default createContactPage;
