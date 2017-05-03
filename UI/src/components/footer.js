import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
    render() {
        return <footer role="contentinfo" id="fh5co-footer">
			<a href="#" className="fh5co-arrow fh5co-gotop footer-box">
                <i className="ti-angle-up"></i>
            </a>
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-6 footer-box">
						<h3 className="fh5co-footer-heading">About us</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima delectus dolorem fugit totam, commodi ad.</p>
						<p>
                            <a href="#" className="btn btn-outline btn-sm">I'm a button</a>
                        </p>
					</div>
					<div className="col-md-4 col-sm-6 footer-box">
						<h3 className="fh5co-footer-heading">Links</h3>
						<ul className="fh5co-footer-links">
							<li><a href="#">Terms &amp; Conditions</a></li>
							<li><a href="#">Our Careers</a></li>
							<li><a href="#">Support &amp; FAQ's</a></li>
							<li><a href="#">Sign up</a></li>
							<li><a href="#">Log in</a></li>
						</ul>
					</div>
					<div className="col-md-4 col-sm-12 footer-box">
						<h3 className="fh5co-footer-heading">Get in touch</h3>
						<ul className="fh5co-social-icons">
							<li><a href="#"><i className="ti-google"></i></a></li>
							<li><a href="#"><i className="ti-twitter-alt"></i></a></li>
							<li><a href="#"><i className="ti-facebook"></i></a></li>	
							<li><a href="#"><i className="ti-instagram"></i></a></li>
							<li><a href="#"><i className="ti-dribbble"></i></a></li>
						</ul>
					</div>
					<div className="col-md-12 footer-box">
						<div className="fh5co-copyright">
						<p>© 2015 Free Slant. All Rights Reserved. <br/>Designed by <a href="http://freehtml5.co" target="_blank">FREEHTML5.co</a> Images by: <a href="http://unsplash.com">Unsplash</a> and <a href="http://plmd.me" target="_blank">plmd.me</a></p>
						</div>
					</div>
				</div>
				<div className="fh5co-spacer fh5co-spacer-md"></div>
			</div>
		</footer>
    }
}