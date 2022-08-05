import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ validation_errors, user, handleChange, values }) => {


    return (
        <div>
            <div className="col-md-8">
                <div>
                    <div className="box-header with-border">
                        <h3 className="box-title">Edit Settings</h3>
                        <Link to='/' className="btn btn-warning btn-sm pull-right"><i className="fa fa-arrow-left"></i> Return back</Link>
                    </div>
                    <div class="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Email" onChange={handleChange} value={!values.email ? user?.email : values.email} name="email" required />

                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" placeholder="Password" onChange={handleChange} value={!values.password ? user?.password : !values.email} name="password" required />

                        </div>


                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Form;