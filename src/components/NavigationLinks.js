import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = ["Pipelines", "Catalog", "Docs", "Api", "Admin"];

class NavigationLinks extends React.Component {

  buttonSelector(page) {
    let variantProp = "outlined";

    if (page === this.props.selected) {
      variantProp = "outlined";
    }
    return (
      <Button
        key={page}
        variant={variantProp}
        onClick={() => this.props.onNavSelect(page)}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {page}
      </Button>
    );
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => this.buttonSelector(page))}
      </Box>
    );
  }
}

export default NavigationLinks;
