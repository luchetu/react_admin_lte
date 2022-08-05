import React, { useEffect } from 'react'
import Breadcrumb from '../components/partials/Breadcrumb';

function DashBoard() {
    useEffect(() => {
        document.body.classList.remove("login-page");
        document.body.classList.add("skin-green");

    })
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Dashboard
                    <small>Control panel</small>
                </h1>
                <Breadcrumb />
            </section>
            <section className="content">
            </section>
        </div>
    )
}

export default DashBoard