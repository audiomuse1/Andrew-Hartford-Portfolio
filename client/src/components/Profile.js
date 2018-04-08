import React, { Component } from "react";
import './Profile.css';



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
                    <th className="mata" scope="col">#</th>
                    <th className="mata" scope="col">Name</th>
                    <th className="mata" scope="col">Location</th>
                    <th className="mata" scope="col">Email</th>
                    <th className="mata" scope="col">LinkedIn</th>
                    <th className="mata" scope="col">Birthday</th>
                    <th className="mata" scope="col">Bio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th className="mata" scope="row">1</th>
                    <td className="mata">{this.props.profile.name}</td>
                    <td className="mata">{this.props.profile.location}</td>
                    <td className="mata">{this.props.profile.email}</td>
                    <td className="mata">{this.props.profile.linkedin}</td>
                    <td className="mata">{this.props.profile.birthday}</td>
                    <td className="mata">{this.props.profile.bio}</td>
                    </tr>
                </tbody>
                </table>
                </div>


            </div>
        );
    }
}

export default Profile;