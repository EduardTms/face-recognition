import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3 center">
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div>
                <input 
                className="f4 pa2 w-70 center"
                type="text"
                onChange={ onInputChange } />
                <br />
                <button
                className="w-30 grow f4 link ph3 pv2 dib black bg-light-pink mt2 ba b--near-white shadow-3 pointer"
                onClick={ onButtonSubmit }
                >Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;