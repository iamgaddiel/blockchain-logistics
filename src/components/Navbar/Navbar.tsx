import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <div className="row w-100">
                <div className="col-lg-12 pr-lg-0">
                    <ul className="nav navbar-nav ml-auto justify-content-end">
                        <li className="nav-item active">
                            <Link to={""} className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={"/about"} className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to={"/services"} className='nav-link'>Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar