// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3d02af4cd7msh6aa7ae6f9b93c67p1e8b94jsnbfa8f5f339cc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {

    cityName.innerHTML = city;


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            console.log(city);
            temp.innerHTML = response.temp;
            wind_speed.innerHTML = response.wind_speed;
            humidity.innerHTML = response.humidity;
            console.log(response.temp, response.wind_speed, response.humidity);
            console.log(temp.innerHtml, wind_speed.innerHtml, humidity.innerHtml);
        })
        .catch(err => console.error(err));
}


// let submitBtn = document.getElementById("submitBtn");
// let cityName = document.getElementById("search")
submitBtn.addEventListener('click', (e) => {

    getWeather(search.value);
})
getWeather('Delhi');

// try {
    // const response = await fetch(url, options);
    // const result = await response.text();
// console.log(result);
// } catch (error) {
// console.error(error);
// }
