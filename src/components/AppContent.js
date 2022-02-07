import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PipelinePage from "./PipelinePage";
import CatalogPage from "./CatalogPage";
import DocsPage from "./DocsPage";
import ApiPage from "./ApiPage";
import AdminPage from "./AdminPage";

class AppContent extends React.Component {
  getPage() {
    if (this.props.selection === "Pipelines") {
      return <PipelinePage />;
    }
    if (this.props.selection === "Catalog") {
      return <CatalogPage />;
    }
    if (this.props.selection === "Docs") {
      return <DocsPage />;
    }
    if (this.props.selection === "Api") {
      return <ApiPage />;
    }
    if (this.props.selection === "Admin") {
      return <AdminPage />;
    }
  }

  render() {
    
      return (
          <Container>
              <Box sx={{pt:10}}>
                  {this.getPage()}
              </Box>
          </Container>
      );
  }
}

export default AppContent;
