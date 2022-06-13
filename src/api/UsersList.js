import React, { Component } from 'react'
import axios from 'axios'

class UsersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const url=process.env.REACT_APP_BACKOFFICE_PROTOCOL + "://" +
            process.env.REACT_APP_BACKOFFICE_SERVICE + ":" +
            process.env.REACT_APP_BACKOFFICE_PORT + "/" +
            process.env.REACT_APP_BACKOFFICE_API_ENDPOINT
        axios.get(url)
        .then( response => {
            this.setState({
                users: response.data
            })
            console.log(response.data)
        })
        .catch(function (error) {
            if (error.response) { // get response with a status code not in range 2xx
              console.log("ul - react, error: " + error.response.data);
              console.log("ul - react, error status: " + error.response.status);
              console.log("ul - react, error response headers: " + error.response.headers);
            } else if (error.request) { // no response
              console.log("ul - react, request error: " + error.request);
              // instance of XMLHttpRequest in the browser
              // instance ofhttp.ClientRequest in node.js
            } else { // Something wrong in setting up the request
              console.log('ul - react, Error', error.message);
            }
            console.log(error.config);
        });
    }

    render() {
        const {users} = this.state
        return (
            <div>
                <h1>List of Users:</h1>
                {users.map(user => <div key={user.firstName}>{user.firstName} {user.lastName} - {user.email}</div>)}

            </div>
        )
    }
}

export default UsersList