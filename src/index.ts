// Style import
import './styles/main.scss';

// Import the API request method
import {getWeather} from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

// Create an async function to call the API method
export const getCurrentWeatherAndShow = async () => {
    const city = getCity();

    console.log("getCurrentWeatherAndShow: city: ", city)
    if (city) {
        try {
            const dataWeather = await getWeather( city );
            updateInteface( dataWeather );
        } catch (error) {
            console.log("Error: ", error)
        }
        
    }
}

// Add an event listener to the button
getCurrentWeatherAndShow();
if (buttonClick) buttonClick.addEventListener('click', getCurrentWeatherAndShow);



