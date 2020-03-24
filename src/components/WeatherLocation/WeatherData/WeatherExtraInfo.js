import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <div>
            {/* información extra */}
            <span className="extra-info-text">{`Humedad: ${humidity} % - `} </span>
            <span className="extra-info-text">{`Vientos: ${wind} `} </span>
        </div>
    </div>
);

WeatherExtraInfo.propTypes = {

    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;
