import React, {Component} from 'react';
import Todoservice from "../../services/todo.service";
import Todo from "../../components/Todo";
import {Link} from "react-router-dom";


export default class Todolist extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    async componentDidMount() {
        let todos = await Todoservice.list();
        this.setState({todos: todos});
    }

    render() {
        let {todos} = this.state;
          return <div className="container">
            <h1>Liste des tâches</h1>
            <Link className="btn btn-primary" to="/todos/ajouter">Ajouter une tâche</Link>
            <div className="row">
                {todos.map(todo => {
                    return <div className="col-md-4">
                        <Todo todo={todo}/>
                    </div>
                })}
            </div>
        </div>
    }
}
