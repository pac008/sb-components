/// <reference types="react" />
import './mylabel.css';
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: MyLabelProps) => JSX.Element;
