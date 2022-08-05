import React from 'react'
import {
    Route,
    Routes
} from 'react-router-dom';
import ListUsers from "../pages/users/Index";
import AddUsers from "../pages/users/Add";
import EditUsers from "../pages/users/Edit";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/Profile";
import AuthenticatedRoute from './AuthenticatedRoute';

function RoutesComponent() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <AuthenticatedRoute>
                        <DashBoard />
                    </AuthenticatedRoute>
                }
            />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/users/list' element={<AuthenticatedRoute><ListUsers /></AuthenticatedRoute>} />
            <Route path='/users/add' element={<AuthenticatedRoute><AddUsers /></AuthenticatedRoute>} />
            <Route path='/users/edit/:id' element={<AuthenticatedRoute><EditUsers /></AuthenticatedRoute>} />
            <Route path='/profile' element={<AuthenticatedRoute><Profile /></AuthenticatedRoute>} />

        </Routes>
    )
}

export default RoutesComponent