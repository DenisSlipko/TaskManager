import Timer from "../Components/Timer";
import { useRef } from "react";

function TaskCard(props) {
  const { title, text, data } = props;

  const refFront = useRef(null);
  const refBack = useRef(null);
  const swapCardSide = () => {
    refFront.current.style.transform = "rotateX(180deg)";
    refBack.current.style.transform = "rotateX(360deg)";
  };
  const swapCardSideBack = () => {
    refFront.current.style.transform = "rotateX(0deg)";
    refBack.current.style.transform = "rotateX(180deg)";
  };

  return (
    <div className="dashboard__item dashboard__item">
      <div className="card">
        <article
          className="tracking-card"
          onClick={swapCardSide}
          ref={refFront}
        >
          <header className="tracking-card__header">
            <h4 className="tracking-card__title">{data.header}</h4>
            <img className="tracking-card__menu" src={""} alt="menu" />
          </header>
          <div className="tracking-card__body">
            <div className="tracking-card__time">
              <Timer />
            </div>
          </div>
        </article>
        <article
          className="tracking-card-back"
          onClick={swapCardSideBack}
          ref={refBack}
        >
          <header>{data.header}</header>
          <p>{data.text}</p>
        </article>
      </div>
    </div>
  );
}

export default TaskCard;
