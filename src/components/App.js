import React from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import AppContent from "./AppContent";
import Footer from "./Footer";

class App extends React.Component {
  state = { contentSelection: "Pipelines" };

  onContentSelect = (contentName) => {
    this.setState({contentSelection: contentName})
  }

  render() {
    return (
      <div>
      <NavigationBar onContentSelect={this.onContentSelect} selection={this.state.contentSelection}/>
      <AppContent selection={this.state.contentSelection}/>
      <Footer />
      </div>
    );
  }
}

export default App;
