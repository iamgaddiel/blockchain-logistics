import React from 'react'
import { Outlet } from 'react-router-dom'

// images
import Logo from "../../assets/img/logo.png"
import Navbar from '../Navbar/Navbar'

const AppLayout = () => {
    return (
        <>
            <header className="header_area">
                <div className="top_menu d-lg-block d-none">
                    <div className="container">
                        <div className="float-left">
                            <ul className="left_side">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-behance"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="float-right">
                            <ul className="right_side">
                                <li>
                                    <a href="#">
                                        <i className="lnr lnr-phone-handset"></i>
                                        012-6532-568-9746
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html#">
                                        <i className="lnr lnr-envelope"></i>
                                        <span className="__cf_email__"
                                            data-cfemail="8de8e0e8ffeae8e3eef4cdeee2e1e2ffe1e4efa3eee2e0">[email&#160;protected]</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg w-100">
                        <div className="container">

                            <a className="navbar-brand logo_h" href="index.html">
                                <img src={Logo} alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <Navbar />
                        </div>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default AppLayout