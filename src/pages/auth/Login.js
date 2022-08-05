import React, { useState, useEffect } from 'react'
import Auth from '../../apis/Auth'
import { NavLink, useNavigate } from 'react-router-dom'


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        password: "",
        showPassword: false,
    });

    const navigate = useNavigate();


    const [errors, setErrors] = useState({
        email: '',
        password: '',
        error_message: ''
    });
    useEffect(() => {
        document.body.classList.remove("skin-green");
        document.body.classList.add("login-page");
    })
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePassword = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };
    const handleErrors = (e) => {
        setErrors(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            email: '',
            password: '',
            error_message: ''
        })

        Auth.login({ email: email, password: password.password }, (response) => {
            let info = {
                api_token: response?.data?.token,
                email: email
            }
            if (response?.data?.token) {

                localStorage.setItem("user", JSON.stringify(info));
                setTimeout(() => {
                    navigate('/');
                }, 500);

            } else {
                localStorage.clear();
                this.setState({
                    error_message: "Unauthorized"
                });
            }
        }, (err) => {
            setErrors({ ...errors, error_message: err?.response?.data?.error });
        });
    }


    return (
        <div className="container">
            <div className="login-box">
                <div className="login-logo">
                    <b>Log</b>In
                </div>
                <div className='card'>
                    <div className=" card-body login-card-body">
                        <p className='login-box-msg'>Login into the magic dashboard</p>

                        {
                            errors.error_message ? (<div className="alert alert-danger">{errors.error_message}</div>) : null
                        }

                        <form onSubmit={handleSubmit}>
                            <div className={`input-group mb-3 ${errors && errors.email ? 'has-error' : ''}`}>
                                <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleEmail} value={email} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                                {
                                    errors && errors.email ? (<div className="help-block">{errors.email[0]}</div>) : null
                                }
                            </div>

                            <div className={`input-group mb-3 ${errors && errors.password ? 'has-error' : ''}`}>
                                <input type={password.showPassword ? "text" : "password"} name="password" className="form-control" placeholder="Password" onChange={handlePassword("password")}
                                    value={password.password} />
                                <div class="input-group-append">
                                    <div class="input-group-text"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}>
                                        {password.showPassword ? <span class="fas fa-eye"></span> : <span class="fas fa-eye-slash"></span>}


                                    </div>
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                                {
                                    errors && errors.password ? (<div className="help-block">{errors.password[0]}</div>) : null
                                }
                            </div>
                            <div className="row">
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Log In</button>
                                    <p >
                                        <NavLink

                                            to="/register" class="text-center">Go to register
                                        </NavLink>
                                    </p>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;