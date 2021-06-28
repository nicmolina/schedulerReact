/** Hook useService
 * @const useService
 * hooks for req and response handling.
 * @returns
 * data: object that contains response.data, so component can have control when the info will be rendered;
 * setData: function that updates response data;
 * loading: bool that returns if the requisition still on await ;
 * setLoading: function that changes loading;
 * error: if the response was unsuccessfully it returns the error;
 * setError: change the error;
 * errorMessage: returns the errorMessage that was stablished by the backend;
 * request: callback where you can include your options of the specific component 
 * and the data, error, errorMessage will be updated if needed.
 */

import React from 'react';
import axios from "axios";
import { removeToken } from '../Utils/TokenStorage';
import { AuthContext } from '../Context/UserContext';

const useService = () => {
  const { userLogout } = React.useContext(AuthContext);

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState();
  const [loading, setLoading] = React.useState(false);


  const request = React.useCallback(async (options, formatData) => {
    let response;
    let json;
    setLoading(true);

    const service = axios.create({});

    //Add a response interceptor

    service.interceptors.response.use((response) => {
      setErrorMessage(undefined)
      return response
    }, function (error) {
      var msg = error?.response?.data?.message;

      setErrorMessage(msg);

      setData(error)
      if (error?.response.data.statusCode === 401) {
        removeToken();
        userLogout();
        return Promise.reject(error);
      }

      return Promise.reject(error);
    });


    try {

      // setErrorMessage(undefined);
      setError(null);
      setLoading(true);
      response = await service(options);
      json = await response.data;
      if (response.ok === false) throw new Error(json.message);

    } catch (err) {

      setError(err);
      return data;

    } finally {
      if (formatData != undefined) {
        const formatResponse = formatData(json);
        setData(formatResponse);
      }
      else {
        if (json != null)
          setData(json);
      }

      setLoading(false);
      return { response, json };
    }
  }, []);

  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    errorMessage,
    request,
  };
};

export default useService;
