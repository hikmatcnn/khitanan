import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime2 = (dimension, time) => {
  return (
    <div>
          <h2 className="title-font font-medium text-3xl text-gray-900">
          {time}
          </h2>
          <p className="leading-relaxed">{dimension}</p>
    </div>

  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function CountDown() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  //const endTime = stratTime + 243248; // use UNIX timestamp in seconds
  const endTime = new Date(1624681830); 
  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  
    return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-5">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Acara dimulai dalam</h1>
    </div>
    <div className="flex flex-wrap md:justify-between">
      <div className="p-4 md:w-1/4 sm:w-1/2">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime2("Hari", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime2("Jam", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime2("Menit", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {({ elapsedTime }) =>
          renderTime2("detik", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
      </div>
    </div>
  </div>
</section>
    )
}

export default CountDown;
