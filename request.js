const key = '8a8ff1e6341fc98f5a4aa59f429b90f0';

//const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=8a8ff1e6341fc98f5a4aa59f429b90f0';

//fetch(baseURL).then((data) => {console.log('response', data.json())})

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call(promise call)
    const response = await fetch(baseURL+query);

    //promise data
    const data = await response.json();
    return data;
} 
