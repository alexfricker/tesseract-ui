import React from "react";
import Spinner from "./Spinner";

class Api extends React.Component {
  componentDidMount() {
    window.location.href = "https://api-dev-mde.apps.tst.openshift-stg-ext.aws.myriad.com/";
  }

   render() {
  return <Spinner message="Redirecting.." />;
   }
  
}

export default Api;
