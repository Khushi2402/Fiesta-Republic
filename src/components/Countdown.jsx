import React, {useState, useEffect} from 'react'
import Clock from './Clock'

function Countdown() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("March 1, 2023").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          // Stop Timer
  
          clearInterval(interval.current);
        } else {
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });
  
    return (
      <div name='home' className="Countdown">
        <div className='pt-20'>
            <h1 className='p-10'>The wait is almost over. Get ready to be amazed!</h1>
            
        </div>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
    );
  }

export default Countdown
