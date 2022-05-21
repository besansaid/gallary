import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20px 10px",
    width: 380,
    // display: 'flex',
    // flex: '4',
    // flexDirection:'row',
    // flexWrap:'wrap',

  },
  media: {
    height: 220,
  },
});
export default function CustomizedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
          component='img'
          height='220'
          image={props.urls.small}
          title="Contemplative Reptile"
         
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.tags[0]?.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.alt_description} 
          </Typography>
        </CardContent> */}
     
      <CardActions>
        <Button size="small" color= "#533a34" onClick={()=> window.open(props.urls.full)}>
         Full Resolution
        </Button>
        <Button size="small" color="#533a34" onClick={()=> window.open(`https://unsplash.com/@${props.user.username}`)}>
          Learn More
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}