import React from "react";
import './Countries.css';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Countries (props) {
    let countryDivs = props.countries.map((country, i) => {
        return (
            <div key={i}>
                <div id="country">{country.continent}</div>
                <button onClick={() => 
                props.deleteCountry(country._id)}>Delet\</button>
                <Link to={"/countries/" + country._id}>View Details</Link>

            </div>);
        });
        return (
            <div>
                {countryDivs}
            </div>
    );
}

Countries.propTypes = {
    countries: PropTypes.array
};

export default Countries;