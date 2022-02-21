
function createCard(imageUrl, namelastname, ages, locationAdress, emails) {
    let img = document.createElement("img");
    img.className = "img";
    img.src = imageUrl;

    let nameSurname = document.createElement("p");
    nameSurname.textContent = namelastname;

    let year = document.createElement("p");
    year.textContent = ages;

    let adress = document.createElement("p");
    adress.textContent = locationAdress;

    let email = document.createElement("p");
    email.textContent = emails;

    let newCard = document.createElement("div");
    newCard.className = "card";

    newCard.append(img, nameSurname, year, adress, email);

    return newCard;

}

function appendCard(card) {

    let parent = document.querySelector(`main`);
    let arr = [];
    parent.append(card);


}


// function removeElementsByClass(elements) {
//     const elements = document.getElementsByClassName("card");
//     while (elements.length > 0) {
//         elements[0].parentNode.removeChild(elements[0]);
//     }
// }






async function getData() {
    const requestURL = `https://randomuser.me/api/`;
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    return data;

}


let test = document.getElementById("btn");

test.onclick = function () {
    console.log("labas")


    getData().then(data => {
        let { picture, name, dob, location, email } = data.results[0];
        name = `${name.title}, ${name.first}, ${name.last}`;
        location = `${location.city} ${location.street.number} ${location.street.name}`;
        picture = picture.large;
        location = location;
        email = email;
        dob = dob.age;
        let card = createCard(picture, name, dob, location, email);
        appendCard(card);
        console.log(card)

    });



}

let testt = document.getElementById("btn1");

testt.onclick = function () {

    console.log("labas")
    document.querySelector(".card").remove();


}



