import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/partials/Breadcrumb';
import ProfileForm from '../components/forms/ProfileForm';
import useForm from '../hooks/useForm';
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();
    const formLogin = () => {

        navigate("/");
    }

    const [user, setUser] = useState({});


    // useEffect(() => {
    //     setUser(localStorage.getItem("user"))
    // }, user)
    console.log(localStorage.getItem("user"))
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Update Settings
                </h1>

                <Breadcrumb />

            </section>

            <section class="content">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-md-12">

                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Update settings <small>updating users page</small></h3>
                                </div>
                                <form onSubmit={handleSubmit}>

                                    <ProfileForm user={user}
                                        handleChange={handleChange}
                                        values={values}
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



export default Profile;