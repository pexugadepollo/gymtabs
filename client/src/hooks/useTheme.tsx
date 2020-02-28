import {ThemeContextInterface, ThemeContext} from "../context/Theme"
import {useContext} from 'react';

export function useTheme(): ThemeContextInterface {
    const themeContext = useContext(ThemeContext);
    if (!themeContext){
        throw new Error('Need context at theme context');
    }
    return themeContext;
}