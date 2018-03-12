import React from "react";
import './CreateCountries.css';

class CreateCountries extends React.Component {
    constructor() {
        super();
        this.state = {
            country: {
                continent: "",
                capital: "",
                leader: "",
                population: "",
                currency: "",
            }
        }
    }

    render() {
        return (
            <div>
                <div class="form">
                    <h2 id="title">Enter Chemical Below:</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.addCountry) {
                            this.props.addCountry(this.state.country);
                        }
                    }}>
                    <div>
                   <input placeholder="Chemical Name" onChange={(e) => {
                            const country = {continent: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="Chemical Formula" onChange={(e) => {
                            const country = {capital: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>   
                    <div>
                    <input placeholder="CAS Number" onChange={(e) => {
                            const country = {leader: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="Product ID" onChange={(e) => {
                            const country = {population: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="Price" onChange={(e) => {
                            const country = {currency: e.target.value};
                            this.setState({
                                country: Object.assign(this.state.country,country)
                            });
                        }} />
                    </div>
                    <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCountries;