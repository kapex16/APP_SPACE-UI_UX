import {makeStyles,

  } from "@material-ui/core";


 const useSteyles = makeStyles({
    LogoConatiner: {
      display: "flex",
      flexDirection: "row",
      background: "rgba(23, 23, 40, 0.36)",

  
     
    },
    LogoStelyContainer:{
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "12px 17px",
  
      position: "absolute",
      height: "56px",
      left: "0px",
      right: "0px",
      top: "0px",

    },
    LogoStyle:{
        /* LOGO */
  
          /* Auto Layout */
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
  
          position: 'static',
          width: '85.43px',
          height: '31.08px',
          left: '17px',
          top: '12.46px',
          /* Inside Auto Layout */
  
          flex: 'none',
          order: '0',
          flexGrow: '0',
          margin: '-10px 10px',
    },
    AccountStyle:{
        /* BOTON USER */
  
        justifyContent:'space-between',
          position: 'static',
          width: '34px',
          height: '34px',
          left: '256px',
          top: '0px',
  
  
          /* Inside Auto Layout */
  
          flex: 'none',
          order: '1',
          flexGrow: '0',
          margin: '0px 24px',
          color: '#FFFFFF',
    },
    StyleCapsule:{
        /* CTA capsula */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '63px',
        height: '18px',
        left: '0px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '0',
        flexGrow: '0',
        margin: '0px 24px',
    },
    StyleParadox:{
        /* CTA Paradoja */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '68px',
        height: '18px',
        left: '87px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '0px 24px',
    },
    StyleHistory:{
        /* CTA Paradoja */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '53px',
        height: '18px',
        left: '179px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '1',
        flexGrow: '0',
        margin: '0px 24px',
    },
    StyleBoxContainerAccount:{
        /* CTAs text */


            /* Auto Layout */

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',

            position: 'static',
            width: '232px',
            height: '18px',
            left: '0px',
            top: '8px',


            /* Inside Auto Layout */

            flex: 'none',
           
            flexGrow: '0',
            margin: '0px 24px',

    },
    StyleBoxContainerTitle:{
        /* text */


        /* Auto Layout */

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',

        position: 'static',
        width: '232px',
        height: '8px',
        left: '0px',
        top: '0px',


        /* Inside Auto Layout */

        flex: 'none',
        order: '0',
        flexGrow:' 0',
        margin: '0px 24px',

    },
    ContainerMenuRight:{
        /* CTA derecho menu */


            /* Auto Layout */

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',

            position: 'static',
            width: '290px',
            height: '34px',
            left: '941px',
            top: '11px',


            /* Inside Auto Layout */

            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0px 1289px',
    }

  });
  export default useSteyles;