import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Todo extends Component{
    render(){

        let {todo}=this.props;

        if(todo.completed === false){
            todo.completed = "Tâche en cours";
        }
        if(todo.completed === true){
            todo.completed = "Tâche terminée";
        }
        
        

        return <div className="card">
            <div className="card-body">
                <h3 className="card-title">{todo.title}</h3>
                <p className="card-text">{todo.completed}</p>
               
                <Link to={`/todos/${todo.id}`} className="btn btn-success">Détails</Link>
                <Link to={`/todos/${todo.id}/modifier`} className="btn btn-warning">Modifier</Link>
            </div>
        </div>
    }
}