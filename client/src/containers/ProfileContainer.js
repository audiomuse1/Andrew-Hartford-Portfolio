import { connect } from "react-redux";
import Profile from "../components/Profile";
import { getProfile } from "../actions";

function mapStateToProps(state) {

    return {
        profile: state.profile
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getProfile: function (id) {
            dispatch(getProfile(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);