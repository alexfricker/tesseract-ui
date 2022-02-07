import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import SiteSearch from "./SiteSearch";

class DocsPage extends React.Component {
  render() {
    return (
        <Container>
            
        <Box sx={{ flexGrow: 1, pt: 3, mb: 5, mt: 2 }}>
          <Toolbar>
            <Typography variant="h2" component="div">
              Documentation
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
            </Box>
            <SiteSearch />
          </Toolbar>
        </Box>
        <hr style={{maxWidth: "100%"}}></hr>
        <Box sx={{ m: 5}}>
        <Typography>
          lulz...
        </Typography>
        </Box>
        </Container>
    );
  }
}

export default DocsPage;
