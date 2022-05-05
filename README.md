

# Random Profile API



This project is for **educational** porpuses only. 

Site published at: https://belute.github.io/Random_Profile_API/


## Project features


-   CSS
-   JS
-   HTML

## Authors

Justinas: [Github](https://github.com/Belute)

## Code sample



```css
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
  margin: 0;
  text-align: center;
  margin-top: 60px;
  gap: 15px;
  margin-left: 15px;;
  
}
```
```js
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

}

function appendCard(card) {

    let parent = document.querySelector(`main`);
    parent.append(card);


}



```
```html

        <div id=card class="card">
            <img class="img" src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="John" width=250px></img>
            <p>John Doe</p>
            <p>Age:</p>
            <p>Location:</p>
            <p>Email:</p>
        </div>
```
