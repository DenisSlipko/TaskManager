import React, { useState, useRef, useEffect } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useInterval(() => {
    if (!timerOn) return;

    setSeconds((seconds) => (seconds === 59 ? 0 : seconds + 1));
  }, 1000);

  useInterval(() => {
    if (!timerOn) return;

    setMinutes((minutes) => (minutes === 59 ? 0 : minutes + 1));
  }, 60000);

  useInterval(() => {
    if (!timerOn) return;

    setHours((hours) => (hours === 100 ? 0 : hours + 1));
  }, 3600000);

  return (
    <>
      <div className="time-container">
        {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </div>
      <div className="btn-timer-container">
        {timerOn === false && (
          <button className="btn-timer" onClick={() => setTimerOn(true)}>
            START
          </button>
        )}
        {timerOn === true && (
          <button className="btn-timer" onClick={() => setTimerOn(false)}>
            STOP
          </button>
        )}
        {
          <button
            className="btn-timer"
            onClick={() => {
              setTimerOn(false);
              setSeconds(0);
              setMinutes(0);
              setHours(0);
            }}
          >
            RESET
          </button>
        }
      </div>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer;
