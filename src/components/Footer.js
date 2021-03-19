import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Nos réseaux sociaux :  </Link>
                        </li>
                        
                    </ul>
                    </div>
              </nav>
    }
}
