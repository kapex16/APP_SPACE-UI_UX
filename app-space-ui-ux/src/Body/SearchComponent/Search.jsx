import { Paper, Typography,Divider, Button } from "@material-ui/core"
import { Search } from "@material-ui/icons";
import useSteyles from './StyleSearch'


const SearchComponent = () =>{
    const classes = useSteyles();

    return(
        <Paper 
        className={classes.SearchContainer}
        >
            <Typography 
            variant="body1"
            className={classes.StyleDestiny}>
            Año de destino</Typography>
            <Divider 
            className={classes.StyleLine8}
             />
            <Typography
            variant="body1"
            className={classes.StylePlaceDes}
            >Lugar de destino</Typography>
            <Divider className={classes.StyleLine9} />
            <Typography
            variant="body1"
            className={classes.StyleOrigin}
            >Origen</Typography>
            <Divider className={classes.StyleLine10} />
            <Typography
            variant="body1"
            className={classes.StyleDate}
            >Fecha</Typography>
            <Divider className={classes.StyleLine11} />
            <Typography
            variant="body1"
            className={classes.StylePassenger}
            >Pasajeros</Typography>
            <Divider className={classes.StyleLine12} />

            <Button
            color="secondary"
            className={classes.StyleButton}
             endIcon={<Search
             className={classes.StyleIconSearch}
                />}
              ></Button>

        </Paper>
    )
 

}
export default SearchComponent;