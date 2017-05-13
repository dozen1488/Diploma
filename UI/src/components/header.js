import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
        fetch("../Account/GetRightsAccess",
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
        .then(result => result.body.getReader().read())
		.then(res => JSON.parse(new TextDecoder().decode(res.value)))
        .then(userObject => {
            this.setState(userObject);
        });
    }
    
    render() {
        let reference = <a href="login.html">Войти или зарегистрироваться</a>;
        let buttonReference = <a href="login.html" className="btn btn-outline btn-lg">Войти или зарегистрироваться</a>
        if(this.state.user != "") {
            reference = <a href="cabinet.html">Кабинет {this.state.user}</a>;
            buttonReference = <a href="cabinet.html" className="btn btn-outline btn-lg">Личный кабинет</a>
        }
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
                                    <a href="index.html">Домашняя страница</a>
                                </li>
                                <li className="fh5co-special">{reference}</li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div id="fh5co-hero">
                    <div className="container">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="fh5co-hero-wrap">
                                <div className="fh5co-hero-intro">
                                    <h1 className="to-animate hero-animate-1">Бесплатное средство разработки веб-страниц</h1>
                                    <h2 className="to-animate hero-animate-2">При поддержке <a href="https://bsuir.by" target="_blank">БГУИР</a></h2>
                                    <p className="to-animate hero-animate-3">{buttonReference}</p>
                                </div>
                            </div>
                        </div>
                    </div>		
                </div>
            </div>
    }
}