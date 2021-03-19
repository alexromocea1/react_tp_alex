import React, {Component} from 'react';
import {UserService} from "../../services/user.service";

export default class UserDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        let response = await UserService.details(this.props.match.params.id);
        this.setState({user: response.data});
    }

    
    render() {
        let {user} = this.state;
        return <div className="container">
            <h1>{user.name}</h1>
            <p>Email : {user.email}</p>
            <p>Name : {user.name}	</p>
            <p>Username : {user.username}</p>
            <p>Email: {user.email}</p>    	
           
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>

           
        </div>
    }

}
