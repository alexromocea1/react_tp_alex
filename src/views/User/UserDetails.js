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

            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">Nb tâches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    }

}
