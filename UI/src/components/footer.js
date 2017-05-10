import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    render() {
        return <footer role="contentinfo" id="fh5co-footer">
			<div className="container">
				<div className="row">
					<div className="col-xs-6 col-sm-6 footer-box">
						<h3 className="fh5co-footer-heading">О нас</h3>
						<p>Это бесплатная свободно распросраняемая система упрощённой разработки веб-страниц и сайтов</p>
						<p>
                            <a href="mailto:dimadulevich@gmail.com" className="btn btn-outline btn-sm">Связаться</a>
                        </p>
					</div>
					<div className="col-xs-6 col-sm-6 footer-box">
						<h3 className="fh5co-footer-heading">Links</h3>
						<ul className="fh5co-footer-links">
							<li><a href="https://opensource.org/licenses/MIT">Лицензия</a></li>
							<li><a href="mailto:dimadulevich@gmail.com">Техподдержка</a></li>
							<li><a href="login.html">Зарегистрироваться</a></li>
							<li><a href="login.html">Войти</a></li>
						</ul>
					</div>
				</div>
				<div className="fh5co-spacer fh5co-spacer-md"></div>
			</div>
		</footer>
    }
}