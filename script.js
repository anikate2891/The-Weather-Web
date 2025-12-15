// Weather Dashboard Component
let input = document.querySelector('input');
let btn = document.querySelector('button');
let p = document.querySelector('p');

async function getWeather(city) {
    try {
        let apikey = '37bab1162e38d835b87c00641ec3263d';
        let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

        if (!rawData.ok) {
            throw new Error('Network response was not ok');
        }

        let realdata = await rawData.json();
        let temp = realdata.main.temp;

        if (temp < 0) {p.textContent = `Freezing weather: ${temp}°C.`}
        else if(temp > 35){p.textContent = `Hot weather: ${temp}°C.`}
        else{p.textContent = `The temperature in ${city} is ${temp}°C.`}

    } catch (err) {
        p.textContent = 'City not found';
    }
    
};

btn.addEventListener('click', () => {
    getWeather(input.value);
});
