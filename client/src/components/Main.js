import React from "react";
import CountriesContainer from "../containers/CountriesContainer";
import CreateCountriesContainer from "../containers/CreateCountriesContainer";
import './Main.css';

function Main() {
    return (
        <div>
            <h1 id="welcome">Andrew Hartford</h1>
            <CountriesContainer />
            <CreateCountriesContainer />
        </div>
    );
}

export default Main;