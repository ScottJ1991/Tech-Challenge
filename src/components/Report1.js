import React, { Component } from 'react';
//import axios from 'axios';

import List from './List';

const data = [{"name":"test 1", "age":"12"},{"name":"test 2", "age":"16"}];
//39 showing customs childern could be use

class Report1 extends Component {
    state = {
        userID: '',
        posts: []
    }

    //https://www.youtube.com/watch?v=4uzEUATtNHQ&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=30&t=0s
    /*componetDidMount () {
        // /users/{userId}/events
        axios.get('')
            .then(respond => {
                //console.log(respond)
                posts: respond.data
            })
    }*/

    render () {
        /*const { posts } = this.state
        const postList = post.lenght ? (
            return(
                posts.map(post => {
                    <div key={psot.event}>event</div>
                })
            )
        ) : (
            retrun(
                <div>Loading...</div>
            )
        )*/
        return(
            <div>
                <form>
                    <div>
                        <label htmlFor="attendeeID">User ID:</label>
                        <input onChange={e => this.setState({userID: e.target.value})}id="attendeeID" type="text"/> 
                    </div>
                    <label>Fitler options</label>  
                    <div>
                        <label htmlFor="startdate">Start date:</label>        
                        <input id="startdate" type="date"/>
                    </div>
                    <div>
                        <label htmlFor="enddate">End date:</label>
                        <input id="enddate" type="date"/> 
                    </div>
                    <button onClick={}>Serach</button>
                </form>
                
                {data.map((person, i)=>(
                    <List Person={person} key={i}/>
                ))}
            </div>
        )
    }
}

export default Report1;
