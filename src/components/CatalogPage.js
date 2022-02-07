import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import Autocomplete from "@mui/material/Autocomplete";
import AddIcon from "@mui/icons-material/Add";
import TextField from '@mui/material/TextField';
import SiteSearch from "./SiteSearch";
import tesseract from "../api/tesseract";

class CatalogPage extends React.Component {
  state = { dataSources: [] };

  componentDidMount () {
    this.getCatalog("")
  }

  async getCatalog (term) {
    const response = await tesseract.get("/catalog/data-sources");

    this.setState({images: response.data.results})
  }

  render() {
    const options = [];

    console.log(this.state.dataSources)

    return (
      <Container>
        <Box sx={{ flexGrow: 1, pt: 3 }}>
          <Toolbar>
            <Typography variant="h2" component="div">
              Data Catalog
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Fab color="primary" aria-label="add" sx={{ ml: 4 }}>
                <AddIcon />
              </Fab>
            </Box>
            <SiteSearch />
            <Autocomplete
              id="type-filter"
              options={options}
              sx={{ width: 175 }}
              renderInput={(params) => <TextField {...params} label="Filter" />}
            />
          </Toolbar>
        </Box>
        <Typography>
          {this.state.dataSources}
        </Typography>
      </Container>
    );
  }
}

export default CatalogPage;
