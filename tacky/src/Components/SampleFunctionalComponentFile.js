import React from 'react';


function SampleFunctionalComponentFile(props) {

    return (
        // You Have to place a div around multiple elements on the same level or you will get an error.  React will tell you.  The new way is using a React Fragment Element.  Just use a div for now.
        <div>
        <h2>Yo Fahd</h2>
        <p>This is a functional Component, structure it like this if your component doesn't have a need for state.  If it just returns something</p>

        {/* In a class component it is the same but must do this.props... */}
        <h3>This is the passed prop from the main app component: {props.sampleProp}</h3>
        </div>
    )
}

export default SampleFunctionalComponentFile;