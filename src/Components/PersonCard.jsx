import ModalCardCreator from "./ModalCardCreator";
function PersonCard(props) {
  const {
    activeClick,
    addTaskCard,
    setActiveClick,
    data,
    setData,
    setCreateCard,
  } = props;
  return (
    <>
      <div className="dashboard__person">
        <div className="info-card">
          <img src={""} alt="" className="info-card__photo" />
          <div className="info-card__text">
            <p className="info-card__subtitle">Account for</p>
            <h3 className="info-card__title">Denis</h3>
          </div>
          <div className="control-container">
            <button className="add-task-btn" onClick={addTaskCard}>
              ADD TASK
            </button>
          </div>
        </div>
        <div className="view-selector">
          <div className="view-selector__item">Daily tasks</div>
          <div className="view-selector__item view-selector__item--active">
            Postponed
          </div>
          <div className="view-selector__item">Done</div>
        </div>
      </div>
      <ModalCardCreator
        activeClick={activeClick}
        setActiveClick={setActiveClick}
        data={data}
        setData={setData}
        setCreateCard={setCreateCard}
      />
    </>
  );
}

export default PersonCard;
