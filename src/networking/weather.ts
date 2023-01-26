import { WeatherResponse } from "../model/weatherResponse";


// const city = 'Example';



// TODO: Create an async function with an argument called city to return the that of the endpoint

export const getWeather = async ( city: string ) => {

    const API_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`;

    const init: RequestInit = {
        method: "GET"
    }

    try {
        const response = await fetch(API_CURRENT, init )
        return response.json();
    } catch (error) {
        return error
    }
}
