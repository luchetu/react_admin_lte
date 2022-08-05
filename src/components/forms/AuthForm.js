import React from 'react'

function AuthForm() {
    return (
        <form action="#" method="post">
            <div>
                <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handleEmail} value={this.state.email} />
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>

            </div>
            <div>
                <input type="password" name="password" className="form-control" placeholder="Password" />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>

            </div>
            <div className="row">
                <div className="col-xs-4">
                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default AuthForm