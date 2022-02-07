import React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import NavigationBar from "./NavigationBar";
import AppContent from "./AppContent";
import Footer from "./Footer";
import tesseract from "../api/tesseract";


class App extends React.Component {
  state = { contentSelection: "Pipelines", user: null };

  async setUser() {
    const response = await tesseract.get("/users/" + localStorage.getItem('uid') + "/");
    this.setState({ user: response.data });
  }

  setAuthToken() {

    const queryParams = new URLSearchParams(window.location.search);
    const uid = queryParams.get('uid');
    const authToken = queryParams.get('token');
    const jwtToken = localStorage.getItem('jwtToken');

    if (authToken) {
      if (authToken !== jwtToken || !this.state.user) {
        localStorage.setItem('jwtToken', authToken)
        localStorage.setItem('uid', uid)
        this.setUser()
      }
    }

  }

  onContentSelect = (contentName) => {
    //alert("WARNING: This is a development prototype. It is not ready for production use.\nUSE AT YOUR OWN RISK");
    this.setState({ contentSelection: contentName });
  }

  render() {
    this.setAuthToken();
    return (
      <Box>
        <NavigationBar onContentSelect={this.onContentSelect} selection={this.state.contentSelection} user={this.state.user}/>
        <AppContent selection={this.state.contentSelection} />
        <Footer />
      </Box>
    );
  }
}

export default App;