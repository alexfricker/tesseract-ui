import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
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
        <Box sx={{ m: 5, pb: 15}} className="hide-scroll">
        <Typography variant="h4" sx={{pb: 3, pt:3}}>Data Glossary</Typography>
        <Typography variant="h5">Application Terminology</Typography>
        <Typography variant="body1" sx={{pb: 3}}>Some random text here.</Typography>
        <Typography variant="h5">Business Terminology</Typography>
        <Typography variant="body1" sx={{pb: 3}}>Some random text here.</Typography>
        <Typography variant="h4" sx={{pb: 3, pt:3}}>App Architecture</Typography>
        <Typography variant="h5">API</Typography>
        <Typography variant="body1" sx={{pb: 3}}>Some random text here.</Typography>
        <Typography variant="h5">Front-End</Typography>
        <Typography variant="body1" sx={{pb: 3}}>Some random text here.</Typography>
        <Typography variant="h5">Database</Typography>
        <Typography variant="body1" sx={{pb: 3}}>Some random text here.</Typography>
        <Typography variant="h5">Openshift</Typography>
        <Typography variant="body1" sx={{pb: 3}}>Some random text here.</Typography>
        </Box>
        </Container>
    );
  }
}

export default DocsPage;
