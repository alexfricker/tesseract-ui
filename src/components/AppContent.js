import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PipelinePage from "./PipelinePage";
import CatalogPage from "./CatalogPage";
import DocsPage from "./DocsPage";
import ApiPage from "./ApiPage";
import AdminPage from "./AdminPage";

class AppContent extends React.Component {
  render() {
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
    else {
      return (
          <Container>
              <Box>
                  <div>{this.props.selection}</div>
              </Box>
          </Container>
      );
    }
  }
}

export default AppContent;
