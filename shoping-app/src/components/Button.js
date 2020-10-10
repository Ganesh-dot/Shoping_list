import React from 'react';
import './Button.css';

const STYLES = ['btn-primary' , 'btn-outline'];

const SIZES = ['btn-medium' , 'bnt-large' , 'btn-mobile' , 'btn-wide'];

const COLOR = ['primary' , 'blue' , 'red' , 'green'];

export const button = ({ 
            children , 
            type , 
            onCLick , 
            buttonStyle , 
            buttonSize , 
            buttonColor
        }) => {

      const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

      const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

      const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]

            return (
                <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onCLick={onCLick} type={type}>{children}</button>
            )
        }