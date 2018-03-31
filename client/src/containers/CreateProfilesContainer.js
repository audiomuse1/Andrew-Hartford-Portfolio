import { connect } from "react-redux";
import CreateProfiles from "../components/CreateProfiles";
import { addProfile } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        addProfile: function (profile) {
            dispatch(addProfile(profile));
        }
    };
}
export default connect(null,mapDispatchToProps)(CreateProfiles);