import { SUN } from './../constants/wheaters';
import { CLOUD } from './../constants/wheaters';
import { RAIN } from './../constants/wheaters';
import { SNOW } from './../constants/wheaters';
import { THUNDER } from './../constants/wheaters';
import { DRIZZLE } from './../constants/wheaters';

const getTemp = kelvin => {

    return Number((kelvin).toFixed(0));
}

const getWeatherState = (weather) => {
    const { id } = weather;
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    }else{
        return CLOUD;
    }
}

const trasformWather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed}m/s`,
    }
    return data;
}

export default trasformWather;