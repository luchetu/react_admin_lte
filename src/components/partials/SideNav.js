import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

function SideNav() {
  let location = useLocation();
  return (
    <div>
      {/* Main Sidebar Container */}
      {location.pathname != '/login' && location.pathname != '/register' ?
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">

            <span className="brand-text font-weight-light">User Dashboard</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className={location.pathname == '/users/list' ? 'active nav-item nav' : 'nav-item nav'}>
                  <NavLink to='/' className="nav-link">
                    <i class="fa fa-list" aria-hidden="true"></i>
                    <p>Dashboard</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/users/list' className="nav-link">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <p>
                      Users
                      <i className="fas fa-angle-left right" />
                    </p>
                    </NavLink>
                  <ul className="nav nav-treeview">
                    <li className={location.pathname == '/users/list' ? 'active nav-item' : 'nav-item'}>
                      <NavLink to='/users/add' className="nav-link">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <p>Add User</p>
                      </NavLink>
                    </li>
                    <li className={location.pathname == '/users/list' ? 'active nav-item' : 'nav-item'}>
                      <NavLink to='/users/list' className="nav-link">
                        <i class="fa fa-list" aria-hidden="true"></i>
                        <p>List Users</p>
                      </NavLink>
                    </li>

                  </ul>
                  <li className={location.pathname == '/users/list' ? 'active nav-item nav' : 'nav-item nav'}>
                    <NavLink to='/profile' className="nav-link">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                      <p>Settings</p>
                    </NavLink>
                  </li>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        : ""
      }
    </div>
  )
}

export default SideNav