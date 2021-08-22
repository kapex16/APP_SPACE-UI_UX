import Hero from "../../asset/Hero.png";
import HeroComponent from "../Hero/Hero";
import SearchComponent from '../SearchComponent/Search'
import { Grid, makeStyles, Paper } from "@material-ui/core";
import MenuSpaceBar from '../../Header/Header.jsx'



const useSteyles = makeStyles({
  fondo: {
    flexGrow: 1,
    flexWrap:'wrap',
    height: "911px;",
    left: "-172px",
    right: "-173px",
    top: "0px",
    backgrounColor: "rgba(0, 0, 0, 0.42)",
  },

  paperContainer: {
    height: "911px;",
    left: "-172px",
    right: "-173px",
    top: "0px",
    backgroundImage: `url(${Hero})`,
    backgroundRepeat: "no-repeat",
  },
});
const BodyCompoent = () => {
  const classes = useSteyles();

  return (
    <div className={classes.fondo}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} >
          <Paper className={classes.paperContainer}>
            <MenuSpaceBar></MenuSpaceBar>
            <HeroComponent></HeroComponent>
            <SearchComponent></SearchComponent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BodyCompoent;
