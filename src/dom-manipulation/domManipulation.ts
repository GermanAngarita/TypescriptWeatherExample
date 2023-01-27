import { DayOfWeek, WeatherIcon, WeatherIcontype, WeatherResponse } from "../model/weatherResponse";

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById("button-location");
const WeatherLocationInput: HTMLInputElement|any = document.getElementById("weather-location-input");
const WeatherIconPng = document.getElementById("weather-icon");
const DateDateName = document.getElementById("date-dayname");
const DateDay = document.getElementById("date-day");
const LocationText = document.getElementById("location-text");
const WeatherTemp = document.getElementById("weather-temp");
const WeatherDesc = document.getElementById("weather-desc");

const TextTempMax = document.getElementById("text-temp-max");
const TextTempMin = document.getElementById("text-temp-min");
const TextHumidity = document.getElementById("text-humidity");
const TextWind = document.getElementById("text-wind");


// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse) :void => {
    if (TextTempMax) TextTempMax.textContent = weather.main.temp_max.toString() + " °C";
    if (TextTempMin) TextTempMin.textContent = weather.main.temp_min.toString() + " °C";
    if (TextHumidity) TextHumidity.textContent = weather.main.humidity.toString() + " %";
    if (TextWind) TextWind.textContent = weather.wind.speed.toString() + " m/s";

    if (DateDateName) DateDateName.textContent = getDate();
    if (DateDay) DateDay.textContent = getDayOfWeek();
    if (LocationText) LocationText.textContent = weather.name;

    if (WeatherTemp) WeatherTemp.textContent = weather.main.temp.toString() + " °C";
    if (WeatherDesc) WeatherDesc.textContent = weather.weather[0].main;

    if (weather.weather[0].icon) {
        changeWeatherIcon(weather.weather[0].icon)
    }
}

// TODO: Get the city from the input element
export function getCity(): string {
    if (WeatherLocationInput) {
        const city = (WeatherLocationInput as HTMLInputElement).value;

        if (city) {
            return city
        } else {
            WeatherLocationInput.value = "Bogotá";
            return "Bogotá"
        }
        
    } else {
        return "Bogotá";
    }
    
}

function getDayOfWeek(): string {
    let day = new Date();
    return DayOfWeek[day.getDay()];
}

function getDate(): string {
    let date = new Date();
    return date.toLocaleDateString("es-ES");
}

function changeWeatherIcon(weatherImageRef: string) {
    const weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    const mappedWeather = weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon["01d"];
    if(typeof mappedWeather[0] === "string") {
        if (WeatherIconPng) (WeatherIconPng as HTMLImageElement).src = mappedWeather;
    }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');    
    }
}

function isValidImage(value: string): value is WeatherIcontype {
    return value in WeatherIcon;
}