import React, { Component } from 'react';
//import axios from 'axios';

class Report3 extends Component {
    // /events/{eventId}/attendees

    render () {
        return(
            <form>
                <label htmlFor="eventID">Event ID:</label>
                <input id="eventID" type="text"/>
                <button>Serach</button>
            </form>
        )
    }
}

export default Report3