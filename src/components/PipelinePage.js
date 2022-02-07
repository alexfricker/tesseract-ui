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
  { id: 1, name: "Purecloud.Primary", status: "Healthy" },
  { id: 2, name: "BAI2.USBank", status: "Healthy" },
  { id: 3, name: "Hubspot.Primary", status: "Healthy" },
  { id: 4, name: "Xifin.API.Codes", status: "Healthy" },
  { id: 5, name: "MGE01P.Primary", status: "Running" },
  { id: 6, name: "Okta.Primary", status: "Running" },
  { id: 7, name: "Genesight.Primary", status: "Delayed" },
  { id: 8, name: "CounsylProduct.Primary", status: "Starting" },
  { id: 9, name: "M1SF.Primary", status: "Error" },
  { id: 10, name: "Okta.Secondary", status: "Disabled" },
  { id: 11, name: "Xifin.SFTP.Primary", status: "Healthy" },
  { id: 12, name: "Xifin.SFTP.Statements", status: "Healthy" },
  { id: 13, name: "Clarify.SFTP.Primary", status: "Running" },
  { id: 14, name: "Glidian.Primary", status: "Running" },
  { id: 15, name: "NPI.Primary", status: "Healthy" },
  { id: 16, name: "HCM.SOAP.Primary", status: "Healthy" },
  { id: 17, name: "HCM.REST.Primary", status: "Running" },
  { id: 18, name: "TipReport.Primary", status: "Healthy" },
  { id: 19, name: "ADP.SFTP.Primary", status: "Healthy" },
  { id: 20, name: "BAI2.USBank", status: "Healthy" },
  { id: 21, name: "Hubspot.Primary", status: "Healthy" },
  { id: 22, name: "Xifin.API.Codes", status: "Healthy" },
  { id: 23, name: "MGE01P.Primary", status: "Running" },
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
      <ListItem sx={{ bgcolor: "#F5F5F5" }} disablePadding key={pipelineStat.id}>
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
