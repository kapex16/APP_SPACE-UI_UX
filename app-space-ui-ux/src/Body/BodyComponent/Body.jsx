import Hero from '../../asset/Hero.png';
import HeroComponent from '../Hero/Hero';


import { makeStyles,Paper }from '@material-ui/core'



const useSteyles = makeStyles(theme => ({

    paperContainer: {
        width:'1593px',
        height:'696px',
        backgroundImage: `url(${Hero})`
    }

}));
 const BodyCompoent =() =>{

    const classes = useSteyles();

    return(

        <Paper className={classes.paperContainer} >
         <HeroComponent></HeroComponent> 
        
        </Paper>

    )}

    export default BodyCompoent
