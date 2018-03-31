import React from "react";
import ProfilesContainer from "../containers/ProfilesContainer";
import CreateProfilesContainer from "../containers/CreateProfilesContainer";
import './Main.css';

function MainProfile() {
    return (
        <div>
            <h1 id="welcome">Build Your Profile</h1>
            <ProfilesContainer />
            <CreateProfilesContainer />
        </div>
    );
}

export default MainProfile;