import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";
import TaskCardContainer from "./TaskCardContainer";

function TaskDesk() {
  const [cards, setCards] = useState([]);
  const [task, setTask] = useState([]);
  const [activeClick, setActiveClick] = useState(false);
  const [createCard, setCreateCard] = useState(false);
  const [data, setData] = useState({ header: "", text: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("./data.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const jsonData = await response.json();
        setCards(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const addTaskCard = () => {
    setTask([...task, cards]);
    console.log("task was add");
    setActiveClick(true);
  };

  return (
    <div className="dashboard">
      <PersonCard
        addTaskCard={addTaskCard}
        activeClick={activeClick}
        setActiveClick={setActiveClick}
        data={data}
        setData={setData}
        setCreateCard={setCreateCard}
      />
      <TaskCardContainer
        cards={cards}
        activeClick={activeClick}
        data={data}
        setCreateCard={setCreateCard}
        createCard={createCard}
      />
    </div>
  );
}

export default TaskDesk;
