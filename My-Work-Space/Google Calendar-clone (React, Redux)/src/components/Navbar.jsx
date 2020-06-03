import React, { Component } from 'react';

class Navbar extends Component {

    autoClick = (index) => {
        let link = document.querySelectorAll('.rbc-btn-group button');
        link[index].click()
        
    }

    naviMonth = (index) => {
        let navigatemonth = document.querySelectorAll(".react-calendar__navigation__arrow")
        navigatemonth[index].click()
        // console.log(navigatemonth)
    }

    render() {

        return (
            <nav className="fixed-top py-2 border-bottom">
                <div className="d-flex col">
                    <div className="d-flex justify-content-around col-5">
                        <button className="btn btn-light"><i className="fa fa-bars mt-2" aria-hidden="true"></i></button>
                        <div><img width="35" height="35" src="google-calendar.svg" alt="" /> <span style={{ position: "relative", fontSize: "23px", top: "15%" }} className="text-muted ml-2">Calendar</span></div>
                        <button onClick={() => this.autoClick(0)} className="btn border rounded btn-light btn-sm">Today</button>
                        <div><button onClick={() => {this.autoClick(1); this.naviMonth(1)}} className="btn btn-light text-secondary"><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                            <button onClick={() => {this.autoClick(2); this.naviMonth(2)}} className="btn btn-light text-secondary"><i className="fa fa-chevron-right" aria-hidden="true"></i></button></div>
                        <div id="labelContent" className="mt-2"></div>
                    </div>
                    <div className="d-flex col justify-content-end">
                        <div className="mx-1"><button className="btn btn-light text-secondary"><i className="fa fa-search" aria-hidden="true"></i></button></div>
                        <div className="mx-1"><button className="btn btn-light text-secondary"><i className="fa fa-question-circle-o" aria-hidden="true"></i></button></div>
                        <div className="mx-1"><button className="btn btn-light text-secondary" data-toggle="dropdown"><i className="fa fa-cog" aria-hidden="true"></i></button>
                            <div className="dropdown-menu shadow">
                                <div className="dropdown-item text-secondary" href="#">Settings</div>
                                <div className="dropdown-item text-secondary" href="#">Trash</div>
                                <div className="dropdown-divider text-secondary"></div>
                                <div className="dropdown-item text-secondary" href="#">Density and Color</div>
                                <div className="dropdown-item text-secondary" href="#">Print</div>
                                <div className="dropdown-divider text-secondary"></div>
                                <div className="dropdown-item text-secondary" href="#">Get add-ons</div>
                            </div>
                        </div>
                        <div className="mx-1"><button type="button" className="btn rounded btn-light border dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Week
                        </button>
                            <div className="dropdown-menu shadow">
                                <button onClick={() => this.autoClick(5)} className="dropdown-item btn" href="#">Day</button>
                                <button onClick={() => this.autoClick(4)} className="dropdown-item btn" href="#">Week</button>
                                <button onClick={() => this.autoClick(3)} className="dropdown-item btn" href="#">Month</button>
                                <button className="dropdown-item btn" href="#">Year</button>
                                <button onClick={() => this.autoClick(6)} className="dropdown-item btn" href="#">Schedule</button>
                                <button className="dropdown-item btn" href="#">4 Days</button>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item"><i className="fa fa-check mr-2" aria-hidden="true"></i>Show weekends</div>
                                <div className="dropdown-item"><i className="fa fa-check mr-2" aria-hidden="true"></i>Show declined events</div>
                            </div>
                        </div>
                        <div className="mx-1"><button className="btn btn-light text-secondary"><i className="fa fa-th" aria-hidden="true"></i></button></div>
                        <div className="mx-1"><img style={{ borderRadius: "50%" }} width="40" height="40" src="http://themesground.com/Superb/images/admin-photo.jpg" alt="" /></div>
                    </div>
                </div>
            </nav>
        )
    }
}



export default Navbar;