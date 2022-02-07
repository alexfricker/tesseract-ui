import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SiteSearch from "./SiteSearch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DangerousIcon from "@mui/icons-material/Dangerous";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import "./PipelinePage.css";

// Sample Data
const pipelineStats = [
  { name: "Purecloud.Primary", status: "Healthy" },
  { name: "BAI2.USBank", status: "Healthy" },
  { name: "Hubspot.Primary", status: "Healthy" },
  { name: "Xifin.API.Codes", status: "Healthy" },
  { name: "MGE01P.Primary", status: "Running" },
  { name: "Okta.Primary", status: "Running" },
  { name: "Genesight.Primary", status: "Delayed" },
  { name: "CounsylProduct.Primary", status: "Starting" },
  { name: "M1SF.Primary", status: "Error" },
  { name: "Okta.Secondary", status: "Disabled" },
  { name: "Xifin.SFTP.Primary", status: "Healthy" },
  { name: "Xifin.SFTP.Statements", status: "Healthy" },
  { name: "Clarify.SFTP.Primary", status: "Running" },
  { name: "Glidian.Primary", status: "Running" },
  { name: "NPI.Primary", status: "Healthy" },
  { name: "HCM.SOAP.Primary", status: "Healthy" },
  { name: "HCM.REST.Primary", status: "Running" },
  { name: "TipReport.Primary", status: "Healthy" },
  { name: "ADP.SFTP.Primary", status: "Healthy" },
  { name: "BAI2.USBank", status: "Healthy" },
  { name: "Hubspot.Primary", status: "Healthy" },
  { name: "Xifin.API.Codes", status: "Healthy" },
  { name: "MGE01P.Primary", status: "Running" },
];

class PipelinePage extends React.Component {
  getStatusIcon(status) {
    if (status === "Healthy") {
      return <CheckCircleOutlinedIcon sx={{ color: "#32c95d" }} />;
    }
    if (status === "Starting") {
      return <CircularProgress sx={{color: "inherit"}} size="1.3em"/>;
    }
    if (status === "Running") {
      return <RadioButtonCheckedIcon sx={{color: "info.main"}} className="glow"/>;
    }
    if (status === "Delayed") {
      return <WarningAmberIcon sx={{color: "warning.main"}}/>;
    }
    if (status === "Error") {
      return <DangerousIcon sx={{color: "error.main"}}/>;
    }
    if (status === "Disabled") {
      return <RemoveCircleOutlineIcon sx={{color: "#AAA"}}/>;
    }
    else {
      return <QuestionMarkIcon sx={{color: "inherit"}}/>;
    }
  }
  getPipelineItem(pipelineStat) {
    return (
      <ListItem sx={{ bgcolor: "#F5F5F5" }} disablePadding>
        <ListItemButton>
          <Box sx={{ flexGrow: 1, pl: 2 }}>
            <ListItemText primary={pipelineStat.name} />
          </Box>
          <Box sx={{ pr: 3 }}>
            <ListItemText primary={pipelineStat.status} style={{ color: "#AAA" }} />
          </Box>
          <Box sx={{ pr: 8 }}>
            <ListItemIcon>
              {this.getStatusIcon(pipelineStat.status)}
            </ListItemIcon>
          </Box>
        </ListItemButton>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Box sx={{ flexGrow: 1, pt: 3, mb: 5, mt: 2 }}>
          <Toolbar>
            <Typography variant="h2" component="div">
              Data Pipelines
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Fab color="primary" aria-label="add" sx={{ ml: 4 }}>
                <AddIcon />
              </Fab>
            </Box>
            <SiteSearch />
          </Toolbar>
        </Box>
        <Box sx={{ width: "90%", m: "auto", pb: 20 }}>
          <List>
            {pipelineStats.map((pipelineStat) => this.getPipelineItem(pipelineStat))}
          </List>
        </Box>
      </Container>
    );
  }
}

export default PipelinePage;
