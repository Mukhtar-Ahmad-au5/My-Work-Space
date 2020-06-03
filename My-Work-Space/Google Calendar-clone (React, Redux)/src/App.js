import React, { Component } from 'react';
import SmallCalendar from "./components/SmallCalendar" ;
import BigCalendar from "./components/BigCalender";
import './Calendar.css';

class App extends Component {
  render () {
    return (
      <div>
          <SmallCalendar/>
          <BigCalendar/>
      </div>
    );
  }
}

export default App;
