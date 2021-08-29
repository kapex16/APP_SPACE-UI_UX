import "./style.css";

function CardCapsule(props) {
  return (
    <div className="card-container">
      <img src={props.img} alt={props.alt} className="card-image"></img>
      <div className="card-text">
        <p className="card-title">{props.title}</p>
        <p className="card-subtitle">{props.subtitle}</p>
        <p className="card-paragraph">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default CardCapsule;
