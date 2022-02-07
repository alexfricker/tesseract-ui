import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = (props) => {
  return (
    <Box sx={{ display: "flex", margin: "auto", padding: "50px 25px 25px 50px" }}>
      <CircularProgress />
      <p style={{ paddingLeft: "25px"}}>{props.message}</p>
    </Box>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
