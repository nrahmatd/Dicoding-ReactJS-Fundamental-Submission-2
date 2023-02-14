import { useState } from 'react';

function useInput(defaulValue = "") {
    const [value, setValue] = useState(defaulValue);

    const onValueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    return [value, onValueChangeHandler];
}

function useTheme() {
    const [theme, setTheme] = useState('dark');

    const onThemeChangeHandler = function(value) {
        setTheme(value);
        window.document.documentElement.setAttribute('data-theme', value)
        localStorage.setItem('theme', value);
    }

    return [theme, onThemeChangeHandler]
}

export { useInput, useTheme };