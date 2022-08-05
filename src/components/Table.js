import React from 'react'
import { Link } from 'react-router-dom'
function Table({ users }) {
    return (

        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Users List</h3>
                            </div>

                            <div className="card-body">
                                <Link to='/users/add' className="btn btn-primary pull-right">Add User <i className="fa fa-plus"></i></Link>
                                <table id="example2" class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th width="15%">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((value) => {
                                            return (
                                                <tr>
                                                    <td>{value.first_name}</td>
                                                    <td>{value.last_name}</td>
                                                    <td>{value.email}</td>
                                                    <td>
                                                        <Link to={'/users/edit/' + value.id} className="btn btn-info btn-sm"><i
                                                            className="fa fa-edit"></i></Link>

                                                        <a href="#" className="btn btn-danger btn-sm"><i
                                                            className="fa fa-trash"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th width="15%">Actions</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table