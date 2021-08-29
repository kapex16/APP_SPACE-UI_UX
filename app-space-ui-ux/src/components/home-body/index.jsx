import "./style.css";
import React from "react";
import CapImg from "../../asset/cap.png";
import GetOut from "../../asset/getout.jpg";
import Woodstock from "../../asset/woodstock.jpg";
import Roman from "../../asset/roman.jpg";
import Curie from "../../asset/curie.jpg";
import BlackHole from "../../asset/bh.mp4";
import CapView from "../../asset/capview.png";
import CardCapsule from "../card-capsule";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CardHistory from "../card-history";
import Footer from '../footer';

function HomeBody() {
  return (
    <React.Fragment>
    <div className="container-body roboto">
      <div className="first-block">
        <h3 className="title-body">
          Lo último en <span className="font-black">Cápsulas</span>
        </h3>
        <div className="card-capsule-container">
          <CardCapsule
            img={CapImg}
            alt="a space capsule"
            title="Nuestras Cápsulas"
            subtitle="Lo último en tecnología"
            paragraph="El viaje a través del tiempo es un concepto de desplazamiento hacia delante o atrás en diferentes puntos del tiempo, similar a como se hace un desplazamiento en el espacio. Además, algunas interpretaciones de viaje en el tiempo."
          ></CardCapsule>
          <CardCapsule
            img={CapView}
            alt="another space capsule"
            title="Disfruta de la comodidad"
            subtitle="Siéntete como en casa"
            paragraph={`Similar a como se hace un desplazamiento en el espacio. El viaje a través del tiempo es un concepto de desplazamiento hacia delante o atrás en diferentes puntos del tiempo.\nSugieren la posibilidad de viajes entre realidades o universos paralelos`}
          ></CardCapsule>
        </div>
      </div>

      <div className="second-block">
        <h3 className="title-body-paradox">
          Descubre tus <span className="font-black">Paradojas</span>
        </h3>
        <div className="paradox-block">
          <img src={GetOut} alt="" className="cap-img"></img>
          <video
            src={BlackHole}
            autoplay="autoplay"
            muted
            loop
            className="paradox-video"
          ></video>
          <div className="paradox-text">
            <p className="paradox-title">Paradoja del abuelo</p>
            <p className="paradox-subtitle">Descubre</p>
            <p className="paradox-paragraph">
              Si viajaras en el tiempo para matar a tu abuelo ¿seguirías
              existiendo o te extinguirías como la estela de un cometa una vez
              que le asesinases, pues nunca habrías podido ser concebido? En
              realidad, si nos basamos en la paradoja, seguirás existiendo en tu
              universo original, pero no en aquel en que conseguiste matar a tu
              abuelo, pero entonces tendríamos que asumir que existen los
              universos paralelos.
            </p>
            <Button variant="contained" color="secondary" size="large">
              PARADOJAS
            </Button>
          </div>
        </div>
      </div>

      <div className="dino-block">
        <div className="dino-text-block">
          <p className="dino-title">¿Tenían plumas los dinosaurios?</p>
          <p className="dino-paragraph">
            Ven a comprobarlo. Busca un viaje a tu medida y anímate a descubrir
            los pequeños secretos de la historia de nuestro planeta
          </p>
          <Button variant="contained" color="secondary" size="large">
            MIRA NUESTROS PLANES<ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </div>
      </div>

      <div>
        <h3 className="title-body-paradox">
          Vive la <span className="font-black">Historia</span>
        </h3>
        <div className="history-card-container">
          <CardHistory
            img={Woodstock}
            alt={"woodstock festival"}
            title={`Woodstock`}
            date={`1959`}
            paragraph={`El Festival de Woodstock fue una congregación hippie con música de rock, realizado desde el viernes 15 hasta la madrugada del lunes 18 de agosto de 1969. Tuvo lugar en una granja de 240 hectáreas en Bethel, condado de Sullivan, estado de Nueva York.`}
          ></CardHistory>
          <CardHistory
            img={Roman}
            alt={"roman empire"}
            title={`Imperio Romano`}
            date={`476 d.C.`}
            paragraph={`El poder absoluto de Roma, capital del Imperio, se fue debilitando con el tiempo. Entre los años 235 y 300 la única prioridad de Roma fue la defensa de las fronteras del Imperio de los continuos ataques de los pueblos bárbaros y de los que provenían del imperio sasánido de Persia.`}
          ></CardHistory>
          <CardHistory
            img={Curie}
            alt={"marie curie"}
            title={`La radioactividad`}
            date={`1920`}
            paragraph={`Marie Curie fue una científica polaca nacionalizada francesa. Pionera en el campo de la radiactividad, fue la primera persona en recibir dos premios Nobel en Física y Química y la primera mujer en ocupar el puesto de profesora en la Universidad de París.`}
          ></CardHistory>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </React.Fragment>
  );
}

export default HomeBody;
