import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";


const cardWasClicked = (e) => {
    console.log(e)
}

const ContentCard = (props) => {
    
  return (
    <Grid item>
      <Card sx={{ minWidth: 275, bgcolor: "#F5F5F5", maxWidth: 60 }}>
        <CardActionArea onClick={() => cardWasClicked(props.data_src.id)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.data_src.name}
            </Typography>
            <hr></hr>
            <Typography variant="body2" color="text.secondary">
              {props.data_src.type.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{pt: 3}}>
              {props.data_src.description
                ? props.data_src.description
                : "No description"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ContentCard;
