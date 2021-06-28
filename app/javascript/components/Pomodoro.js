import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TimerWrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const CurrentTimeLeft = styled.div`
  font-size: 19px;
  margin: 8px 0 12px 0;
  font-weight: bold;
`

const TimeLefts = styled.span`
  margin: 0 5px;
`

const StartButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 10px 30px;
  background: #f2a115;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

function Pomodoro() {
  let [secondsLeft, setSecondsLeft] = useState(60 * 25);
  let [timer, setTimer] = useState();

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer)
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  return(
    <>
      <h1>Pomodoro Timer</h1>
      <TimerWrapper>
        <CurrentTimeLeft>
          <TimeLefts>{Math.floor(secondsLeft / 60)} minutes  {secondsLeft} seconds left.</TimeLefts>
        </CurrentTimeLeft>
        <StartButton onClick={start}>start</StartButton>
      </TimerWrapper>
    </>
  );
}
  
export default Pomodoro