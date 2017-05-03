import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
    render() {
        return <div>
            <header id="fh5co-header-section" role="header" className="" >
                <div className="container">
                    <h1 id="fh5co-logo" className="pull-left">
                        <a href="index.html">
                            <img src="dist/images/logo.png" alt="Slant Free HTML5 Template" />
                        </a>
                    </h1>					
                    <nav id="fh5co-menu-wrap" role="navigation">
                        <ul className="sf-menu" id="fh5co-primary-menu">
                            <li className="active">
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#" className="fh5co-sub-ddown">Dropdown</a>
                                    <ul className="fh5co-sub-menu">
                                    <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                    <li><a href="right-sidebar.html">Right Sidebar</a></li>
                                    <li>
                                        <a href="#" className="fh5co-sub-ddown">Free HTML5</a>
                                        <ul className="fh5co-sub-menu">
                                            <li><a href="http://freehtml5.co/preview/?item=build-free-html5-bootstrap-template" target="_blank">Build</a></li>
                                            <li><a href="http://freehtml5.co/preview/?item=work-free-html5-template-bootstrap" target="_blank">Work</a></li>
                                            <li><a href="http://freehtml5.co/preview/?item=light-free-html5-template-bootstrap" target="_blank">Light</a></li>
                                            <li><a href="http://freehtml5.co/preview/?item=relic-free-html5-template-using-bootstrap" target="_blank">Relic</a></li>
                                            <li><a href="http://freehtml5.co/preview/?item=display-free-html5-template-using-bootstrap" target="_blank">Display</a></li>
                                            <li><a href="http://freehtml5.co/preview/?item=sprint-free-html5-template-bootstrap" target="_blank">Sprint</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">CSS3</a></li> 
                                </ul>
                            </li>
                            <li><a href="elements.html">Elements</a></li>
                            <li className="fh5co-special"><a href="contact.html">Get started</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div id="fh5co-hero">
                <a href="#fh5co-main" className="smoothscroll fh5co-arrow to-animate hero-animate-4"><i className="ti-angle-down"></i></a>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="fh5co-hero-wrap">
                            <div className="fh5co-hero-intro">
                                <h1 className="to-animate hero-animate-1">Slant. Free HTML5 Template</h1>
                                <h2 className="to-animate hero-animate-2">Lovely Made by <a href="http://freehtml5.co" target="_blank">FREEHTML5.co</a></h2>
                                <p className="to-animate hero-animate-3"><a href="#" className="btn btn-outline btn-lg">Get Started</a></p>
                            </div>
                        </div>
                    </div>
                </div>		
            </div>
        </div>
    }
}