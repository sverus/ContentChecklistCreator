import React from 'react';

import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({

  root: {
    flexGrow: 1,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },

  Card: {
    margin:'auto',

  }
});
export default function ChapterCard() {

  const classes = useStyles();


  const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  return (




      <Card className={classes.root} variant="outlined">
      <CardHeader title="Chapter Title"/>
        <CardContent>
        <Box bgcolor="primary.main">
            <Typography variant="outlined" component="h1" gutterBottom>
            Chapter Title
          </Typography>
          </Box>
          <Typography variant="h5" component="h2">
          Summary
          <List className={classes.root}>
          <ListItem>
            <ListItemText primary="Point one"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Point two" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Point three" />
          </ListItem>
        </List>
          </Typography>
        </CardContent>
        <CardActions>
        <Typography>
        Learn More
        </Typography>
        <Grid item xs={9} style={{textAlign: "right"}}>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="checked"
                color="primary"
              />
            }
            label="Add to checklist"
          />



        </div>

        </Grid>

        </CardActions>
      </Card>

);
}
