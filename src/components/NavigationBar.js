import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import SiteSearch from "./SiteSearch";
import UserProfileNavMenu from "./UserProfileNavMenu";

class NavigationBar extends React.Component {
  state = { navSelection: this.props.selection };

  onNavSelect = (pageName) => {
    this.setState({ navSelection: pageName });
    this.props.onContentSelect(pageName);
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Logo />
            <NavigationLinks
              onNavSelect={this.onNavSelect}
              selected={this.state.navSelection}
            />
            <SiteSearch />
            <UserProfileNavMenu />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavigationBar;
