import React from "react";
import Spinner from "./Spinner";

class Api extends React.Component {
  componentDidMount() {
    window.location.href = "http://localhost/";
  }

  render() {
    return <Spinner message="Redirecting.." />;
  }
}

export default Api;
