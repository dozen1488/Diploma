import React, { Component, PropTypes } from 'react'

export default class ImageList extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getSiteImages(this);
    }

    getSiteImages(self) {
        fetch('/api/sites/' + localStorage.getItem("siteName") + '/images',
        {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(pages => {
            self.setState((prevstate) => {
                prevstate.imageList = pages;
            })
        })
    }

    getInitialState() {
        return {
            imageList: []
        };
    }

    deleteImage(imageName) {
        let self = this;
        fetch('/api/sites/' + localStorage.getItem("siteName") + "/images/" + imageName,
        {
            method: 'DELETE',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            self.getSiteImages(self);
        })
    }

    render() {
        let images = this.state.imageList.map( imageName => {
            return (
                <div className="container">
                    <p>
                        <h3>{imageName}</h3>
                    </p>
                    <div className="btn-group" role="group" aria-label="...">

                        <button type="button" className="btn"
                        onClick={this.deleteImage.bind(this, imageName)}>Delete</button>
                    </div>
                </div>
            );
        })

        return <div className="col-md-4 thumbnail">
            {images}
        </div>
        }
}