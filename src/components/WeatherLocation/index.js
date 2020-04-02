import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
// one
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from "../../constants/weathers";

const location = "Buenos Aires, ar"
const api_key = "04968eedfe93f36da09f2b3c3338d1f2";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;

    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {

            return resolve.json();

        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather
            });
        });



    }
    render() {
        const { city, data } = this.state;
        return (
            < div className="weather-location-cont">
                <Location city={city} >      </Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar </button>
            </div >
        );
    }
}

export default WeatherLocation;

