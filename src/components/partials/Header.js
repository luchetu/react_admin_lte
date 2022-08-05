import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Auth from '../../apis/Auth'

function Header() {
    let location = useLocation();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        Auth.logout((response) => {
            navigate('/login');
        }, (err) => {
            alert(err);
        });
    }
    return (
        <div>
            {location.pathname != '/login' && location.pathname != '/register' ?
                <header className="main-header">
                    <nav className="navbar navbar-expand navbar-white navbar-light">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                            </li>
                            <li class="nav-item d-none d-sm-inline-block">
                                <a href="index3.html" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item d-none d-sm-inline-block">
                                <a href="#" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="navbar navbar-static-top">
                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>

                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">

                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src={process.env.REACT_APP_LOCAL_URL + 'dist/img/avatar4.png'}
                                            className="user-image" alt="User Image" />
                                        <span className="hidden-xs">{localStorage.getItem("user.name")}</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src={process.env.REACT_APP_LOCAL_URL + 'dist/img/avatar4.png'}
                                                className="img-circle" alt="User Image" />

                                            <p>
                                                {localStorage.getItem("user.name")}
                                                <small>Member since {localStorage.getItem("user.created_at")}</small>
                                            </p>
                                        </li>
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="#" className="btn btn-default float-left">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="#" onClick={handleLogout}
                                                    className="btn btn-default float-right">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                : ""
            }


        </div>
    )
}

export default Header