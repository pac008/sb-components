import React from 'react'
import './mylabel.css'

export interface MyLabelProps {
  /**
 * Label contents
 */
  label: string;
  /**
* How large should the Label be?
*/
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
* dou you want the characters UPPERCASE ?
*/
  allCaps?: boolean;
  /**
* what color dou you want to  the Label?
*/
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
* what fontColor "CustomColor" dou you want to  the Label?
*/
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor
}: MyLabelProps) => {
  console.log(fontColor)
  return (
    <span 
      className={`${size} text-${color} label`}
      style={{color:fontColor}}>
      {allCaps ? label.toUpperCase() : label}
      </span>
  )
}

export default MyLabel;