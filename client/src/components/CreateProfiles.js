import React from "react";
import './CreateCountries.css';

class CreateProfiles extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: {
                name: "",
                location: "",
                email: "",
                linkedin: "",
                birthday: "",
                bio: "",
            }
        }
    }

    render() {
        return (
            <div>
                <div class="form">
                    <h2 id="title">Enter Person Info Below:</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.addProfile) {
                            this.props.addProfile(this.state.profile);
                        }
                    }}>
                    <div>
                   <input placeholder="Name" onChange={(e) => {
                            const profile = {name: e.target.value};
                            this.setState({
                                profile: Object.assign(this.state.profile,profile)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="Location" onChange={(e) => {
                            const profile = {location: e.target.value};
                            this.setState({
                                profile: Object.assign(this.state.profile,profile)
                            });
                        }} />
                    </div>   
                    <div>
                    <input placeholder="Email" onChange={(e) => {
                            const profile = {email: e.target.value};
                            this.setState({
                                profile: Object.assign(this.state.profile,profile)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="LinkedIn" onChange={(e) => {
                            const profile = {linkedin: e.target.value};
                            this.setState({
                                profile: Object.assign(this.state.profile,profile)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="Birthday" onChange={(e) => {
                            const profile = {birthday: e.target.value};
                            this.setState({
                                profile: Object.assign(this.state.profile,profile)
                            });
                        }} />
                    </div>
                    <div>
                    <input placeholder="Bio" onChange={(e) => {
                            const profile = {bio: e.target.value};
                            this.setState({
                                profile: Object.assign(this.state.profile,profile)
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

export default CreateProfiles;
