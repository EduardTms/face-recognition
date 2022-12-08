import React from "react";
import Tilt from 'react-parallax-tilt'
import faceScanner from './face-scanner.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="tilt-container">
            <Tilt 
            className="Tilt ma5 mt0"
            options={55}
            glareEnable={true} 
            glareMaxOpacity={0.8} 
            glareColor="#ffffff" 
            glarePosition="bottom" 
            glareBorderRadius="20px">
                <div 
                style={{ height: '120px', width: '120px' }}
                className="logo-container ba br2 shadow-3"
                >
                    <img src={faceScanner} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;

