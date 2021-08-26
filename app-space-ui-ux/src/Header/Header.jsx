import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Logo from "../asset/LOGO.png";
import useSteyles from "../Header/Style";

const MenuSpaceBar = () => {
  const classes = useSteyles();

  return (
    
      <AppBar position="fixed" className={classes.LogoConatiner}>
        <Toolbar>
          <di>
            <img className={classes.LogoStyle} src={Logo} alt="Logo" />
          </di>
          <div className={classes.ContainerMenuRight}>
            <div className={classes.StyleBoxContainerAccount}>
              <div className={classes.StyleBoxContainerTitle}>
                <Typography variant="body1" className={classes.StyleCapsule}>
                  Capsula
                </Typography>
                <Typography variant="body1" className={classes.StyleParadox}>
                  Paradoja
                </Typography>
                <Typography variant="body1" className={classes.StyleHistory}>
                  Historia
                </Typography>
              </div>
              <IconButton>
                <AccountCircle className={classes.AccountStyle} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    
  );
};
export default MenuSpaceBar;
