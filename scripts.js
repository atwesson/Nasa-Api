
// NASA API KEY IffEYEONmdLUx38zdpd7xSyxmJf9GIqQjGuSBVG4
const key = "IffEYEONmdLUx38zdpd7xSyxmJf9GIqQjGuSBVG4";
let starWarsPeopleList = document.querySelector('ul');
let starWarsPeopleList2 = document.querySelector('.container');
let Image = document.querySelector('.card-img-top');
let Text = document.querySelector('.card-text')


fetch("https://api.nasa.gov/planetary/apod?api_key=IffEYEONmdLUx38zdpd7xSyxmJf9GIqQjGuSBVG4")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let listItem = document.createElement('li');
            listItem.innerHTML = "<img src='" + json.url + "'><p>"+json.explanation + "</p>";
            starWarsPeopleList.appendChild(listItem);
        
    })
fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=IffEYEONmdLUx38zdpd7xSyxmJf9GIqQjGuSBVG4")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let random = Math.floor(Math.random() * 100);
            Image.src = json.photos[random].img_src;
            Image.alt =  json.photos[random].img_src;
            Text.innerHTML = json.photos[random].rover.name + " " + json.photos[random].earth_date 
    })
