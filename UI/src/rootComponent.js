import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  render() {
    return <header id="fh5co-header-section" role="header" class="" >
			<div class="container">

					<h1 id="fh5co-logo" class="pull-left">
            <a href="index.html">
              <img src="images/logo.png" alt="Slant Free HTML5 Template" />
            </a>
          </h1>					
					<nav id="fh5co-menu-wrap" role="navigation">
						<ul class="sf-menu" id="fh5co-primary-menu">
							<li class="active">
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="#" class="fh5co-sub-ddown">Dropdown</a>
								 <ul class="fh5co-sub-menu">
								 	<li><a href="left-sidebar.html">Left Sidebar</a></li>
								 	<li><a href="right-sidebar.html">Right Sidebar</a></li>
									<li>
										<a href="#" class="fh5co-sub-ddown">Free HTML5</a>
										<ul class="fh5co-sub-menu">
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
							<li class="fh5co-special"><a href="contact.html">Get started</a></li>
						</ul>
					</nav>
			</div>
		</header>
  }
}