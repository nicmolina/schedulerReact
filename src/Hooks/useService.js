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
      console.log('int ', response)
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

      console.log('errrrrrrrrrrr', json)

      // json = null;
      setError(err);
      return data;

    } finally {
      if (formatData != undefined) {
        const formatResponse = formatData(json);
        setData(formatResponse);
      }
      else {
        if(json != null)
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
