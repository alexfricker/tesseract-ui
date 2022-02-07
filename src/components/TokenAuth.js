import React, {useEffect } from "react";
import * as QueryString from "query-string";
import { useLocation } from "react-router-dom";

const setAuthToken = (authToken)=>{
  localStorage.setItem('jwtToken', authToken)
}

export default function TokenAuth() {
  const locationObj = useLocation();
  const queryParams = QueryString.parse(locationObj.search);

  useEffect(() => {
    if (queryParams.token) {
      setAuthToken(queryParams.token);
    }
  }, []);

  return null;
}