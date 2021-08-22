import Button from '@material-ui/core/Button'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Typography, makeStyles}from '@material-ui/core'



const useSteyles = makeStyles(theme => ({

   

    heroStyle:{
            width: '585px',
            padding: '0px, 0px, 58px, 0px',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',

            position: 'absolute',
            height: '260px',
            left: '717px',
            right: '504px',
            top: '378px',
            
            

    },
     typographyTwo:{
         /* Disfruta de la paradoja del abuelo por menos de la mitad del precio habitual. */
        position: 'static',
        width: '585px',
        height: '56px',
        left: 'calc(50% - 585px/2)',
        top: '86px',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',

        color: '#FFFFFF',

        /* Inside Auto Layout */

        flex: 'none',
        order: '1',
        alignSelf: 'stretch',
        flexGrow: '0',
        margin: '18px 0px',

     },
     typographyOne:{
         /* Bienvenidos a nuestro servicio de viajes en el tiempo compartidos */
        position: 'static',
        width: '585px',
        height: '68px',
        left: 'calc(50% - 585px/2)',
        top: '0px',
        
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '32px',
        lineHeight: '37px',
        
        color: '#FFFFFF',
  
        /* Inside Auto Layout */
        
        flex: 'none',
        order: '0',
        alignSelf: 'stretch',
        flexGrow: '0',
        margin: '18px 0px',
     },
     classBottn:{
         /* button/contained/large/icon-right/secondary/mas info/default */

        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '143px',
        height: '42px',
        left: 'calc(50% - 143px/2 - 221px)',
        top: '160px',

        /* shadow-2 */

        filter: 'dropShadow(0px 3px 1px rgba(0, 0, 0, 0.2)) dropShadow(0px 2px 2px rgba(0, 0, 0, 0.14)) dropShadow(0px 1px 5px rgba(0, 0, 0, 0.12))',

        /* Inside Auto Layout */

        flex: 'none',
        order: '2',
        flexGrow: '0',
        margin: '18px 0px',

     }
}));

 const HeroComponent = () =>{
     
    const classes = useSteyles();
    return(

         <div className={ classes.heroStyle  }>
             <Typography 
             className={classes.typographyOne}  variant="body1" 
             color="initial"
             >
             Bienvenidos a nuetro servicios de viajes en el tiempo compartidos
             </Typography>
             <Typography 
             className={classes.typographyTwo}
             variant="body1" 
             color="initial"
             >
             Disfruta de la paradoja del abuelo por menos de la mitad del precio habitual
             </Typography>
             <Button 
             className={classes.classBottn}
             variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIosIcon />}
             >
             MÁS INFO
             </Button>
         </div>

       )
}
export default HeroComponent