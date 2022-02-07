import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import GitHubIcon from "@mui/icons-material/GitHub";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FeedIcon from "@mui/icons-material/Feed";

const GITHUB_URL = "https://github.com/orgs/myriadgenetics/teams/data_engineering"
const JIRA_URL = "https://mygn.atlassian.net/jira/software/c/projects/DAN/boards/766"
const CONFLUENCE_URL = "https://mygn.atlassian.net/wiki/spaces/EDM/pages/20131490/Data+Engineering+Group"

class Footer extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ top: "auto", bottom: 0 }}
          style={{ backgroundColor: "#F3F3F3" }}
        >
          <div>
            <Box style={{ textAlign: "center", color: "#555", margin: "10px"}}>
              <Button variant="text" startIcon={<GitHubIcon />} href={GITHUB_URL}>
                Github
              </Button>
              <Button
                variant="text"
                startIcon={<EngineeringIcon />}
                style={{ marginLeft: "50px", marginRight: "50px" }}
                href={JIRA_URL}
              >
                Jira
              </Button>
              <Button variant="text" startIcon={<FeedIcon />} href={CONFLUENCE_URL}>
                Confluence
              </Button>
            </Box>
          </div>
          <div style={{ marginBottom: "10px"}}>
            <Box style={{ textAlign: "center", color: "#555" }}>
              <div
                style={{ fontSize: "0.8em", maxWidth: "50%", margin: "auto" }}
              >
                Myriad Genetics Data Engineering | For use by Myriad Genetics
                only. Copyright and Trademark and words like End-User and
                Prohibit. So Legal. Much Binding.{" "}
              </div>
            </Box>
          </div>
        </AppBar>
      </Box>
    );
  }
}

export default Footer;
