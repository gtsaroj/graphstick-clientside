import React, { useState, useEffect } from 'react';
import "../CrazyDeal/CrazyDeal.css"

const Timer = ({ endTime, onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = endTime - now;

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        onTimerEnd(); // Callback to handle timer end
      } else {
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [endTime, onTimerEnd]);

  return (
    <div className="duration">
    <div className="hours">
      {timeLeft.hours}
      <br />
      hr
    </div>
    <div className="minutes">
      {timeLeft.minutes} <br />
      min
    </div>
    <div className="seconds">
      {timeLeft.seconds} <br />
      sec
    </div>
  </div>
  );
};

export default Timer;
