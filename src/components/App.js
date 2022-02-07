import React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import NavigationBar from "./NavigationBar";
import AppContent from "./AppContent";
import Footer from "./Footer";

class App extends React.Component {
  state = { contentSelection: "Pipelines" };

  onContentSelect = (contentName) => {
    //alert("WARNING: This is a development prototype. It is not ready for production use.\nUSE AT YOUR OWN RISK");
    this.setState({contentSelection: contentName})
  }

  render() {
    return (
      <Box>
        <NavigationBar onContentSelect={this.onContentSelect} selection={this.state.contentSelection}/>
        <AppContent selection={this.state.contentSelection}/>
        <Footer />
      </Box>
    );
  }
}

export default App;
