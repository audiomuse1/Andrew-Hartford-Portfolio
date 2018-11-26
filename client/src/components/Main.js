import React from "react";
import CountriesContainer from "../containers/CountriesContainer";
import CreateCountriesContainer from "../containers/CreateCountriesContainer";
import './Main.css';

function Main() {
    return (
        <div>
            <h1 id="welcome">Bumperactive.com</h1>



            <div class="container">
    <div class="row">
      <div class="col-sm">

        <img src="https://www.usnews.com/img/college-photo_6539_256x256mm.jpg"/>
        <img src="https://www.usnews.com/img/college-photo_6539_256x256mm.jpg"/>
      </div>
      </div>
      </div>







            <CountriesContainer />
            <CreateCountriesContainer />
        </div>
    );
}

export default Main;