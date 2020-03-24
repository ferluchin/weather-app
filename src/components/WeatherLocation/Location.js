import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


import Logo from './../icons/kiwi.svg';
// import Logo from "https://s.cdpn.io/3/kiwi.svg";


const Location = ({ city }) => {



    return (
        <div className="location-cont">
            <h1>


                {city}
            </h1>

        </div>

    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};
export default Location;