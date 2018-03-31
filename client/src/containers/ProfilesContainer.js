import { connect } from "react-redux";
import Profiles from "../components/Profiles";
import { deleteProfile } from "../actions";

function mapStateToProps(state) {

    return {
        profiles: state.profiles
    };
}

function mapDispatchToProps (dispatch) {
    return {
        deleteProfile: function (id) {
            dispatch(deleteProfile(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);