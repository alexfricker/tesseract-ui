import React from "react";
import Spinner from "./Spinner";

class AdminPage extends React.Component {
  componentDidMount() {
    window.location.href = "http://localhost/admin";
  }

  render() {
    return <Spinner message="Redirecting.." />;
  }
}

export default AdminPage;
