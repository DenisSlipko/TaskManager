import TaskCard from "./TaskCard";

function TaskCardContainer(props) {
  const { cards = [], data, createCard } = props;
  return (
    <div className="dashboard__content">
      {/* {cards.map((cards) => (
        <TaskCard key={cards.id} {...cards} />
      ))} */}
      {createCard ? <TaskCard data={data} /> : ""}
    </div>
  );
}

export default TaskCardContainer;
