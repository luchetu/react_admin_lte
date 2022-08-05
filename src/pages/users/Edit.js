import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../components/partials/Breadcrumb';
import useForm from '../../hooks/useForm';
import { useNavigate, useParams } from "react-router-dom";
import UserForm from '../../components/forms/UserForm';
import { fetchSingleUser } from '../../apis/Users'

function Edit() {

    const navigate = useNavigate();
    let { id } = useParams();
    const [user, setUser] = useState([])
    let page = 2

    useEffect(() => {
        (async () => {
            const response = await fetchSingleUser(id);
            setUser(response.data)
        })();

    }, [])
    console.log(user)
    const formLogin = () => {

        navigate("/users/list");
    }
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Edit User
                </h1>

                <Breadcrumb />

            </section>

            <section class="content">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-md-12">

                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Edit User <small>editing users page</small></h3>
                                </div>
                                <form onSubmit={handleSubmit}>

                                    <UserForm user={user}
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

export default Edit