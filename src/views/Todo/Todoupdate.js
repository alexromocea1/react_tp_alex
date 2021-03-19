import React, {Component} from 'react';
import Todoservice from "../../services/todo.service";

export default class Todoupdate extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            title: "",
            completed: ""
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await Todoservice.details(id);
        this.setState({
            todo: response.data,
            title: response.data.title,
            completed: response.data.completed
        });
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {todo, title, completed} = this.state;

        let data = {
            title: title,
            completed: completed
        }

        await Todoservice.update(todo.id, data);
        this.props.history.push(`/articles/${todo.id}`);
    }

    render() {
        let {todo, title, completed} = this.state;
        return <div className="container">
            <h1>Modification de la tâche - {todo.title}</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" className="form-control" id="title" required value={title} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <textarea id="completed" rows="5" className="form-control" required value={completed} onChange={(e) => this.handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>


        </div>
    }
}
