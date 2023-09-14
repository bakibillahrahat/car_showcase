import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchMenufacturerProps {
    manufacturer: string,
    setMenufacturer: (manufacturer: string) => void;
}

export interface SearchManuFacturerProps {
    
}