import Button from '@material-ui/core/Button'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Typography, makeStyles,Paper }from '@material-ui/core'



const useSteyles = makeStyles(theme => ({



}));

 const HeroComponent = () =>{

    return(

         <Paper>
             <Typography variant="body1" 
             color="initial"
             align="center">
             Bienvenidos a nuetro servicios de viajes en el tiempo compartidos
             </Typography>
             <Typography 
             variant="body1" 
             color="initial"
             align="center">
             Disfruta de la paradoja del abuelo por menos de la mitad del precio habitual
             </Typography>
             <Button 
             variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIosIcon />}
             >
             MÁS INFO
             </Button>
         </Paper>

       )
}
export default HeroComponent