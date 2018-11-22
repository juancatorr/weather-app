import {url_base_weather,api_key , url_base_weather_forecast} from './../constants/apiUrl'

export const getUrlWahterByCity = city =>{

    const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;

    return api_weather;
}

 export const getUrlForeCastByCity = city =>{

    const api_weather = `${url_base_weather_forecast}?q=${city}&appid=${api_key}&units=metric`;

    return api_weather;
}
