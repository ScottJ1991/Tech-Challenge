import React, { Component } from "react";
//import axios from 'axios';

//39 showing customs childern could be use
//import List from './List';

/*const data = [{"name":"test 1", "age":"12"},{"name":"test 2", "age":"16"}];
{data.map((person, i) => (
    <List Person={person} key={i}/>
))}*/

class Report1 extends Component {
  state = {
    userId: "",
    from: "",
    enddate: "",
    posts: []
  };

  //https://www.youtube.com/watch?v=4uzEUATtNHQ&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=30&t=0s
  /*componetDidMount () {
        // /users/{userId}/events
        axios.get('')
            .then(respond => {
                //console.log(respond)
                posts: respond.data
            })
    }*/

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.userId.length <= 0) {
      console.log("ERROR");
    } else {
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userId">User ID:</label>
            <input onChange={this.handleChange} id="userId" type="text" />
          </div>
          <label>Filter options</label>
          <div>
            <label htmlFor="from">Start date:</label>
            <input onChange={this.handleChange} id="from" type="date" />
          </div>
          <div>
            <label htmlFor="to">End date:</label>
            <input onChange={this.handleChange} id="to" type="date" />
          </div>
          <button>Serach</button>
        </form>
      </div>
    );
  }
}

export default Report1;
