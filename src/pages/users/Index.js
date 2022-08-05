import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../components/partials/Breadcrumb';
import Table from '../../components/Table'
import { fetcAllUsers } from '../../apis/Users'

function Index() {

    const [users, setUsers] = useState([])
    let page = 2

    useEffect(() => {
        (async () => {
            const response = await fetcAllUsers(page);
            setUsers(response.data)
        })();

    }, [])


    console.log(users)
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>DataTables</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">DataTables</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </section>
            <Table users={users} />
        </div>
    );
}

export default Index