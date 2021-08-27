import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function MedicineCard({medicalObj}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function medicineImage() {
	let weedArray = ["https://media2.fdncms.com/portmerc/imager/u/large/19820795/origin_7-points-oregon-staff.jpg",
    "https://dfcby4322olzt.cloudfront.net/wp-content/uploads/2019/04/marijuana-2174302_1920.jpg",
    "https://buycannabisonlineus.com/wp-content/uploads/2020/01/purple-kush-1.jpg",
    "https://www.reeferposts.com/wp-content/uploads/2018/11/pineapple-express.jpg",
    "https://images1.westword.com/imager/u/original/8814854/pineapple.jpg",
    "https://essencevegas.com/wp-content/uploads/2019/02/EightFold_TruthSerum.jpg"]
        let randomNumber = Math.floor(Math.random() * 6)


        return weedArray[randomNumber]
    }



  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={medicalObj.name}
       
      />
      <CardMedia
        className={classes.media}
        image={medicineImage()}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {medicalObj.strains.map((str)=> <ListItem>{str.health_benefit}</ListItem>)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Associated Strains:</Typography>
          <Typography paragraph>
            WARNING: This list has not been verified by an accredited Weedologist-MJ
          </Typography>
          <Typography paragraph>
            {medicalObj.strains.map((str)=> <li>{str.strain}</li>)}
          </Typography>
        
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default MedicineCard;