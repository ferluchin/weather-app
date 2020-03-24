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

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
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
    handleUpdateClick = () => {
        console.log("actualizado");

        this.setState({
            city: 'Buenos Aires !!!',
            data: data2,
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

