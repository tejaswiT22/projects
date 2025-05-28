let weather = {
     "apikey":"e5be73b444dc63eae6c4dff159ec67d2",
     fetchweather: function (city) {
         fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +"&units=metric&appid="
            + this.apikey
         )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

     },
    displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText =temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Windspeed:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage= "url('https://source.unsplash.com/random')"
    },
    search: function() {
      this.fetchweather(document.querySelector(".search-bar").value);
    }
};   

document.querySelector(".search button").addEventListener("click",function (){
 weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function (event){
    if(event.key == "enter"){
        weather.search();
    }
});

weather.fetchweather("Hyderabad");


