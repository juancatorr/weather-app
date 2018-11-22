import {url_base_weather,api_key } from './../constants/apiUrl'

const getUrlWahterByCity = city =>{

    const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;

    return api_weather;
}

export default getUrlWahterByCity;