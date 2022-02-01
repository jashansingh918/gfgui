import {
  Button,
  CircularProgress,
  Fab,
  makeStyles,
  TextField,
  Theme,
  Typography,
  Card,
  CardMedia,
  CardContent,
  AppBar,
} from "@material-ui/core";
//import {SearchIcon} from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import "./App.css";

// const useStyles = makeStyles({//usestyles is a hook
//     root: {
//       color: 'red',
// //      color: (props) => props.color,
//     },
//   });

interface IMaterialUIProps {
  labelColor: string;
  font: string;
}

const useStyles = makeStyles<Theme, IMaterialUIProps>({
  //usestyles is a hook
  root: {
    //color: 'red',
    color: (props) => props.labelColor,
    fontSize: (props) => props.font,
  },
});

export default function MaterialUI() {
  // const style = useStyles();
  const style = useStyles({ labelColor: "yellow", font: "20px" }); // ----if we did it through props
  return (
    <>
      {/*loading spinner */}
      <CircularProgress size={100} />
      {/* text box */}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        error={true}
        helperText="Incorrect entry."
      />
      {/* label */}
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        className={style.root}
      >
        h4. Heading
      </Typography>
      {/* Buttons*/}
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Fab variant="extended">Navigate</Fab>
      {/* cards */}
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://b.zmtcdn.com/data/pictures/2/308322/cf86dbd8b8ca4d40682c7713f112cc07_featured_v2.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="primary">
            Haldirams
          </Typography>
          <Typography variant="body2" color="primary">
            North Indian
          </Typography>
        </CardContent>
      </Card>
      <AppBar position="static">
      
            <SearchIcon />
    
          <input type="text"
            placeholder="Search…"
          />
        
      </AppBar>
    </>
  );
}
//now people write react code n css code in the same file
//emoticon is also a famous css library which help us write code in same file
//in material ui it is makestyles
