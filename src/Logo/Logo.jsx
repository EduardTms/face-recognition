import React from "react";
import Tilt from 'react-parallax-tilt'
import './Logo.css';

const Logo = () => {
    return (
            <Tilt 
            className="Tilt ma5 mt0 br2 shadows-2">
                <div 
                className="Tilt-inner" 
                style={{ height: '120px', width: '120px' }}
                >
                    Face Recognition 👀
                </div>
            </Tilt>
    );
}

export default Logo;

