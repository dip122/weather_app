const apikey = "58ed7eca15d99e9ee4506223ddb5ce11";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=mertic&q=";

const inputbox = document.querySelector('.inputbox');
const button = document.querySelector('.button');
const clear = document.querySelector('.clear');

clear.addEventListener('click',function(){
    location.reload();
})

button.addEventListener('click',function(){
    checkweather(inputbox.value);
    inputbox.value = "";
})

inputbox.addEventListener('keydown',function(e){
    if(e.key === 'Enter' && inputbox.value!=""){
        checkweather(inputbox.value);
        inputbox.value = "";
    }
})

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = parseFloat((data.main.temp - 273).toFixed(2)) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";
}
