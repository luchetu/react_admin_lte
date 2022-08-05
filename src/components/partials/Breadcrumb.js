import React from 'react'

function Breadcrumb() {
  return (
    <div><ol className="breadcrumb">
    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
    <li className="active">Dashboard</li>
</ol></div>
  )
}

export default Breadcrumb
