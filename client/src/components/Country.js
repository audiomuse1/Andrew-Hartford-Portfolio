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
                    <th scope="col">#</th>
                    <th scope="col">Chemical Name</th>
                    <th scope="col">Chemical Formula</th>
                    <th scope="col">CAS Number</th>
                    <th scope="col">Product ID</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{this.props.country.continent}</td>
                    <td>{this.props.country.capital}</td>
                    <td>{this.props.country.leader}</td>
                    <td>{this.props.country.population}</td>
                    <td>{this.props.country.currency}</td>
                    </tr>
                </tbody>
                </table>
                </div>


            </div>
        );
    }
}

export default Country;