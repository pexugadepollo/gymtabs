import React, { createContext, useMemo, useState} from "react";

export interface ThemeContextInterface {
    theme: string,
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(
    null
);

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = useState('dark');


  const memorizedContext = useMemo(
      () => ({
          theme,
          setTheme
      }),
      [theme, setTheme]
  );

  return(
      <ThemeContext.Provider value={memorizedContext}>
          {children}
      </ThemeContext.Provider>
  );
};