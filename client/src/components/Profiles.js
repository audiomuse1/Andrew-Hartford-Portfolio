import React from "react";
import './Countries.css';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Profiles (props) {
    let profileDivs = props.profiles.map((profile, i) => {
        return (
            <div key={i}>
                <div id="profile">{profile.name}</div>
                <button onClick={() => 
                props.deleteProfile(profile._id)}>Delete</button>
                <Link to={"/profiles/" + profile._id}>View Details</Link>

            </div>);
        });
        return (
            <div>
                {profileDivs}
            </div>
    );
}

Profiles.propTypes = {
    profiles: PropTypes.array
};

export default Profiles;