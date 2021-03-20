// { type, payload } regular actions
// function type => thunks => we can do async and dispatch other stuff also

import axios from "axios";
import { useParams } from "react-router";

const setLoading = () => ({ type: "user/loading" });

const setToken = (jwt) => ({ type: "user/setToken", payload: jwt });

const loginSuccess = (userData, token) => ({
  type: "user/loginSuccess",
  payload: { userData, token },
});

export const signUp = (firstName, email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    console.log("thunk", firstName, email, password);
    dispatch(setLoading());

    const response = await axios.post("http://localhost:4000/users/signup", {
      firstName,
      email,
      password,
    });

    console.log(response.data.jwt);
    dispatch(setToken(response.data.jwt));

    history.push("/login"); // send them to homepage
  } catch (e) {
    console.log(e.message);
  }
};

const getUserProfile = async (token) => {
  try {
    // request GET to /me
    const response = await axios.get("http://localhost:4000/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const login = (email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(setLoading());

    const response = await axios.post("http://localhost:4000/login", {
      email,
      password,
    });

    const token = response.data.jwt;

    console.log("Login success!");

    const userProfileResponse = await axios.get(`http://localhost:4000/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("userProfileResponse", userProfileResponse.data);

    const userData = userProfileResponse.data;
    localStorage.setItem("jwt", token);

    // dispatch(setToken(token));
    dispatch(loginSuccess(userData, token));
    history.push("/cart"); // send them to homepage
  } catch (e) {
    console.log(e.message);
  }
};

export const bootstrapLogin = () => async (dispatch, getState) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // make /me call
    const userProfile = await getUserProfile(jwt);
    console.log("user profile loaded automatically", userProfile);
    dispatch(loginSuccess(userProfile, jwt));
  } else {
    console.log("no token stored in localstorage");
  }
};

export function logout(dispatch, getState) {
  dispatch({ type: "user/logout" });

  localStorage.removeItem("jwt");
}

export function userById(data) {
  console.log(`user by id`, data);
  return {
    type: "user/userById",
    payload: data,
  };
}

export function fetchUserById(id) {
  // console.log("id at the action", id);
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`http://localhost:4000/users/${id}`);
    console.log("user by id response", response.data);
    dispatch(userById(response.data));
  };
}
