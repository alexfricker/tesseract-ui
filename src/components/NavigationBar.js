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

  getNavLinkStatus = () => {
    if (this.props.user) {
      return false;
    }
    else {
      return true;
    }
  }

  onNavSelect = (pageName) => {
    this.setState({ navSelection: pageName });
    this.props.onContentSelect(pageName);
  };

  render() {
    console.log(this.props.user)
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Logo />
            <NavigationLinks
              onNavSelect={this.onNavSelect}
              selected={this.state.navSelection}
              disabled={this.getNavLinkStatus}
            />
            <SiteSearch />
            <UserProfileNavMenu user={this.props.user}/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavigationBar;
