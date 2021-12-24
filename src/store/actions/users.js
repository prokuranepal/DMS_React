// import {setAlert} from './alert';
import axios from "../../axios-orders";
import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  GET_SELF_USER_DATA,
  UPDATE_SELF_USER_DATA,
  GET_HOSPITAL_BY_ID_SUCCESS,
  ADD_HOSPITAL,
  UPDATE_HOSPITAL,
  GET_REGULATORY_BODIES,
  ADD_REGULATORY_BODY,
  GET_HOSPITALS_SUCCESS,
  GET_HOSPITAL_USERS,
  GET_REGULATORY_USERS,

  UPDATE_HEALTHPOSTS_SUCCESS,
  GET_HEALTHPOSTS_SUCCESS,
  GET_HEALTHPOSTS_FAIL,
  GET_HEALTHPOSTS_START

  // UPDATE_REGULATORY_BODY
} from "./actionTypes";

import * as func from "./function";


/********************************************
 * 
 HEALTHPOST USERS
 *
 **********************************************/

export const getUsers = () => (dispatch) => {
  axios
    .get("/users", { headers: func.getToken() })
    .then((res) => {
      //    console.log(res.data);
      dispatch({
        type: GET_USERS,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addUser = (data) => (dispatch) => {
  // console.log(data);
  axios
    .post("/users/signup", data, { headers: func.getToken() })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_USER,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUser = (data, id) => (dispatch) => {
  console.log(data, id);
  const url = `/users/${id}`;
  axios
    .put(url, data, { headers: func.getToken() })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: UPDATE_USER,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteUser = (id) => (dispatch) => {
  const url = `/users/${id}`;
  axios
    .delete(url, { headers: func.getToken() })
    .then((res) => {
      dispatch({
        type: DELETE_USER,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


/********************************************
 * 
 REGULATORY USERS
 *
 **********************************************/

 
 export const getRegulatoryUsers = () => (dispatch) => {
  axios
    .get("/users?body=Regulatory Body", { headers: func.getToken() })
    .then((res) => {
         console.log("regulatory actions",res.data);
      dispatch({
        type: GET_REGULATORY_USERS,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

/********************************************
 * 
 HOSPITALS USERS
 *
 **********************************************/

 
export const getHospitalUsers = () => (dispatch) => {
  axios
    .get("/users?body=Hospital", { headers: func.getToken() })
    .then((res) => {
        //  console.log(res.data);
      dispatch({
        type: GET_HOSPITAL_USERS,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addHospitalUser = (data) => (dispatch) => {
  console.log(data);
  axios
    .post("/users/signup", data, { headers: func.getToken() })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_USER,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateHospitalUser = (id, data) => (dispatch) => {
  console.log(data, id);
  const url = `/users/${id}`;
  axios
    .put(url, data, { headers: func.getToken() })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: UPDATE_USER,
        users: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteHospitalUser = (id) => (dispatch) => {
  const url = `/users/${id}`;
  axios
    .delete(url, { headers: func.getToken() })
    .then((res) => {
      dispatch({
        type: DELETE_USER,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

/********************************************
 * 
 USER PROFILE
 *
 **********************************************/

export const getUserProfile = (id) => (dispatch) => {
  const url = `/users/${id}`;
  axios
    .get(url, { headers: func.getToken() })
    .then((response) => {
      console.log(response);
      dispatch(getUserProfileSuccess(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserProfileSuccess = (data) => {
  return {
    type: GET_USER_PROFILE,
    userProfile: data,
  };
};

export const updateUserProfile = (id) => (dispatch) => {
  const url = `/users/${id}`;
  axios
    .get(url, { headers: func.getToken() })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUserProfileSuccess = (data) => {
  return {
    type: UPDATE_USER_PROFILE,
    userProfile: data,
  };
};

export const getSelfUserData = () => {
  return (dispatch) => {
    const url = `users/profile`;
    axios
      .get(url, { headers: func.getToken()})
      .then((response) => {
        // console.log(response.data);
        dispatch(setSelfUserData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const setSelfUserData = (data) => {
  return {
    type: GET_SELF_USER_DATA,
    selfUserData: data,
  };
};

export const updateSelfUserData = (selfUserId, selfUserData) => {
  return (dispatch) => {
    const url = `users/${selfUserId}`;
    axios
      .put(url, selfUserData, { headers: func.getToken() })
      .then((response) => {
        // console.log(response.data);
        dispatch(updateSelfUserDataSuccess());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateSelfUserDataSuccess = () => {
  return {
    type: UPDATE_SELF_USER_DATA,
  };
};


/********************************************
 * 
 HEALTH POSTS
 *
 **********************************************/

export const getHealthposts = () => {
  return dispatch => {
      const url = '/healthpost';
      getHealthpostsStart();
      axios.get(url, { headers: func.getToken() })
          .then(res => {
              // console.log(res.data)
              dispatch(getHealthpostsSuccess(res.data))
          })
          .catch(err => {
              dispatch(getHealthpostsFail())
          })
  }
}

const getHealthpostsSuccess = (healthposts) => {
  return {
      type: GET_HEALTHPOSTS_SUCCESS,
      healthposts: healthposts
  }
}

const getHealthpostsStart = () => {
  return {
      type: GET_HEALTHPOSTS_START
  }
}

const getHealthpostsFail = (error) => {
  return {
      type: GET_HEALTHPOSTS_FAIL,
      error: error
  }
}

export const addHealthPosts = (data) => dispatch =>{
  const url = '/healthpost';
  console.log(data);
  axios.post(url, data, { headers: func.getToken() })
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.log(err)
      })

}

export const deleteHealthPosts = (id) => dispatch =>{
  const url = `/healthpost/${id}`;
  axios.delete(url, { headers: func.getToken() })
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.log(err)
      })
}

export const updateHealthPosts = (data, id) => dispatch =>{
  const url = `/healthpost/${id}`;
  console.log(data, id)
  axios.put(url, data, { headers: func.getToken() })
      .then(res => {
          console.log(res, "Success")
          return {
              type: UPDATE_HEALTHPOSTS_SUCCESS
          }
      })
      .catch(err => {
          console.log(err, "Error")
      })
}
/********************************************
 * 
 REGULATORY BODIES
 *
 **********************************************/

export const getRegulatoryBodiesList = () => dispatch =>{
  const url = `/regulatorybodies/`;
  axios
    .get(url, { headers: func.getToken() })
    .then((response) => {
      // console.log(response);
      dispatch(getRegulatoryBodiesListSuccess(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
}

const getRegulatoryBodiesListSuccess = (data) => {
  return {
    type: GET_REGULATORY_BODIES,
    data: data
  }
}

export const addRegulatoryBody = (userData) => dispatch => {
  const url = `/regulatorybodies/`;
  axios
      .post(url, userData, { headers: func.getToken() })
      .then((response) => {
        // console.log(response.data);
        dispatch(addRegulatoryBodySuccess());
      })
      .catch((err) => {
        console.log(err);
      });
};

const addRegulatoryBodySuccess = (userData) => {
  return{
    type: ADD_REGULATORY_BODY,
    userData: userData
  }
}

export const updateRegulatoryBody = (hospitalId, data) => {
  return (dispatch) => {
    const url = `/regulatorybodies/${hospitalId}`;
    axios
      .put(url, data, { headers: func.getToken() })
      .then((res) => {
        console.log(res.data);
        // dispatch({
        //   type: UPDATE_REGULATORY_BODY,
        //   users: res.data,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteRegulatoryBody = (id) => dispatch => {
  const url = `/regulatorybodies/${id}`;
  axios
      .delete(url, { headers: func.getToken() })
      .then((response) => {
        // console.log(response.data);
        dispatch(deleteRegulatoryBodySuccess());
      })
      .catch((err) => {
        console.log(err);
      });
};

const deleteRegulatoryBodySuccess = (id) => {
  return{
    type: ADD_REGULATORY_BODY,
    // userData: userData
  }
}






/********************************************
 * 
 CENTRAL HOSPITALS
 *
 **********************************************/

export const getCentralHospitals = () => {
  return dispatch => {
      const url = '/hospital';
      axios.get(url, { headers: func.getToken() })
          .then(res => {
              // console.log(res.data)
              dispatch(getCentralHospitalsSuccess(res.data))
          })
          .catch(err => {
              console.log(err)
          })
  }
}

const getCentralHospitalsSuccess = (hospitals) => {
  return {
      type: GET_HOSPITALS_SUCCESS,
      hospitals: hospitals
  }
}

export const getHospitalDataById = (hospitalId) => {
  return (dispatch) => {
    const url = `users/hospital/${hospitalId}`;
    axios
      .get(url, { headers: func.getToken() })
      .then((response) => {
        dispatch(getHospitalDataByIdSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getHospitalDataByIdSuccess = (data) => {
  return {
    type: GET_HOSPITAL_BY_ID_SUCCESS,
    hospitalDetail: data,
  };
};

export const addHospital = (data) => {
  return (dispatch) => {
    const url = `/hospital`;
    axios
      .post(url, data, { headers: func.getToken() })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: ADD_HOSPITAL,
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateHospital = (hospitalId, data) => {
    return (dispatch) => {
      const url = `/hospital/${hospitalId}`;
      axios
        .put(url, data, { headers: func.getToken() })
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: UPDATE_HOSPITAL,
            users: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  export const deleteHospital = (hospitalId) => dispatch => {
    const url = `/hospital/${hospitalId}`;
  axios
      .delete(url, { headers: func.getToken() })
      .then((response) => {
        // console.log(response.data);
        // dispatch(deleteRegulatoryBodySuccess());
      })
      .catch((err) => {
        console.log(err);
      });
    }
