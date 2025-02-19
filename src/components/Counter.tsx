import React, { useState, useEffect } from 'react';
import styles from '../styles/counter.module.css';

type TimeType = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const Counter = () => {
  const { mainContainer, timeContainer, inputClass, buttonContainer, button } = styles;

  const [time, setTime] = useState<TimeType>({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Update time after handling overflow and changes
  const handleTimeChange = (value: number, field: keyof TimeType) => {
    setTime((prevState) => {
      let newTime = { ...prevState, [field]: value };

      if (field === 'seconds' && value >= 60) {
        newTime.seconds = 0;
        newTime.minutes += Math.floor(value / 60);
      }

      if (field === 'minutes' && value >= 60) {
        newTime.minutes = 0;
        newTime.hours += Math.floor(value / 60);
      }

      return newTime;
    });
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof TimeType) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      handleTimeChange(value, field);
    }
  };

  // Start Timer
  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTime((prevState) => {
          let { hours, minutes, seconds } = prevState;
          let newHours = hours;
          let newMinutes = minutes;
          let newSeconds = seconds;

          if (newSeconds === 0) {
            if (newMinutes === 0) {
              if (newHours === 0) {
                clearInterval(id);
                setIsRunning(false);
                return prevState;
              } else {
                newHours -= 1;
                newMinutes = 59;
              }
            } else {
              newMinutes -= 1;
            }
            newSeconds = 59;
          } else {
            newSeconds -= 1;
          }

          return {
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        });
      }, 1000);

      setIntervalId(id);
      setIsRunning(true);
    }
  };

  // Stop Timer
  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIsRunning(false);
  };

  return (
    <div className={mainContainer}>
      <h2>Countdown Timer</h2>
      <div className={timeContainer}>
        {['hours', 'minutes', 'seconds'].map((field) => (
          <div key={field} className={inputClass}>
            <h2>{field.charAt(0).toUpperCase() + field.slice(1)}</h2>
            <input
              type="number"
              value={time[field as keyof TimeType]}
              onChange={(e) => handleInputChange(e, field as keyof TimeType)}
              maxLength={2}
            />
          </div>
        ))}
      </div>
      <div className={buttonContainer}>
        <button
          className={button}
          onClick={startTimer}
          disabled={isRunning} // Disable start button when timer is running
        >
          Start
        </button>
        <button
          className={button}
          onClick={stopTimer}
          disabled={!isRunning} // Disable stop button when timer is not running
        >
          Stop
        </button>
      </div>
    </div>
  );
};
