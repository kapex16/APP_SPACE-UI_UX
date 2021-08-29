import "./style.css";

function CardHistory(props) {
  return (
    <div className="history-card">
      <img src={props.img} alt={props.alt} className="history-img"></img>
      <p className="history-title">{props.title}</p>
      <p className="history-subtitle">{props.date}</p>
      <p className="history-text">{props.paragraph}</p>
      <div className="link-block">
        <a href="" className="history-link">VIAJA CON AMIGOS</a>
        <a href="" className="history-link">COMPARTE</a>
      </div>
    </div>
  );
}

export default CardHistory;
