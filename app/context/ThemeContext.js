"use client"

import { createContext, useReducer } from "react";

export const ThemeObject = createContext();

const themeFUN = (state , action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return {...state, color : action.payload};
        case "CHANGE_MODE":
            return {...state, mode : action.payload};
        case "CHANGE_LANGUAGE":
            return {...state, language : action.payload};
        default:
            return state;
    }
}

export const ThemeFunction = ( {children} ) => {
    const [state, dispatch] = useReducer(themeFUN , {
        color : "cadetblue",
        mode : "light",
        language : "English"
    })

    const changeColor = (inputColor) => {
        dispatch({type: "CHANGE_COLOR", payload: inputColor})
    }
    const changeMode = (inputMode) => {
        dispatch({type: "CHANGE_MODE", payload: inputMode})
    }
    const changeLanguage = (inputLanguage) => {
        dispatch({type: "CHANGE_LANGUAGE", payload: inputLanguage})
    }
    return (
        <ThemeObject.Provider value={{...state, changeColor, changeMode, changeLanguage}}>
            {children}
        </ThemeObject.Provider>
    )
}