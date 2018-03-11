import React, { Component } from "react";
import './Country.css';



class Country extends Component {

    componentDidMount() {

         
        this.props.getCountry(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                {/* <div className="max">Chemical Name: {this.props.country.continent}</div>
                <div>Chemical Formula: {this.props.country.capital}</div>
                <div>CAS Number: {this.props.country.leader}</div>
                <div>Product ID: {this.props.country.population}</div>
                <div>Price:{this.props.country.currency}</div> */}

                <div className="table-responsive">
                <table class="table">
                <thead>
                    <tr>
                    <th className="mat" scope="col">#</th>
                    <th className="mat" scope="col">Chemical Name</th>
                    <th className="mat" scope="col">Chemical Formula</th>
                    <th className="mat" scope="col">CAS Number</th>
                    <th className="mat" scope="col">Product ID</th>
                    <th className="mat" scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th className="mat" scope="row">1</th>
                    <td className="mat">{this.props.country.continent}</td>
                    <td className="mat">{this.props.country.capital}</td>
                    <td className="mat">{this.props.country.leader}</td>
                    <td className="mat">{this.props.country.population}</td>
                    <td className="mat">{this.props.country.currency}</td>
                    </tr>
                </tbody>
                </table>
                </div>


            </div>
        );
    }
}

export default Country;