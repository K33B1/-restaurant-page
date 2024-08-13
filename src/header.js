import createHomePage from "./homePage";
import createMenuPage from "./menuPage";
import createContactPage from "./contactPage";

function createHeader() {
    const header = document.getElementById("header");

    const unorderedList = document.createElement("ul");
    header.appendChild(unorderedList);

    const list1 = document.createElement("li");
    const button1 = document.createElement("button");
    button1.textContent = "Home";
    list1.appendChild(button1);
    unorderedList.appendChild(list1);

    const list2 = document.createElement("li");
    const button2 = document.createElement("button");
    button2.textContent = "Menu";
    list2.appendChild(button2);
    unorderedList.appendChild(list2);

    const list3 = document.createElement("li");
    const button3 = document.createElement("button");
    button3.textContent = "Contact";
    list3.appendChild(button3);
    unorderedList.appendChild(list3);

    button1.addEventListener("click", () => {
        clearContent();
        createHomePage();
    });

    button2.addEventListener("click", () => {
        clearContent();
        createMenuPage();
    });

    button3.addEventListener("click", () => {
        clearContent();
        createContactPage();
    });
}

function clearContent() {
    const content = document.getElementById("content");
    if (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export default createHeader;
