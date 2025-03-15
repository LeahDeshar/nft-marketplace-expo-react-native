import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";
type ThemeContextType = {
  dark: boolean;
  colors: typeof Colors.light | typeof Colors.dark;
  setScheme: (scheme: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  colors: Colors.light,
  setScheme: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  // const [isDark, setIsDark] = useState(colorScheme === "dark");

  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.dark);

  const theme = {
    dark: isDark,
    colors: isDark ? Colors.dark : Colors.light,
    setScheme: (scheme: "light" | "dark") => dispatch(setTheme(scheme)),
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
