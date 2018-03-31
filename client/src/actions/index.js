
export function loadCountries() {
    return function (dispatch) {
      fetch("/countries")
          .then((response) => {
            return response.json();
          }).then((countries) => {
            dispatch(countriesLoaded(countries));
          });
    };
  }
  
  function countriesLoaded(countries) {
    return {
      type: "COUNTRIES_LOADED",
      value: countries
    };
  }
  
  export function addCountry(c) {
      return function (dispatch) {
          fetch("/countries", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(c)
          }).then(() => dispatch(loadCountries()));
      };
  }
  
  export function getCountry(id) {
      return function (dispatch) {
          fetch("/countries/" + id)
          .then((response) => {
              return response.json();
          }).then((country) => {
              dispatch(getCountryDone(country));
          });
      };
  }
  
  function getCountryDone(country) {
      return {
          type: "GET_COUNTRY_DONE",
          value: country
      };
  }
  
  export function deleteCountry(id) {
      return function (dispatch) {
          fetch("/countries/" + id, {
              method: "DELETE",
              headers: {"Content-Type": "application/json"}
          }).then(() => {
              dispatch(countryDeleted());
              dispatch(loadCountries());
          });
      };
  }
  
  function countryDeleted(country) {
      return {
          type: "COUNTRY_DELETED",
          value: country
      }
  }





  

export function loadProfiles() {
  return function (dispatch) {
    fetch("/profiles")
        .then((response) => {
          return response.json();
        }).then((profiles) => {
          dispatch(profilesLoaded(profiles));
        });
  };
}

function profilesLoaded(profiles) {
  return {
    type: "PROFILES_LOADED",
    value: profiles
  };
}

export function addProfile(c) {
    return function (dispatch) {
        fetch("/profiles", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(c)
        }).then(() => dispatch(loadProfiles()));
    };
}

export function getProfile(id) {
    return function (dispatch) {
        fetch("/profiles/" + id)
        .then((response) => {
            return response.json();
        }).then((profile) => {
            dispatch(getProfileDone(profile));
        });
    };
}

function getProfileDone(profile) {
    return {
        type: "GET_PROFILE_DONE",
        value: profile
    };
}

export function deleteProfile(id) {
    return function (dispatch) {
        fetch("/profiles/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }).then(() => {
            dispatch(profileDeleted());
            dispatch(loadProfiles());
        });
    };
}

function profileDeleted(profile) {
    return {
        type: "PROFILE_DELETED",
        value: profile
    }
}
