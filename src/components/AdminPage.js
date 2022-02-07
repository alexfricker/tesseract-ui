import React from "react";
import Spinner from "./Spinner";

class AdminPage extends React.Component {
  componentDidMount() {
    window.location.href = "https://api-dev-mde.apps.tst.openshift-stg-ext.aws.myriad.com/admin";
  }

  render() {
    return <Spinner message="Redirecting.." />;
  }
}

export default AdminPage;
