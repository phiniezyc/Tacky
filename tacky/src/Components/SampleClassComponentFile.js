import React, {Component, Fragment } from 'react';


class SampleClassComponentFile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //You can change this.  For example if you have a form.   This is  an example of the use of state and class based components
            name: 'Chance',
        }

    }
    render () {
        return(
            // I used a Fragment to show you how it is now done.  I used a Div in the other file.  Fragments are new.  The purpose is basically just to avoid have to add a silly div.  This makes it cleaner.
            <Fragment>
            <h2>Hi, {this.state.name} This is Class based component</h2>
            <p>Use this for state that changes</p>
            </Fragment>
            )
    }

}


export default SampleClassComponentFile;