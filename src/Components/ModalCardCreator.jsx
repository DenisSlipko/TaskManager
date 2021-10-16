function ModalCardCreator(props) {
  const { activeClick, setActiveClick, data, setData, setCreateCard } = props;

  const addData = () => {
    setCreateCard(true);
    console.log(data);
    setCreateCard(true);
  };

  return activeClick ? (
    <form className="modal-card-creator" onSubmit={addData}>
      <button className="btn-exit-card" onClick={() => setActiveClick(false)}>
        X
      </button>
      <label htmlFor="" className="modal-label-text">
        Header name:
      </label>

      <input
        type="text"
        className="task-text-input"
        onChange={(e) => setData({ ...data, header: e.target.value })}
        value={data.header}
      />
      <label htmlFor="" className="modal-label-text">
        Task:
      </label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="area-text-modal"
        onChange={(e) => setData({ ...data, text: e.target.value })}
        value={data.text}
      ></textarea>
      <button className="add-task-card-btn" type="submit">
        ADD
      </button>
    </form>
  ) : (
    ""
  );
}

export default ModalCardCreator;
