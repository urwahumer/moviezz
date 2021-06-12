import axios from "axios";
import { store } from "../redux/store";



axios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("grxAuthToken");
    // if (token) {
    //   config.headers.token = `${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * interceptors is like a middleware it fire betweeen request and response
 * Further more https://www.sitepoint.com/axios-beginner-guide/
 *
 */
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    //Expected errors for debugging
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      // showToast("Something went wrong, Please try again later", "error");
    } else {
      /**
             * Logged out user, this status come only if user are not authenticated,
             incase users token expired and he's still loggedIn
             when he make a request then he will kickout from the dashbaord
             */
      if (error.response.status === 401) {
        // //("TRIGGERED from service:");
     
      }

      if (error.response.status === 403) {
        if (error.response.data && error.response.data.message) {
          // showToast(error.response.data.message, "error");
        }
      }
      if (error.response.status === 400) {
        if (error.response.data && error.response.data.message) {
          // showToast(error.response.data.data.error, "error");
        }
      }
      if (error.response.status === 404) {
        if (error.response.data && error.response.data.message) {
          // showToast(error.response.data.message, "error");
        }
      }
    }
    // return promise, if u need error status in your local component as well...
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
