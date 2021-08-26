
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function StrainCard({strainObj, onDeleteStrain, setSelectStrain}) {

    const {id, strain, buzzword, cannabinoid, health_benefit, image_url} = strainObj;
     const classes = useStyles();


     

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Weed image"
          height="140"
          image={image_url}
          title={strain}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {strain} | {buzzword}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {health_benefit}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cannabinoid}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> setSelectStrain(strainObj)} component={NavLink} to='/editstrain'  size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary" onClick={()=>onDeleteStrain(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default StrainCard;