//Select form element
const form = document.querySelector("form");
//Select info div
const info = document.querySelector(".info");
//Select city text
const city_text = document.querySelector(".city_text");
//Select weather text
const city_weather = document.querySelector(".city_weather");
//Select temperature text
const temperature_text = document.querySelector(".info .temperature_text");
//Select card div
const card = document.querySelector(".card");
//Select time text
const time_image = document.querySelector("img.time");
//Select weather icon
const icon = document.querySelector(".icon img");


//Function works on submit
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    //Take city value from form
    const city = form.city.value.trim();
    
    setCity(city).then(data=>{
        setUI(data);
    });


    //Reset form after operations
    form.reset();


    //Store last information to local storage
    localStorage.setItem("city",city);

});

async function setCity(city)
{
    //Get city info
    const city_info = await getCity(city);
    //Get weather info
    const weather = getWeatherInfo(city_info.Key);


    return {
        city_info,
        weather
    }
}


async function setUI(data)
{
    //Get city info
    const city_info = data.city_info;
    //Get weather info
    const weather = await data.weather;

    //Set city text
    city_text.textContent=city_info.LocalizedName;
    //Set weather content(it will be used for weather icon)
    city_weather.textContent = weather.WeatherText;
    //Set temperature text
    temperature_text.textContent = weather.Temperature.Metric.Value;
    
    //Set weather icon image
    const iconSrc = "icons/"+weather.WeatherIcon+".svg";
    icon.setAttribute("src",iconSrc);

    let time_src = null;

    //Set time image (day or night)
    if(weather.IsDayTime==true)
    {
        time_src = "images/day.svg";
    }
    
    else
    {
        time_src = "images/night.svg";
    }

    time_image.setAttribute("src",time_src);

    if(card.classList.contains("d-none"))
    {
        card.classList.remove("d-none");
    }

}

//Show last city
if(localStorage.getItem("city"))
{
    setCity(localStorage.getItem("city"))
    .then(data=>{
        setUI(data);
    });
}