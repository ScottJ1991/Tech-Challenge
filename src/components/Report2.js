import React, { Component } from 'react';
//import axios from 'axios';

class Report2 extends Component {
    // /events?{organiserId}

    render () {
        return(
            <form>
                <label htmlFor="hostID">User ID:</label>
                <input id="hostID" type="text"/>
                <button>Serach</button>
            </form>
        )
    }
}

export default Report2