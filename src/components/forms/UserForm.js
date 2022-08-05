import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ validation_errors, user, handleChange, values }) => {


    return (
        <div>
            <div className="col-md-8">
                <div>
                    <div className="box-header with-border">
                        <h3 className="box-title">{user?.id ? 'Edit user #' + user.id : 'Add User'}</h3>
                        <Link to='/users/list' className="btn btn-warning btn-sm pull-right"><i className="fa fa-arrow-left"></i> Return back</Link>
                    </div>
                    <div class="card-body">
                        <div className={`form-group ${validation_errors.first_name ? 'has-error' : ''}`}>
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" onChange={handleChange} value={user?.id ? user.first_name : values.first_name} name="first_name" required />

                            {
                                validation_errors.first_name && <div className="help-block">{validation_errors.first_name}</div>
                            }
                        </div>
                        <div className={`form-group ${validation_errors.last_name ? 'has-error' : ''}`}>
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" onChange={handleChange} value={user?.id ? user.last_name : values.last_name} name="last_name" required />

                            {
                                validation_errors.last_name && <div className="help-block">{validation_errors.last_name}</div>
                            }
                        </div>
                        <div className={`form-group ${validation_errors.email ? 'has-error' : ''}`}>
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Email" onChange={handleChange} value={user?.id ? user.email : values.email} name="email" required />
                            {
                                validation_errors.email && <div className="help-block">{validation_errors.email}</div>
                            }
                        </div>

                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Form;