import React from 'react';
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



const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: '10',
    wind: '10 m/s',
}
const WeatherLocation = () => (


    < div className="weather-location-cont">

        <Location city={"Barcelona"} >

        </Location>

        <WeatherData data={data}></WeatherData>
    </div >

);

export default WeatherLocation;

