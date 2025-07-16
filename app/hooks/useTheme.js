import { useContext } from "react"
import { ThemeObject } from "../context/ThemeContext"

export const useTheme = () => {
    const theme = useContext(ThemeObject);

    if(theme === undefined){
        throw new Error("HAS ANY ERROR");
    }

    return theme;
}