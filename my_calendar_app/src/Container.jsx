import React from 'react';
import DayCell from './DayCell';

export default function Container(props) {
  let days = [];
  for(let i = 1; i < 32; i++) {
    days.push(i);
  }

  let currentDate = new Date()

  // console.log(.toLocalString('en-US', {month: 'long'}))

  const renderDays = days.map((element, index) => {
    return (<div className = "daycell" key= { index }><p>{ element }</p> </div>);
  })

  const currentWeekday = currentDate.getDay();
  const currentDayOfMonth = currentDate.getDate();
  const daysElapsed = currentDayOfMonth - 1

  7 - ((daysElapsed % 7 + 1) - currentWeekday)

  for(let i = 0; i < currentWeekday; i++) {
    renderDays.unshift(<div className="daycell" />)
  }

  return (
    <main className="maincontainer">
      <h1>{currentDate.toLocaleString('en-US', {month: 'long'})} </h1>
        <section  className = "monthbox">
          {renderDays}
          <p>{ currentDate.toString()}</p>
        </section>
    </main>
    );
}
