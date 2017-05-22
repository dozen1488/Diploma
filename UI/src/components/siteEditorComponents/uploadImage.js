import React, { Component, PropTypes } from 'react'
import Dropdown from 'react-dropdown'

export default class NewImageForm extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let siteAction = `../api/sites/${localStorage.getItem("siteName")}/images`
        return <div>
            <h2>Загрузить изображение</h2>
            <form action={siteAction} className="form-group" method="post" encType="multipart/form-data">
                <input type="file" placeholder="Выберите изображение" name="uploadedFile" />
                <input type="submit" value="Загрузить" />
            </form>
        </div>
    }
}