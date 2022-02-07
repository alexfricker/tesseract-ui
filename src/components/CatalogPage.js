import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import SiteSearch from "./SiteSearch";
import tesseract from "../api/tesseract";
import ContentCard from "./ContentCard";
import CatalogFilter from "./CatalogFilter";

class CatalogPage extends React.Component {
  state = { dataSources: [] };

  componentDidMount() {
    this.getCatalog("");
  }

  async getCatalog(term) {
    const response = await tesseract.get("/catalog/data-sources");

    this.setState({ dataSources: response.data.results });
  }

  render() {
    const dataSources = this.state.dataSources.map((dataSource) => {
      return <ContentCard key={dataSource.id} data_src={dataSource} />;
    });

    return (
      <Container>
        <Box sx={{ flexGrow: 1, pt: 3, mb: 5, mt: 2  }}>
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
            <CatalogFilter />
          </Toolbar>
        </Box>
        <Grid container spacing={2}>
          {dataSources}
        </Grid>
      </Container>
    );
  }
}

export default CatalogPage;
