import React, { Component } from 'react';
import Calendarbox from 'react-calendar';
import Navbar from "./Navbar"
import 'react-calendar/dist/Calendar.css';


class SmallCalendar extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <button className="btn addBtn">
                    <svg className="mr-1" width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path>
                        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                        <path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                    <span>Create</span>
                </button>
                <Calendarbox className="col-4" prev2Label={false} next2Label={false} />
                <div style={{ position: "absolute", top: "58%" }} className="col">
                    <button class="btn btn-light btn-sm py-1 rounded ml-5" type="button" data-toggle="collapse" data-target="#collapseExample"
                        aria-expanded="true" aria-controls="collapseExample">My Calendars <i class="fa fa-chevron-down" aria-hidden="false"></i>
                    </button>
                    <div class="collapse" id="collapseExample">
                        <ul>
                            <li className="m-2"><input checked type="checkbox" class="form-check-input" id="exampleCheck1" /> Mukhtar Ahmad</li>
                            <li className="m-2"><input checked type="checkbox" class="form-check-input" id="exampleCheck1" /> Birthdays</li>
                            <li className="m-2"><input checked type="checkbox" class="form-check-input" id="exampleCheck1" /> Reminders</li>
                            <li className="m-2"><input checked type="checkbox" class="form-check-input" id="exampleCheck1" /> Tasks</li>
                        </ul>
                    </div>
                    <button class="btn btn-light btn-sm py-1 mt-2 ml-5 rounded d-flex flex-col" type="button" data-toggle="collapse" data-target="#collapseExample"
                        aria-expanded="true" aria-controls="collapseExample">Other Calendars <i class="ml-1 fa fa-chevron-down" aria-hidden="false"></i>
                    </button>
                    <div className="ml-5 mt-3"><input checked type="checkbox" class="form-check-input" id="exampleCheck1" /> Holidays in India</div>
                </div>
                <small style={{position:"absolute", bottom:"0", left:"5%"}} className="font-weight-lighter ml-3">Terms - Privacy</small>
            </div>
        )
    }
}


export default SmallCalendar