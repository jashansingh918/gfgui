import {
  AppBar,
  Button,
  Container,
  Grid,
  InputBase,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import { completed, started, IHotel } from "./HotelsSlice";
import SearchIcon from "@material-ui/icons/Search";
import { UserContext } from "./UserProvider";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles<Theme, {}>({
  rootContainer: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  searchContainer: {
    height: "80%",
    flexGrow: 0.9,
    display: "flex",
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
  },
  // textBoxContainer: {
  //   width: '100%'
  // },
  textBox: {
    color: "white",
  },

  buttons: {
    display: "flex",
    flexGrow: 0.1,
    justifyContent: "space-evenly",
  },

  button: {
    color: "white",
  },

  grid: {
    padding: "30px",
  },
});

interface IResponse {
  restaurant: IHotel;
}

export default function HotelsUI() {
  const [searchString, setSearchString] = useState("");
  const context = useContext(UserContext);
  const styles = useStyles();
  const dispatch = useDispatch();
  const hotels: IHotel[] = useSelector((x: AppState) => x.HotelsSlice);
  const history = useHistory();
  useEffect(() => {
    async function api() {
      const response = await fetch("/hotel.json");
      const json: IResponse[] = await response.json(); //respnse is a promise
      dispatch(
        completed(json.map((x: IResponse) => x.restaurant)) //map is used for arrays
      );
    }

    dispatch(started());
    api();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" className={styles.rootContainer}>
          <div className={styles.searchContainer}>
            <div className={styles.iconContainer}>
              <SearchIcon />
            </div>

            <InputBase
              className={styles.textBox}
              fullWidth
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </div>

          <div className={styles.buttons}>
            {context?.uid && (
              <Button
                className={styles.button}
                onClick={() => history.push("/Profile")}
              >
                PROFILE
              </Button>
            )}
            {!context?.uid && (
              <Button
                className={styles.button}
                onClick={() => history.push("/SignUp")}
              >
                SIGN UP
              </Button>
            )}
            {!context?.uid && (
              <Button
                className={styles.button}
                onClick={() => history.push("/Login")}
              >
                LOGIN
              </Button>
            )}
          </div>
        </Container>
      </AppBar>
      <Grid container spacing={4} className={styles.grid}>
        {hotels.filter(x => x.name.toLowerCase().includes(searchString.toLowerCase())).map((hotel) => (
          <Grid item xs={4} justifyContent="space-evenly" alignItems="center">
            <HotelCard {...hotel} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
