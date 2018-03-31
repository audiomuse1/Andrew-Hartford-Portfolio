import React, { Component } from "react";
import './Country.css';



class Profile extends Component {

    componentDidMount() {

         
        this.props.getProfile(this.props.match.params.id);
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
                    <th className="mat" scope="col">Name</th>
                    <th className="mat" scope="col">Location</th>
                    <th className="mat" scope="col">Email</th>
                    <th className="mat" scope="col">LinkedIn</th>
                    <th className="mat" scope="col">Birthday</th>
                    <th className="mat" scope="col">Bio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th className="mat" scope="row">1</th>
                    <td className="mat">{this.props.profile.name}</td>
                    <td className="mat">{this.props.profile.location}</td>
                    <td className="mat">{this.props.profile.email}</td>
                    <td className="mat">{this.props.profile.linkedin}</td>
                    <td className="mat">{this.props.profile.birthday}</td>
                    <td className="mat">{this.props.profile.bio}</td>
                    </tr>
                </tbody>
                </table>
                </div>


            </div>
        );
    }
}

export default Profile;