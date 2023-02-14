import React from "react";
import { IoMdMoon } from 'react-icons/io';
import { GrSun } from 'react-icons/gr';
import { useTheme } from "../hooks/AppHooks";

function ThemeButton() {
    const [theme, setTheme] = useTheme();

    return (
        <button
            type="button"
            className="toggle-theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {
                    theme === 'dark' ? <IoMdMoon /> : <GrSun />
                }
            </button>
    )
}

export default ThemeButton;