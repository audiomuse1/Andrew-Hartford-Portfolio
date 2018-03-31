
import {combineReducers} from "redux";

function countries(state = [], action) { 
  if (action.type === "COUNTRIES_LOADED") {
    return action.value;
  }
  return state;
}

function country(state = [], action) {
  if (action.type === "GET_COUNTRY_DONE") {
    return action.value;
  }
  return state;
}



function profiles(state = [], action) { 
  if (action.type === "PROFILES_LOADED") {
    return action.value;
  }
  return state;
}

function profile(state = [], action) {
  if (action.type === "GET_PROFILE_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  profiles, profile, countries, country
});

export default rootReducer;