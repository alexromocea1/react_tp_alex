import React, {Component} from 'react';
import Todoservice from "../../services/todo.service";
import {Link} from "react-router-dom";

export default class Tododetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            user:{},
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await Todoservice.details(id);
        this.setState({todo: response.data});
    }

    async handleDelete(){
        let {todo} = this.state;
        await Todoservice.delete(todo.id);
        this.props.history.push('/todos');
    }

    render() {
        let {todo} = this.state;
        let{user} = this.state;
        if(todo.completed === false){
            todo.completed = "Tâche en cours";
        }
        if(todo.completed === true){
            todo.completed = "Tâche terminée";
        }
        return <div className="container">
            <h1>Todo - {todo.title}</h1>
            <h2>Status : {todo.completed}</h2>
            
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
            <Link to={`/todos/${todo.id}/modifier`} className="btn btn-warning">Modifier</Link>
            <Link to={`/utilisateurs/1`} className="btn btn-success">Voir l'utilisateur</Link>
        </div>
    }
}
