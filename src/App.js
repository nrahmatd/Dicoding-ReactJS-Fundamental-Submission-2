import React, { useEffect, useState, useMemo } from 'react';
import Routes from './routes/Routes';
import { AuthContext, ThemeContext } from './context/AppContext';
import { getUserLogged } from './utils/network-data';
import Toolbar from './components/Toolbar';
import { useTheme } from './hooks/AppHooks';

function App() {
  const [auth, setAuth] = useState(null);
  const [theme, setTheme] = useTheme();

  const authContextValue = useMemo(() => ({
    auth,
    setAuth
  }), [auth])

  const themeContextValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  useEffect(() => {
    getUserLogged().then((data) => {
      if (!data.error) {
        setAuth(data.data);
      } else {
        setAuth(null);
      }
    })
    .catch(() => {
      alert("Error Login");
    })

    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }

  }, [])

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <AuthContext.Provider value={authContextValue}>
        <div className="app-container">
          <header>
            <Toolbar />
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
