import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { connect } from 'react-redux';
import { addEvent, deleteEvent } from '../actions/action';
import { bindActionCreators } from 'redux';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

class BigCalendar extends Component {

    state = {
        start: "",
        end: "",
        title: "",
        description: "",
        remindMe: false,
        calendarEvent: {},
        events: [],
        edit: false,
        delete: false
    }

    handleOnSubmit = () => {
        const { start, end } = this.state.calendarEvent
        const event = {
            start: new Date(start),
            end: new Date(end),
            title: this.state.title,
            description: this.state.description,
            remindMe: false,
            delete: false
        }
        this.props.addEvent(event)
        this.setState({
            edit: false,
            start: "",
            end: '',
            title: "",
            description: "",
            remindMe: false,
            delete: false
        });
        let clear = document.querySelectorAll(".create-course-form");
        console.log(clear)
    }

    handleSelectEvent = (event, e) => {
        let { title, start, end, allDay } = event;
        const data = { title, start, end, allDay };
        this.modalClick()
        this.setState({
            edit: true,
            calendarEvent: data,
            remindMe: !this.state.remindMe
        });
    };

    handleSelect = (event, e) => {
        const { start, end } = event;
        const data = { title: "", start, end, allDay: false };
        this.setState({
            calendarEvent: data,
        });
        this.modalClick()
    }

    deleteitem = () => {
        const { start, end } = this.state.calendarEvent
        const event = {
            start: new Date(start),
            end: new Date(end),
            title: this.state.title,
            description: this.state.description,
            remindMe: false,
            delete: true
        }
        this.props.deleteEvent(event)
    }

    componentDidMount() {
        const label = document.querySelector(".rbc-toolbar-label")
        if (label) {
            document.querySelector("#labelContent").append(label)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.events !== this.state.events) {
            this.setState({ events: this.props.events })
        }
    }

    modalClick = () => {
        let modal = document.querySelector(".btn-primary")
        modal.click()
    }

    render() {
        return (
            <div style={{ position: "absolute", top: "15%", right: "2%", width: "78%", height: "85%" }}>
                <button style={{ display: "none" }} type="button" className="btn rounded btn-primary" data-toggle="modal"
                    data-target="#exampleModal" onClick={() => this.modalClick()}>
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content col-8">
                            <div className="modal-header">
                                {this.state.edit &&
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Event</h5>
                                }
                                {!this.state.edit &&
                                    <h5 className="modal-title" id="exampleModalLabel">Add Event</h5>
                                }
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form-group">
                                    <input type="text" onChange={(e) => this.setState({ title: e.target.value })}
                                        className="create-course-form form-control mb-2" placeholder="Add Title" />
                                    <input type="text" onChange={(e) => this.setState({ description: e.target.value })}
                                        className="create-course-form form-control mb-2" placeholder="Add Description" />
                                    <div className="form-check mr-auto">
                                        {this.state.remindMe ? <div className="form-check-label">Reminder Set!</div> :
                                            <div className="form-check-label">Remind Me</div>
                                        }
                                        <input className="form-check-input"
                                            onChange={() => this.setState({ remindMe: !this.state.remindMe })}
                                            type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                        <span className="ml-2">Yes</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios"
                                            onChange={() => this.setState({ remindMe: !this.state.remindMe })}
                                            id="exampleRadios2" value="option2" />
                                        <span className="ml-2">No</span>
                                    </div>
                                    {this.state.edit ?
                                        <button data-dismiss="modal" onClick={() => this.deleteitem()} type="button" className="btn btn-secondary rounded">
                                            <i className="fa fa-trash ml-auto" aria-hidden="true"></i></button> :
                                        <button data-dismiss="modal" type="button" className="btn btn-secondary rounded">
                                            Close</button>
                                    }
                                    <button onClick={() => this.handleOnSubmit()} type="button" data-dismiss="modal"
                                        className="btn btn-primary rounded">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Calendar
                    tooltipAccessor={() => ("edit")}
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="week"
                    startAccessor="start"
                    endAccessor="end"
                    selectable={true}
                    events={this.props.events}
                    onSelectSlot={this.handleSelect}
                    onSelectEvent={this.handleSelectEvent}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        events: state.events
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addEvent, deleteEvent }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar);