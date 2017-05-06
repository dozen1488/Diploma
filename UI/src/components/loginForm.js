import React, { Component, PropTypes } from 'react'

export default class Login extends Component {
    render() {
        return <div id="fh5co-main">
            <div className="container">   
                <div className="container">
                    <h1 class="jumbotron-heading">Вход</h1>
                    <form action="Account/Login" method="POST">
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input name="Email" type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input name="Password" type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <h1 class="jumbotron-heading">... или регистрация</h1>
                    <form action="Account/Register" method="POST">
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input name="Email" type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input name="Password" type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-primary">Registrate</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}