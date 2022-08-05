import React from 'react';
import Breadcrumb from '../../components/partials/Breadcrumb';
import UserForm from '../../components/forms/UserForm';
import useForm from '../../hooks/useForm';
import { useNavigate } from "react-router-dom";


const Add = () => {
    const navigate = useNavigate();
    const formLogin = () => {

        navigate("/users/list");
    }
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Add User
                </h1>

                <Breadcrumb />

            </section>

            <section class="content">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-md-12">

                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Add User <small>creating users page</small></h3>
                                </div>
                                <form onSubmit={handleSubmit}>

                                    <UserForm user={{}}
                                        handleChange={handleChange}
                                        values={values}
                                        validation_errors={errors}
                                    />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}



export default Add;