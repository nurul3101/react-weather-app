import axios from 'axios'

const API_KEY = '4ea9631133bfaf85ec749fbd2faf5b10';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},IN`;
    const request = axios.get(url);

    //console.log("Request",request);
    return{
        type:FETCH_WEATHER,
        payload:request
    };

}